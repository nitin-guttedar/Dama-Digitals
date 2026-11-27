import React, { useRef, useEffect, useState } from 'react';

/**
 * ExoApeCanvas3D
 * High-performance, zero-dependency interactive 3D WebGL / Canvas visual engine.
 * Renders an architectural geodesic icosahedron wireframe surrounded by an
 * orbital 3D particle constellation with mouse tracking, drag-to-spin, and click ripples.
 */
export const ExoApeCanvas3D = ({ className = '', interactive = true }) => {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    rotX: 0.2,
    rotY: 0,
    targetRotX: 0.2,
    targetRotY: 0,
    velX: 0,
    velY: 0.003, // ambient drift
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    mouseX: 0,
    mouseY: 0,
    shockwaves: [],
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Golden ratio for icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    // Normalize to unit sphere
    const icosaVertices = rawVertices.map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    // Compute edges between vertices distance ~ 1.05
    const edges = [];
    for (let i = 0; i < icosaVertices.length; i++) {
      for (let j = i + 1; j < icosaVertices.length; j++) {
        const [x1, y1, z1] = icosaVertices[i];
        const [x2, y2, z2] = icosaVertices[j];
        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist > 0.95 && dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    // Subdivide edges to create geodesic architectural wireframe points
    const geodesicVertices = [...icosaVertices];
    const geodesicEdges = [];

    // Helper: midpoint normalized
    const midCache = {};
    const getMidpoint = (i1, i2) => {
      const key = i1 < i2 ? `${i1}_${i2}` : `${i2}_${i1}`;
      if (midCache[key] !== undefined) return midCache[key];
      const [x1, y1, z1] = icosaVertices[i1];
      const [x2, y2, z2] = icosaVertices[i2];
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const mz = (z1 + z2) / 2;
      const len = Math.hypot(mx, my, mz);
      const idx = geodesicVertices.length;
      geodesicVertices.push([mx / len, my / len, mz / len]);
      midCache[key] = idx;
      return idx;
    };

    edges.forEach(([i1, i2]) => {
      const mid = getMidpoint(i1, i2);
      geodesicEdges.push([i1, mid], [mid, i2]);
    });

    // Generate 3D orbital particle swarm (220 particles in shells)
    const particleCount = 220;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phiAngle = Math.acos(2.0 * v - 1.0);
      const r = 1.35 + Math.random() * 0.95; // shell distance

      particles.push({
        x: r * Math.sin(phiAngle) * Math.cos(theta),
        y: r * Math.sin(phiAngle) * Math.sin(theta),
        z: r * Math.cos(phiAngle),
        baseR: r,
        size: 1 + Math.random() * 1.8,
        speed: 0.001 + Math.random() * 0.003,
        angle: theta,
        yAngle: phiAngle,
        opacity: 0.2 + Math.random() * 0.6,
        isHighlight: Math.random() > 0.85
      });
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // 3D perspective projection math
    const project = (x, y, z, rotX, rotY, radiusScale, fov = 420) => {
      // Rotation Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotation X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Scaled 3D position
      const px = x1 * radiusScale;
      const py = y2 * radiusScale;
      const pz = z2 * radiusScale;

      // Perspective divide
      const dist = fov + pz;
      const scale = dist > 1 ? fov / dist : 0;
      const projX = width / 2 + px * scale;
      const projY = height / 2 + py * scale;

      return {
        x: projX,
        y: projY,
        z: pz,
        scale,
        visible: dist > 1
      };
    };

    let prevTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - prevTime) / 1000, 0.1);
      prevTime = time;

      const state = stateRef.current;

      // Update rotation with momentum / damping
      if (!state.isDragging && !prefersReducedMotion) {
        state.targetRotY += state.velY;
        // Mouse inertia influence
        const mouseNormX = (state.mouseX / (width || 1)) - 0.5;
        const mouseNormY = (state.mouseY / (height || 1)) - 0.5;
        state.targetRotX = 0.2 + mouseNormY * 0.45;
        state.targetRotY += mouseNormX * 0.008;
      }

      state.rotX += (state.targetRotX - state.rotX) * 0.06;
      state.rotY += (state.targetRotY - state.rotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Base radius scaled to canvas size
      const radiusScale = Math.min(width, height) * 0.28;

      // 1. Draw Subtle Background Atmospheric Radial Glow
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 10,
        width / 2, height / 2, radiusScale * 1.8
      );
      grad.addColorStop(0, 'rgba(224, 205, 189, 0.08)');
      grad.addColorStop(0.5, 'rgba(224, 205, 189, 0.02)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Project Geodesic Core Vertices
      const projectedVertices = geodesicVertices.map(([vx, vy, vz]) =>
        project(vx, vy, vz, state.rotX, state.rotY, radiusScale)
      );

      // Draw Edges with Depth Attenuation
      geodesicEdges.forEach(([i1, i2]) => {
        const p1 = projectedVertices[i1];
        const p2 = projectedVertices[i2];
        if (!p1.visible || !p2.visible) return;

        // Depth brightness: front is brighter (higher z), back is faint
        const avgZ = (p1.z + p2.z) / 2;
        const normZ = (avgZ + radiusScale) / (radiusScale * 2); // 0 to 1
        const alpha = Math.max(0.04, Math.min(0.65, normZ * 0.65));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(224, 205, 189, ${alpha.toFixed(3)})`;
        ctx.lineWidth = normZ > 0.6 ? 1.2 : 0.75;
        ctx.stroke();
      });

      // Draw Core Nodes
      projectedVertices.forEach((p) => {
        if (!p.visible) return;
        const normZ = (p.z + radiusScale) / (radiusScale * 2);
        if (normZ < 0.25) return; // cull back-facing nodes

        const nodeRadius = (normZ > 0.7 ? 2.5 : 1.5) * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, nodeRadius), 0, Math.PI * 2);
        ctx.fillStyle = normZ > 0.85 ? '#ffffff' : '#e0cdbd';
        ctx.fill();

        // Node Glow for nearest vertices
        if (normZ > 0.85) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, nodeRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(224, 205, 189, 0.25)';
          ctx.fill();
        }
      });

      // 3. Project & Draw Orbital Particle Swarm
      const projectedParticles = [];

      particles.forEach((pt) => {
        if (!prefersReducedMotion) {
          pt.angle += pt.speed;
        }

        // Recompute position with orbit drift
        const px = pt.baseR * Math.sin(pt.yAngle) * Math.cos(pt.angle);
        const py = pt.baseR * Math.sin(pt.yAngle) * Math.sin(pt.angle);
        const pz = pt.baseR * Math.cos(pt.yAngle);

        const proj = project(px, py, pz, state.rotX, state.rotY, radiusScale);
        if (proj.visible) {
          projectedParticles.push({ ...proj, pt });
        }
      });

      // Sort particles by depth (Painter's algorithm: draw furthest first)
      projectedParticles.sort((a, b) => a.z - b.z);

      projectedParticles.forEach(({ x, y, z, scale, pt }) => {
        const normZ = (z + radiusScale * 1.5) / (radiusScale * 3);
        const alpha = Math.max(0.1, Math.min(0.9, normZ * pt.opacity));
        const pRadius = Math.max(0.6, pt.size * scale);

        ctx.beginPath();
        ctx.arc(x, y, pRadius, 0, Math.PI * 2);
        ctx.fillStyle = pt.isHighlight
          ? `rgba(255, 255, 255, ${alpha.toFixed(3)})`
          : `rgba(224, 205, 189, ${alpha.toFixed(3)})`;
        ctx.fill();

        if (pt.isHighlight && normZ > 0.6) {
          ctx.beginPath();
          ctx.arc(x, y, pRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 205, 189, ${(alpha * 0.3).toFixed(3)})`;
          ctx.fill();
        }
      });

      // 4. Draw Click Shockwave Rings
      state.shockwaves = state.shockwaves.filter((sw) => {
        sw.radius += 3.5;
        sw.alpha -= 0.02;
        if (sw.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(224, 205, 189, ${sw.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return true;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Mouse and Pointer Handlers
    const handlePointerDown = (e) => {
      if (!interactive) return;
      const state = stateRef.current;
      state.isDragging = true;
      state.lastMouseX = e.clientX;
      state.lastMouseY = e.clientY;

      // Add click shockwave
      const rect = canvas.getBoundingClientRect();
      state.shockwaves.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 8,
        alpha: 0.8
      });
    };

    const handlePointerMove = (e) => {
      const state = stateRef.current;
      const rect = canvas.getBoundingClientRect();
      state.mouseX = e.clientX - rect.left;
      state.mouseY = e.clientY - rect.top;

      if (state.isDragging && interactive) {
        const dx = e.clientX - state.lastMouseX;
        const dy = e.clientY - state.lastMouseY;
        state.targetRotY += dx * 0.008;
        state.targetRotX += dy * 0.008;
        state.lastMouseX = e.clientX;
        state.lastMouseY = e.clientY;
      }
    };

    const handlePointerUp = () => {
      stateRef.current.isDragging = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [interactive, prefersReducedMotion]);

  return (
    <div
      className={`exo-canvas-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: interactive ? 'auto' : 'none',
        userSelect: 'none'
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: interactive ? 'grab' : 'default'
        }}
      />
      {interactive && (
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            right: 18,
            fontSize: '10px',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'var(--color-text-secondary)',
              display: 'inline-block'
            }}
          />
          <span>Interactive 3D Mesh &bull; Drag to Rotate</span>
        </div>
      )}
    </div>
  );
};
