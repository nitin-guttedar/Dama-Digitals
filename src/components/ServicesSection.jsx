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
  Layers,
  Cpu,
  Tv,
  ShoppingBag
} from 'lucide-react';
import { servicesData } from '../data/siteContent';

export const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState('data-analytics');

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const getServiceIcon = (id) => {
    switch (id) {
      case 'data-analytics':
        return <Database size={17} />;
      case 'power-bi':
        return <BarChart2 size={17} />;
      case 'tableau':
        return <PieChart size={17} />;
      case 'digital-marketing':
        return <Megaphone size={17} />;
      case 'web-development':
        return <Globe size={17} />;
      case 'youtube-social':
        return <Video size={17} />;
      case 'influencer-marketing':
        return <Users size={17} />;
      case 'media-planning':
        return <Compass size={17} />;
      default:
        return <Layers size={17} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Sparkles size={14} />
            <span>Comprehensive Solutions</span>
          </div>
          <h2>
            Specialized <span className="gradient-text">Services & Capabilities</span>
          </h2>
          <p>
            From predictive analytics & enterprise dashboards to viral video marketing and affiliate
            ecosystems, we deliver 360° growth. Click through each domain below:
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="services-nav-bar">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`service-nav-btn ${activeServiceId === service.id ? 'active' : ''}`}
              onClick={() => setActiveServiceId(service.id)}
            >
              {getServiceIcon(service.id)}
              <span>{service.navLabel}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content Panel */}
        <div className="glass-card" style={{ padding: '40px' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 20,
              marginBottom: 32,
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: 24,
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                }}
              >
                {activeService.badge}
              </span>
              <h3 style={{ fontSize: '2.2rem', marginTop: 4, marginBottom: 8 }}>
                {activeService.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 800 }}>
                {activeService.tagline}
              </p>
            </div>

            <a href="#contact" className="btn btn-primary">
              <span>Inquire This Service</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: 36 }}>
            {activeService.description}
          </p>

          {/* 1. DATA ANALYTICS: 4 Quadrants & Industries */}
          {activeService.id === 'data-analytics' && (
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: 16 }}>The 4 Pillars of Analytics</h4>
              <div className="quadrants-grid">
                {activeService.quadrants.map((q, idx) => (
                  <div key={idx} className="quadrant-card">
                    <div className="quadrant-tag">Pillar 0{idx + 1}</div>
                    <h5 style={{ fontSize: '1.2rem', margin: '6px 0 10px' }}>{q.title}</h5>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: 8 }}>
                      <strong>Purpose:</strong> {q.purpose}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 8 }}>
                      <strong>Focus:</strong> {q.focus}
                    </p>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-subtle)', marginBottom: 12 }}>
                      <strong>Techniques:</strong> {q.tools}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {q.examples.map((ex, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            background: 'rgba(56, 189, 248, 0.1)',
                            color: '#38bdf8',
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
              <div style={{ marginTop: 48 }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Solutions Tailored for Every Industry</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                  {activeService.industries.map((ind, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '18px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <h6 style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: 6 }}>
                        {ind.name}
                      </h6>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{ind.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. POWER BI: 6 Features & Portfolio */}
          {activeService.id === 'power-bi' && (
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: 20 }}>Core Power BI Capabilities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                {activeService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 20,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <CheckCircle2 size={18} color="#10b981" />
                      <h5 style={{ fontSize: '1.05rem', margin: 0 }}>{feat.title}</h5>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Portfolio Dashboards */}
              <div style={{ marginTop: 40 }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Featured Power BI Deployments</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  {activeService.portfolioDashboards.map((dash, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: 18,
                        background: 'rgba(56,189,248,0.05)',
                        border: '1px solid rgba(56,189,248,0.2)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>
                        {dash.domain}
                      </span>
                      <h5 style={{ fontSize: '1.05rem', margin: '4px 0 8px' }}>{dash.name}</h5>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{dash.metrics}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. TABLEAU: Workflow & Benefits */}
          {activeService.id === 'tableau' && (
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: 20 }}>Our 6-Phase Tableau Delivery Framework</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
                {activeService.workflow.map((phase, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 20,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span style={{ color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 800 }}>
                      {phase.step}
                    </span>
                    <h5 style={{ fontSize: '1.1rem', margin: '6px 0 8px' }}>{phase.title}</h5>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 36, padding: 24, background: 'rgba(99,102,241,0.1)', borderRadius: 'var(--radius-md)' }}>
                <h5 style={{ fontSize: '1.1rem', marginBottom: 12, color: '#818cf8' }}>
                  Proven Leadership Benefits
                </h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                  {activeService.benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} color="#38bdf8" />
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
              <h4 style={{ fontSize: '1.3rem', marginBottom: 20 }}>7 Strategic Pillars for Sustainable Growth</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                {activeService.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 22,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem' }}>
                      Pillar 0{idx + 1}
                    </span>
                    <h5 style={{ fontSize: '1.1rem', margin: '6px 0 10px' }}>{pillar.title}</h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
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
              <h4 style={{ fontSize: '1.3rem', marginBottom: 10 }}>12 High-Converting Web Architectures</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
                Tailored digital platforms built with modern technology, mobile-first responsiveness, and conversion architecture:
              </p>
              <div className="archetype-grid">
                {activeService.archetypes.map((arch, idx) => (
                  <div key={idx} className="archetype-card">
                    <h5 style={{ fontSize: '1.05rem', color: '#38bdf8', marginBottom: 8 }}>
                      {arch.title}
                    </h5>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 36 }}>
                {activeService.youtubeImpact.stats.map((st, idx) => (
                  <div key={idx} className="stat-card" style={{ padding: 18 }}>
                    <div className="stat-value" style={{ fontSize: '2.2rem' }}>{st.count}</div>
                    <div className="stat-label">{st.label}</div>
                    <div className="stat-sub">{st.detail}</div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Proven YouTube Growth Stories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 30 }}>
                {activeService.youtubeImpact.caseNotes.map((note, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 20,
                      background: 'rgba(56, 189, 248, 0.05)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    📌 {note}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. INFLUENCER MARKETING: 9 Creator Categories */}
          {activeService.id === 'influencer-marketing' && (
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: 16 }}>9 Targeted Creator Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {activeService.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 18,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <h5 style={{ fontSize: '1.05rem', color: '#a855f7', marginBottom: 6 }}>
                      {cat.name} Influencers
                    </h5>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
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
              <h4 style={{ fontSize: '1.3rem', marginBottom: 18 }}>Our Media Planning Capabilities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
                {activeService.coreCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: 20,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <h5 style={{ fontSize: '1.05rem', color: '#38bdf8', marginBottom: 8 }}>
                      {cap.title}
                    </h5>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
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
