import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, BarChart2, Shield } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

export const Navbar = ({ onOpenPrivacy, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Analytics & BI', href: '#interactive-bi' },
    { label: 'Why Choose Us', href: '#about' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Affiliate Network', href: '#affiliate' },
    { label: '2026 Playbook', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="nav-brand">
            <img
              src={companyInfo.logo}
              alt="DAMA Digital Analytics"
              className="brand-logo-img"
              onError={(e) => {
                // Fallback gracefully if external Wix image URL is blocked
                e.target.style.display = 'none';
              }}
            />
            <div className="brand-text-block">
              <span className="brand-title">DAMA DIGITAL</span>
              <span className="brand-subtitle">ANALYTICS &bull; INDIA</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link-item">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a
              href={`tel:${companyInfo.phone}`}
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              title="Direct Call"
            >
              <Phone size={15} color="#38bdf8" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '9px 18px', fontSize: '0.88rem' }}
            >
              <span>Get Free Audit</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div className="brand-text-block">
            <span className="brand-title">DAMA DIGITAL</span>
            <span className="brand-subtitle">Analytics & Marketing</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} color="#38bdf8" />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a
            href={`tel:${companyInfo.phone}`}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={16} color="#38bdf8" />
            <span>Call: {companyInfo.phoneFormatted}</span>
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Request Proposal</span>
          </a>
        </div>
      </div>
    </>
  );
};
