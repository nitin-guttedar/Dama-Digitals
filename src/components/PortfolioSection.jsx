import React, { useState } from 'react';
import { Award, Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioCases } from '../data/siteContent';

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
    <section id="portfolio" style={{ padding: '100px 0', background: 'rgba(10, 15, 27, 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Award size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2>
            Client Success & <span className="gradient-text">Measurable Results</span>
          </h2>
          <p>
            Real outcomes delivered for brands across e-commerce, banking, education, and healthcare.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24 }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'analytics', label: 'Analytics & BI' },
              { id: 'marketing', label: 'Performance & Video' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: filter === tab.id ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  background: filter === tab.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: filter === tab.id ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cases Grid */}
        <div className="portfolio-grid">
          {filteredCases.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}
                >
                  {item.category}
                </span>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', margin: '8px 0 4px' }}>{item.client}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: 12 }}>
                Executive Sponsor: {item.lead}
              </div>

              {/* Highlight Stat */}
              <div className="portfolio-stat-highlight">{item.statNumber}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: 12 }}>
                {item.statLabel}
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>

              {/* Quote */}
              <div className="quote-box">
                <Quote size={16} color="var(--primary)" style={{ opacity: 0.7, marginBottom: 4 }} />
                <p style={{ fontSize: '0.88rem', margin: 0, fontStyle: 'italic' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout */}
        <div
          style={{
            marginTop: 50,
            padding: 32,
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.35rem', marginBottom: 4 }}>
              Want Similar Double-Digit Growth for Your Organization?
            </h4>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>
              Let our senior marketing & data architects audit your existing campaigns and reporting pipelines.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            <span>Book Strategy Session</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
