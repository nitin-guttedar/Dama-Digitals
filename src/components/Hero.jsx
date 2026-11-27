import React from 'react';
import { ArrowRight, BarChart3, Globe, Sparkles } from 'lucide-react';
import { heroStats } from '../data/siteContent';
import { ExoApeCanvas3D } from './ExoApeCanvas3D';
import { TiltCard3D } from './TiltCard3D';

export const Hero = () => {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container">
        {/* Dual-Column 3D Hero Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr',
            gap: 'var(--space-4)',
            alignItems: 'center',
            minHeight: '520px',
            position: 'relative',
            zIndex: 1
          }}
          className="hero-grid-layout"
        >
          {/* Left Column: Editorial Display Typography */}
          <div className="hero-content reveal-up" style={{ textAlign: 'left', margin: 0 }}>
            {/* Badge */}
            <div className="badge">
              <span className="badge-dot" aria-hidden="true" />
              <span>360° Partner for Digital Marketing &amp; Data Intelligence</span>
            </div>

            {/* Main Headline with Exo Ape editorial scale and Lausanne styling */}
            <h1 className="hero-headline" style={{ fontSize: 'clamp(36px, 5.2vw, 76px)', maxWidth: 760 }}>
              Where Marketing <span className="accent">Creativity</span> Meets{' '}
              <span className="accent">Data Intelligence</span>.
            </h1>

            {/* Description */}
            <p className="hero-description" style={{ fontSize: 'var(--font-size-md)', maxWidth: 640, margin: '0 0 var(--space-4) 0' }}>
              We specialize in leveraging precision data architectures, high-impact marketing systems,
              and measurable performance to scale modern enterprises. From predictive analytics to viral video funnels,
              we turn raw telemetry into compound revenue growth.
            </p>

            {/* Standardized Button System (Primary Standard Variant) */}
            <div className="hero-cta-group" style={{ justifyContent: 'flex-start', marginBottom: 'var(--space-4)' }}>
              <a href="#services" className="btn btn-primary">
                <span>Discover Our Services</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <BarChart3 size={15} aria-hidden="true" />
                <span>Get Free BI &amp; Marketing Audit</span>
              </a>
            </div>

            {/* Global Serving Banner */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--border-subtle)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-inverse)',
              }}
            >
              <Globe size={14} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
              <span>
                <strong>Operational Hubs:</strong> Gulbarga &bull; Hyderabad &bull; Pune &bull; Bengaluru &mdash;{' '}
                <span style={{ color: 'var(--color-text-secondary)' }}>Serving Clients Worldwide</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Visual Experience */}
          <div
            className="hero-3d-visual float-3d"
            style={{
              position: 'relative',
              width: '100%',
              height: '480px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ExoApeCanvas3D interactive={true} />
          </div>
        </div>

        {/* Stats Bar with 3D Tilt Cards (Part of 7 Lists / structured data matrices) */}
        <div
          className="stats-grid"
          role="list"
          aria-label="Key Performance Indicators"
          style={{ marginTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)' }}
        >
          {heroStats.map((stat, idx) => (
            <TiltCard3D key={idx} maxTilt={8} scale={1.03} style={{ borderRadius: 'var(--radius-sm)' }}>
              <div
                className="stat-card"
                role="listitem"
                style={{
                  background: 'var(--color-surface-raised)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--space-3) var(--space-2)'
                }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};
