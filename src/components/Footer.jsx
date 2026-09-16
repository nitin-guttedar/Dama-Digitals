import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, Shield } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

export const Footer = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img
                src={companyInfo.logo}
                alt="Dama Digital Analytics"
                style={{ height: 38, width: 'auto', borderRadius: 6 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  DAMA DIGITAL
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  ANALYTICS &bull; INDIA
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 360, marginBottom: 20 }}>
              {companyInfo.tagline}. We empower modern brands with data intelligence, predictive
              dashboards, and high-ROI digital marketing funnels.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#10b981' }}>
              <Globe size={15} />
              <span>Gulbarga &bull; Hyderabad &bull; Pune &bull; Bengaluru &bull; Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>All Services</a></li>
              <li><a href="#interactive-bi" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Interactive BI</a></li>
              <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About & Story</a></li>
              <li><a href="#portfolio" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Client Work</a></li>
              <li><a href="#affiliate" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Affiliate Network</a></li>
              <li><a href="#blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>2026 Playbook</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Get in Touch</a></li>
            </ul>
          </div>

          {/* Col 3: Core Practices */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Practices
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Power BI Dashboards</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tableau Visual Analytics</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Predictive Data Modeling</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Full-Funnel Paid Ads</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>YouTube Channel SEO</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Influencer Discovery</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>E-Commerce Development</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Direct Reach
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={16} color="var(--primary)" />
                <a href={`tel:${companyInfo.phone}`} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                  {companyInfo.phoneFormatted}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={16} color="var(--primary)" />
                <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                  {companyInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: 4 }} />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {companyInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name} &bull; All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <button
              onClick={onOpenPrivacy}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                textDecoration: 'underline'
              }}
            >
              Privacy Policy
            </button>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
              title="Back to Top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
