import React, { useState } from 'react';
import {
  Database,
  BarChart2,
  PieChart,
  Megaphone,
  Globe,
  Video,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/siteContent';

export const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState('data-analytics');

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const getServiceIcon = (id) => {
    switch (id) {
      case 'data-analytics':
        return <Database size={15} aria-hidden="true" />;
      case 'power-bi':
        return <BarChart2 size={15} aria-hidden="true" />;
      case 'tableau':
        return <PieChart size={15} aria-hidden="true" />;
      case 'digital-marketing':
        return <Megaphone size={15} aria-hidden="true" />;
      case 'web-development':
        return <Globe size={15} aria-hidden="true" />;
      case 'youtube-social':
        return <Video size={15} aria-hidden="true" />;
      case 'influencer-marketing':
        return <Users size={15} aria-hidden="true" />;
      case 'media-planning':
        return <Compass size={15} aria-hidden="true" />;
      default:
        return <Layers size={15} aria-hidden="true" />;
    }
  };

  return (
    <section id="services" className="services-section" aria-label="Services & Capabilities">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Sparkles size={13} aria-hidden="true" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2>
            Specialized <span className="accent-text">Capabilities &amp; Services</span>
          </h2>
          <p>
            From predictive analytics &amp; enterprise business intelligence to viral video marketing and affiliate
            ecosystems, we deliver 360° growth. Navigate each core practice below:
          </p>
        </div>

        {/* Secondary Contextual Navigation Bar (Part of Navigation System 2) */}
        <nav aria-label="Service Practices Switcher">
          <div className="services-nav-bar" role="tablist">
            {servicesData.map((service) => (
              <button
                key={service.id}
                role="tab"
                id={`service-tab-${service.id}`}
                aria-selected={activeServiceId === service.id}
                aria-controls={`service-panel-${service.id}`}
                className={`service-nav-btn ${activeServiceId === service.id ? 'active' : ''}`}
                onClick={() => setActiveServiceId(service.id)}
              >
                {getServiceIcon(service.id)}
                <span>{service.navLabel}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Active Service Content Panel */}
        <div
          id={`service-panel-${activeService.id}`}
          role="tabpanel"
          aria-labelledby={`service-tab-${activeService.id}`}
          className="service-content-panel"
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-4)',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: 'var(--space-3)',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  letterSpacing: '0.08em',
                }}
              >
                {activeService.badge}
              </span>
              <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginTop: 4, marginBottom: 8, fontWeight: 400 }}>
                {activeService.title}
              </h3>
              <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-md)', maxWidth: 800 }}>
                {activeService.tagline}
              </p>
            </div>

            <a href="#contact" className="btn btn-primary">
              <span>Inquire This Service</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-inverse)', lineHeight: 'var(--font-line-height-base)', marginBottom: 'var(--space-4)' }}>
            {activeService.description}
          </p>

          {/* 1. DATA ANALYTICS: 4 Quadrants & Industries */}
          {activeService.id === 'data-analytics' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>The 4 Pillars of Analytics</h4>
              <div className="quadrants-grid">
                {activeService.quadrants.map((q, idx) => (
                  <div key={idx} className="quadrant-card">
                    <div className="quadrant-tag">Pillar 0{idx + 1}</div>
                    <h5 style={{ fontSize: 'var(--font-size-md)', margin: '6px 0 10px', color: 'var(--color-text-tertiary)' }}>{q.title}</h5>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', marginBottom: 8 }}>
                      <strong>Purpose:</strong> {q.purpose}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 8 }}>
                      <strong>Focus:</strong> {q.focus}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginBottom: 12 }}>
                      <strong>Techniques:</strong> {q.tools}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {q.examples.map((ex, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: 'var(--font-size-xs)',
                            background: 'var(--color-surface-base)',
                            border: '1px solid var(--border-medium)',
                            color: 'var(--color-text-secondary)',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Industry Grid */}
              <div style={{ marginTop: 'var(--space-5)' }}>
                <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Solutions Tailored for Every Industry</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2)' }}>
                  {activeService.industries.map((ind, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 'var(--space-2)',
                        background: 'var(--color-surface-overlay)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <h6 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 6 }}>
                        {ind.name}
                      </h6>
                      <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0 }}>{ind.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. POWER BI: 6 Features & Portfolio */}
          {activeService.id === 'power-bi' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Core Power BI Capabilities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2)' }}>
                {activeService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                      <h5 style={{ fontSize: 'var(--font-size-md)', margin: 0, color: 'var(--color-text-tertiary)' }}>{feat.title}</h5>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', margin: 0 }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Portfolio Dashboards */}
              <div style={{ marginTop: 'var(--space-4)' }}>
                <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Featured Power BI Deployments</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-2)' }}>
                  {activeService.portfolioDashboards.map((dash, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 'var(--space-2)',
                        background: 'var(--color-surface-overlay)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                        {dash.domain}
                      </span>
                      <h5 style={{ fontSize: 'var(--font-size-md)', margin: '4px 0 8px', color: 'var(--color-text-tertiary)' }}>{dash.name}</h5>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{dash.metrics}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. TABLEAU: Workflow & Benefits */}
          {activeService.id === 'tableau' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Our 6-Phase Tableau Delivery Framework</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2)' }}>
                {activeService.workflow.map((phase, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)', fontWeight: 600 }}>
                      {phase.step}
                    </span>
                    <h5 style={{ fontSize: 'var(--font-size-md)', margin: '6px 0 8px', color: 'var(--color-text-tertiary)' }}>{phase.title}</h5>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', margin: 0 }}>
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-4)', padding: 'var(--space-3)', background: 'var(--color-surface-overlay)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-medium)' }}>
                <h5 style={{ fontSize: 'var(--font-size-md)', marginBottom: 12, color: 'var(--color-text-secondary)' }}>
                  Proven Leadership Benefits
                </h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  {activeService.benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. DIGITAL MARKETING: 7 Pillars */}
          {activeService.id === 'digital-marketing' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>7 Strategic Pillars for Sustainable Growth</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2)' }}>
                {activeService.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span style={{ color: 'var(--color-text-secondary)', fontWeight: 600, fontSize: 'var(--font-size-xs)' }}>
                      Pillar 0{idx + 1}
                    </span>
                    <h5 style={{ fontSize: 'var(--font-size-md)', margin: '6px 0 10px', color: 'var(--color-text-tertiary)' }}>{pillar.title}</h5>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. WEB DEVELOPMENT: 12 Solution Archetypes */}
          {activeService.id === 'web-development' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 8 }}>12 High-Converting Web Architectures</h4>
              <p style={{ color: 'var(--color-text-inverse)', marginBottom: 'var(--space-3)' }}>
                Tailored digital platforms built with modern technology, mobile-first responsiveness, and conversion architecture:
              </p>
              <div className="archetype-grid">
                {activeService.archetypes.map((arch, idx) => (
                  <div key={idx} className="archetype-card">
                    <h5 style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 8, fontWeight: 500 }}>
                      {arch.title}
                    </h5>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
                      {arch.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. YOUTUBE & SOCIAL MEDIA */}
          {activeService.id === 'youtube-social' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                {activeService.youtubeImpact.stats.map((st, idx) => (
                  <div key={idx} className="stat-card" style={{ padding: 'var(--space-2)' }}>
                    <div className="stat-value" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>{st.count}</div>
                    <div className="stat-label">{st.label}</div>
                    <div className="stat-sub">{st.detail}</div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Proven YouTube Growth Stories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                {activeService.youtubeImpact.caseNotes.map((note, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-sm)',
                      lineHeight: 'var(--font-line-height-base)',
                      color: 'var(--color-text-inverse)'
                    }}
                  >
                    &bull; {note}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. INFLUENCER MARKETING: 9 Creator Categories */}
          {activeService.id === 'influencer-marketing' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>9 Targeted Creator Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-2)' }}>
                {activeService.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <h5 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginBottom: 6 }}>
                      {cat.name} Influencers
                    </h5>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
                      <strong>Content formats:</strong> {cat.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. MEDIA PLANNING */}
          {activeService.id === 'media-planning' && (
            <div>
              <h4 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>Our Media Planning Capabilities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2)' }}>
                {activeService.coreCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 'var(--space-2)',
                      background: 'var(--color-surface-overlay)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <h5 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginBottom: 8 }}>
                      {cap.title}
                    </h5>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-inverse)', margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
