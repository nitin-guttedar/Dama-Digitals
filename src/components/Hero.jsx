import React from 'react';
import { ArrowRight, BarChart3, Sparkles, Shield, CheckCircle, Globe } from 'lucide-react';
import { companyInfo, heroStats } from '../data/siteContent';

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <div className="badge" style={{ marginBottom: 20 }}>
            <span className="badge-dot"></span>
            <span>Your 360° Partner for Digital Marketing & Data Analytics</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Where <span className="gradient-text">Marketing Creativity</span> Meets{' '}
            <span className="gradient-accent-text">Data Intelligence</span>.
          </h1>

          {/* Description */}
          <p className="hero-description">
            We specialize in leveraging data-driven strategies, innovative marketing campaigns,
            and measurable results to help businesses thrive in the modern digital landscape.
            From predictive analytics to viral video funnels, we turn raw numbers into exponential growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#services" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              <span>Discover Our Services</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '14px 28px' }}>
              <BarChart3 size={18} color="#38bdf8" />
              <span>Get Free BI & Marketing Audit</span>
            </a>
          </div>

          {/* Global Serving Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <Globe size={15} color="#10b981" />
            <span>
              <strong>Hubs:</strong> Gulbarga &bull; Hyderabad &bull; Pune &bull; Bengaluru &mdash;{' '}
              <span style={{ color: '#38bdf8' }}>Serving Clients Worldwide</span>
            </span>
          </div>

          {/* Stats Bar */}
          <div className="stats-grid">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
