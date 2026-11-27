import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

export const Footer = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand Info & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img
                src={companyInfo.logo}
                alt="DAMA Digital Analytics"
                style={{ height: 32, width: 'auto', borderRadius: 'var(--radius-xs)' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 500, color: 'var(--color-text-tertiary)', lineHeight: 1.1, textTransform: 'uppercase' }}>
                  DAMA DIGITAL
                </div>
                <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  ANALYTICS &bull; INDIA
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: '22px', maxWidth: 360, marginBottom: 18 }}>
              {companyInfo.tagline}. Precision data architectures, executive intelligence dashboards, and full-funnel digital execution.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
              <Globe size={13} aria-hidden="true" />
              <span>Gulbarga &bull; Hyderabad &bull; Pune &bull; Bengaluru &bull; Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Directory (Links 18 to 24 of 29 Links) - List Component 6 */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Navigation Directory
            </h4>
            <ul className="footer-links-list">
              <li><a href="#services">All Services</a></li>
              <li><a href="#interactive-bi">Interactive BI</a></li>
              <li><a href="#about">About &amp; Story</a></li>
              <li><a href="#portfolio">Client Work</a></li>
              <li><a href="#affiliate">Affiliate Network</a></li>
              <li><a href="#blog">2026 Playbook</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>

          {/* Col 3: Core Practices (Links 25 to 27 of 29 Links) - List Component 7 */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Core Practices
            </h4>
            <ul className="footer-links-list">
              <li><a href="#services">Power BI Dashboards</a></li>
              <li><a href="#services">Tableau Visual Analytics</a></li>
              <li><a href="#services">Predictive Data Modeling</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries (Links 28 & 29 of 29 Links) */}
          <div>
            <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Direct Reach
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 'var(--font-size-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={14} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                <a href={`tel:${companyInfo.phone}`} style={{ color: 'var(--color-text-tertiary)', textDecoration: 'none', fontWeight: 500 }}>
                  {companyInfo.phoneFormatted}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Mail size={14} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--color-text-inverse)', textDecoration: 'none' }}>
                  {companyInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={14} style={{ color: 'var(--color-text-secondary)', flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', lineHeight: '18px' }}>
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
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: 'var(--font-size-xs)',
                textDecoration: 'underline'
              }}
              aria-label="Open Privacy Policy Document"
            >
              Privacy Policy
            </button>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '6px 14px', fontSize: 'var(--font-size-xs)' }}
              title="Return to top of page"
              aria-label="Return to top of page"
            >
              <ArrowUp size={13} aria-hidden="true" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
