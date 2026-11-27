import React from 'react';
import {
  Database,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Headphones,
  Layers,
  Cpu,
  ShieldCheck,
  Target,
  Eye,
  BookOpen
} from 'lucide-react';
import { aboutData } from '../data/siteContent';
import { TiltCard3D } from './TiltCard3D';

export const AboutSection = () => {
  const getPillarIcon = (iconName) => {
    const iconStyle = { color: 'var(--color-text-secondary)' };
    switch (iconName) {
      case 'Database': return <Database size={20} style={iconStyle} aria-hidden="true" />;
      case 'TrendingUp': return <TrendingUp size={20} style={iconStyle} aria-hidden="true" />;
      case 'Sparkles': return <Sparkles size={20} style={iconStyle} aria-hidden="true" />;
      case 'CheckCircle2': return <CheckCircle2 size={20} style={iconStyle} aria-hidden="true" />;
      case 'Headphones': return <Headphones size={20} style={iconStyle} aria-hidden="true" />;
      case 'Layers': return <Layers size={20} style={iconStyle} aria-hidden="true" />;
      case 'Cpu': return <Cpu size={20} style={iconStyle} aria-hidden="true" />;
      case 'ShieldCheck': return <ShieldCheck size={20} style={iconStyle} aria-hidden="true" />;
      default: return <Sparkles size={20} style={iconStyle} aria-hidden="true" />;
    }
  };

  const industries = [
    "BFSI & Banking", "FinTech & UPI", "Gaming & iGaming", "Crypto & Web3",
    "Healthcare & Pharma", "Retail & D2C", "EdTech & Education", "Real Estate"
  ];

  return (
    <section id="about" className="about-section" aria-label="About & Strategic Foundations">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <BookOpen size={13} aria-hidden="true" />
            <span>Foundations &amp; Ethos</span>
          </div>
          <h2>
            Architecting Growth Where <span className="accent-text">Creativity Meets Data</span>
          </h2>
          <p>
            Too often, enterprises rely solely on flashy brand campaigns or cold telemetry. At DAMA Digital Analytics,
            compound growth occurs when creative engineering and statistical rigor work as one unified system.
          </p>
        </div>

        {/* Story, Mission & Vision 3D Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          {/* Story */}
          <TiltCard3D maxTilt={6} scale={1.015} style={{ borderRadius: 'var(--radius-md)' }}>
            <div className="glass-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 10, borderRadius: 'var(--radius-xs)', background: 'var(--color-surface-base)', border: '1px solid var(--border-medium)' }}>
                  <BookOpen size={18} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', margin: 0, fontWeight: 500 }}>{aboutData.storyTitle}</h3>
              </div>
              <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--font-line-height-base)' }}>
                {aboutData.story}
              </p>
            </div>
          </TiltCard3D>

          {/* Mission */}
          <TiltCard3D maxTilt={6} scale={1.015} style={{ borderRadius: 'var(--radius-md)' }}>
            <div className="glass-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 10, borderRadius: 'var(--radius-xs)', background: 'var(--color-surface-base)', border: '1px solid var(--border-medium)' }}>
                  <Target size={18} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', margin: 0, fontWeight: 500 }}>{aboutData.missionTitle}</h3>
              </div>
              <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--font-line-height-base)' }}>
                {aboutData.mission}
              </p>
            </div>
          </TiltCard3D>

          {/* Vision */}
          <TiltCard3D maxTilt={6} scale={1.015} style={{ borderRadius: 'var(--radius-md)' }}>
            <div className="glass-card" style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 10, borderRadius: 'var(--radius-xs)', background: 'var(--color-surface-base)', border: '1px solid var(--border-medium)' }}>
                  <Eye size={18} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', margin: 0, fontWeight: 500 }}>{aboutData.visionTitle}</h3>
              </div>
              <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--font-line-height-base)' }}>
                {aboutData.vision}
              </p>
            </div>
          </TiltCard3D>
        </div>

        {/* 8 Principles: Why Choose Us (Part of 7 Lists Component 5) */}
        <div>
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <h3 style={{ fontSize: 'var(--font-display-md)', fontWeight: 300, color: 'var(--color-text-tertiary)' }}>
              Principles of Modern Engagement
            </h3>
            <p style={{ color: 'var(--color-text-inverse)', marginTop: 8 }}>
              Eight core operating standards that ensure every deployment produces measurable bottom-line value.
            </p>
          </div>

          <div className="ethos-grid" role="list" aria-label="Core operational principles">
            {aboutData.whyChooseUs.map((pillar) => (
              <TiltCard3D key={pillar.id} maxTilt={6} scale={1.02} style={{ borderRadius: 'var(--radius-sm)' }}>
                <div className="ethos-card" role="listitem" style={{ height: '100%' }}>
                  <div style={{ marginBottom: 14 }}>{getPillarIcon(pillar.icon)}</div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', marginBottom: 8, color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 20 }}>
                    {pillar.desc}
                  </p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>

        {/* Industry Breadth Strip */}
        <div
          style={{
            marginTop: 'var(--space-6)',
            padding: 'var(--space-3)',
            background: 'var(--color-surface-raised)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
            Specialized Domain Experience Across Verticals
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
            {industries.map((ind, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-surface-overlay)',
                  border: '1px solid var(--border-medium)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-inverse)',
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
