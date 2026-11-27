import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/siteContent';

export const Navbar = ({ onOpenPrivacy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#" className="nav-brand" aria-label="DAMA Digital Analytics - Home">
            <img
              src={companyInfo.logo}
              alt="DAMA Digital Analytics"
              className="brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="brand-text-block">
              <span className="brand-title">DAMA DIGITAL</span>
              <span className="brand-subtitle">Analytics &bull; India</span>
            </div>
          </a>

          {/* Desktop Nav Links (Part of Navigation System 1 & 7 Links) */}
          <nav aria-label="Primary Navigation">
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
              title="Direct Telephone Inquiries"
              aria-label={`Call us at ${companyInfo.phoneFormatted}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href="#contact"
              className="btn btn-primary"
              aria-label="Request a Free Digital & BI Audit"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Part of Navigation System 2) */}
      {mobileMenuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile Navigation Menu"
        aria-modal={mobileMenuOpen}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
          <div className="brand-text-block">
            <span className="brand-title">DAMA DIGITAL</span>
            <span className="brand-subtitle">Analytics &amp; Marketing</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            className="mobile-toggle"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile Navigation Links">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <a
            href={`tel:${companyInfo.phone}`}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={14} aria-hidden="true" />
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
