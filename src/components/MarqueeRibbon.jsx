import React from 'react';

/**
 * MarqueeRibbon
 * Continuous, smooth linear scrolling ticker ribbon showcasing Exo Ape's
 * core technical capabilities, tokens, and brand principles.
 */
export const MarqueeRibbon = ({ reverse = false, speed = '32s' }) => {
  const items = [
    'CREATIVE ENGINEERING',
    'PREDICTIVE TELEMETRY',
    'EXO APE TOKEN ARCHITECTURE',
    'WCAG 2.2 AA VERIFIED',
    'FULL-FUNNEL ANALYTICS',
    'DATA INTELLIGENCE',
    'HIGH-CONVERTING DIGITAL SYSTEMS',
    'POWER BI & TABLEAU CORE'
  ];

  return (
    <div
      className="marquee-ribbon"
      style={{
        overflow: 'hidden',
        userSelect: 'none',
        padding: '16px 0',
        background: 'var(--color-surface-raised)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
      aria-label="Core Technical Capabilities Ticker"
    >
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          whiteSpace: 'nowrap',
          animationDuration: speed
        }}
      >
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items].map((text, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--font-size-xs)',
              letterSpacing: '0.12em',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: idx % 2 === 0 ? 'var(--color-text-tertiary)' : 'var(--color-text-secondary)'
            }}
          >
            <span>{text}</span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--color-text-secondary)',
                opacity: 0.6
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
