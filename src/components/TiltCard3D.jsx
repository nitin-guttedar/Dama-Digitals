import React, { useRef, useState } from 'react';

/**
 * TiltCard3D
 * Applies interactive 3D perspective tilting, elevation, and dynamic
 * specular glare reflection responding to pointer coordinates.
 */
export const TiltCard3D = ({
  children,
  className = '',
  style = {},
  maxTilt = 10,
  glare = true,
  scale = 1.015,
  ...props
}) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2; // -1 to 1
    const normY = (y / rect.height - 0.5) * 2; // -1 to 1

    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 80ms ease-out'
    });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18
      });
    }
  };

  const handlePointerLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-3d ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
        ...tiltStyle
      }}
      {...props}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(224, 205, 189, ${glarePos.opacity}), transparent 70%)`,
            transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      )}
    </div>
  );
};
