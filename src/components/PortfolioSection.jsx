import React, { useState } from 'react';
import { Award, Star, Quote, ArrowUpRight } from 'lucide-react';
import { portfolioCases } from '../data/siteContent';
import { TiltCard3D } from './TiltCard3D';

export const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredCases = filter === 'all'
    ? portfolioCases
    : portfolioCases.filter((c) => {
        if (filter === 'analytics') return c.category.includes('Analytics') || c.category.includes('BI');
        if (filter === 'marketing') return c.category.includes('Marketing') || c.category.includes('Video') || c.category.includes('Influencer');
        return true;
      });

  return (
    <section id="portfolio" className="portfolio-section" aria-label="Portfolio & Case Studies">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Award size={13} aria-hidden="true" />
            <span>Proven Track Record</span>
          </div>
          <h2>
            Client Deployments &amp; <span className="accent-text">Measurable Results</span>
          </h2>
          <p>
            Real outcomes delivered for institutional brands across banking, health systems, e-commerce, and digital ventures.
          </p>

          {/* Filter Pills with Token States */}
          <div style={{ display: 'flex', gap: 10, marginTop: 'var(--space-3)' }} role="tablist" aria-label="Filter Case Studies">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'analytics', label: 'Analytics & BI' },
              { id: 'marketing', label: 'Performance & Video' }
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`btn ${filter === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '8px 18px', fontSize: 'var(--font-size-xs)' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cases Grid with 3D Interactive Tilting */}
        <div className="portfolio-grid">
          {filteredCases.map((item) => (
            <TiltCard3D key={item.id} maxTilt={6} scale={1.02} style={{ borderRadius: 'var(--radius-md)' }}>
              <div className="portfolio-card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--color-text-secondary)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      letterSpacing: '0.06em'
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="var(--color-text-secondary)" color="var(--color-text-secondary)" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: 'var(--font-size-lg)', margin: '8px 0 4px', fontWeight: 400 }}>{item.client}</h3>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 12 }}>
                  Executive Sponsor: {item.lead}
                </div>

                {/* Highlight Stat */}
                <div className="portfolio-stat-highlight">
                  <span>{item.statNumber}</span>
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-tertiary)', marginBottom: 12 }}>
                  {item.statLabel}
                </div>

                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', lineHeight: 'var(--font-line-height-base)' }}>
                  {item.desc}
                </p>

                {/* Quote */}
                <div className="quote-box">
                  <Quote size={14} style={{ color: 'var(--color-text-secondary)', opacity: 0.8, marginBottom: 4 }} aria-hidden="true" />
                  <p style={{ fontSize: 'var(--font-size-xs)', margin: 0 }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

        {/* Audit Callout */}
        <div
          style={{
            marginTop: 'var(--space-6)',
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--border-medium)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20
          }}
        >
          <div>
            <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 4, fontWeight: 400 }}>
              Need Measurable Analytics &amp; Performance Transformation?
            </h4>
            <p style={{ color: 'var(--color-text-inverse)', margin: 0, fontSize: 'var(--font-size-sm)' }}>
              Let our senior data architects audit your existing campaigns and reporting pipelines.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            <span>Book Strategy Session</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
