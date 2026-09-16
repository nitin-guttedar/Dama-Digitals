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

export const AboutSection = () => {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database size={22} color="#38bdf8" />;
      case 'TrendingUp': return <TrendingUp size={22} color="#10b981" />;
      case 'Sparkles': return <Sparkles size={22} color="#f59e0b" />;
      case 'CheckCircle2': return <CheckCircle2 size={22} color="#38bdf8" />;
      case 'Headphones': return <Headphones size={22} color="#a855f7" />;
      case 'Layers': return <Layers size={22} color="#6366f1" />;
      case 'Cpu': return <Cpu size={22} color="#38bdf8" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="#10b981" />;
      default: return <Sparkles size={22} color="#38bdf8" />;
    }
  };

  const industries = [
    "BFSI & Banking", "FinTech & UPI", "Gaming & iGaming", "Crypto & Web3",
    "Healthcare & Pharma", "Retail & D2C", "EdTech & Education", "Real Estate"
  ];

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <BookOpen size={14} />
            <span>Our Foundation & Ethos</span>
          </div>
          <h2>
            Building Growth Where <span className="gradient-text">Creativity Meets Data</span>
          </h2>
          <p>
            Too often, companies rely solely on flashy campaigns or cold raw numbers. At Dama Digital Analytics,
            the real magic happens when both work harmoniously together.
          </p>
        </div>

        {/* Story, Mission & Vision Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 60 }}>
          {/* Story */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, borderRadius: 'var(--radius-sm)', background: 'rgba(56,189,248,0.1)' }}>
                <BookOpen size={22} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{aboutData.storyTitle}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              {aboutData.story}
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, borderRadius: 'var(--radius-sm)', background: 'rgba(99,102,241,0.1)' }}>
                <Target size={22} color="#6366f1" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{aboutData.missionTitle}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              {aboutData.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 10, borderRadius: 'var(--radius-sm)', background: 'rgba(16,185,129,0.1)' }}>
                <Eye size={22} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{aboutData.visionTitle}</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>
              {aboutData.vision}
            </p>
          </div>
        </div>

        {/* 8 Pillars: Why Choose Us */}
        <div style={{ marginTop: 40 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{ fontSize: '2rem' }}>
              Why Modern Brands Choose <span className="gradient-accent-text">DAMA Digital Analytics</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>
              Eight core principles that ensure every campaign and BI deployment translates into tangible ROI.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {aboutData.whyChooseUs.map((pillar) => (
              <div key={pillar.id} className="glass-card" style={{ padding: 24 }}>
                <div style={{ marginBottom: 14 }}>{getPillarIcon(pillar.icon)}</div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: 8 }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Breadth Strip */}
        <div
          style={{
            marginTop: 60,
            padding: '24px 32px',
            background: 'rgba(14, 20, 36, 0.6)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            Specialized Experience Across Verticals
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
            {industries.map((ind, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
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
