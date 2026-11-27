import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/siteContent';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Data Analytics & Power BI',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsLoading(true);

    // Simulate async submission with token 500ms duration
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 600);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Proposal Inquiries">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <MessageSquare size={13} aria-hidden="true" />
            <span>Connect Directly</span>
          </div>
          <h2>
            Let&rsquo;s Build Your <span className="accent-text">Growth Architecture</span>
          </h2>
          <p>
            Whether you have an upcoming enterprise initiative, require an independent BI audit,
            or wish to evaluate our affiliate network, our senior partners are ready to assist.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact & Office Hubs */}
          <div className="contact-info-panel">
            {/* Phone Card (Link 16 of 29 Links) */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Phone size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 4px', fontWeight: 500 }}>Direct Telephone</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', margin: '0 0 6px' }}>
                  Speak directly with our senior consultant
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--font-size-md)' }}
                  aria-label={`Call us directly at ${companyInfo.phoneFormatted}`}
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Email Card (Link 17 of 29 Links) */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 4px', fontWeight: 500 }}>Email Inquiries</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', margin: '0 0 6px' }}>
                  Average response turnaround within 2 hours
                </p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: 'var(--font-size-md)' }}
                  aria-label={`Email us at ${companyInfo.email}`}
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <MapPin size={18} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 4px', fontWeight: 500 }}>Registered Operations</h3>
                <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-xs)', lineHeight: '20px', margin: 0 }}>
                  {companyInfo.address}
                </p>
              </div>
            </div>

            {/* Regional Hubs Box */}
            <div
              style={{
                padding: 'var(--space-3)',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Operational Presence &bull; Worldwide Delivery
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {companyInfo.locations.map((loc, idx) => (
                  <div key={idx} style={{ fontSize: 'var(--font-size-xs)' }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-tertiary)' }}>{loc.city}</div>
                    <div style={{ color: 'var(--color-text-muted)' }}>{loc.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (Defined 7 States) */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-5) var(--space-2)' }} role="status">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'var(--color-surface-overlay)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--color-text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={30} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 12, fontWeight: 400 }}>Inquiry Transmitted</h3>
                <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: '24px', maxWidth: 440, margin: '0 auto 24px' }}>
                  Your technical brief has been received. A senior strategy lead from DAMA Digital Analytics
                  will analyze your telemetry targets and contact you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 6, fontWeight: 400 }}>Request Technical Consultation</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', marginBottom: 'var(--space-3)' }}>
                  Provide your organization parameters below to initiate a structured evaluation roadmap.
                </p>

                {errorMessage && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 14px',
                      background: 'var(--color-state-error-bg)',
                      border: '1px solid var(--color-state-error)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--color-state-error)',
                      fontSize: 'var(--font-size-xs)',
                      marginBottom: 'var(--space-2)'
                    }}
                    role="alert"
                  >
                    <AlertCircle size={14} aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="input-firstName">First Name *</label>
                    <input
                      id="input-firstName"
                      type="text"
                      name="firstName"
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-lastName">Last Name</label>
                    <input
                      id="input-lastName"
                      type="text"
                      name="lastName"
                      placeholder="e.g. Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ marginTop: 'var(--space-1)' }}>
                  <div className="form-group">
                    <label htmlFor="input-email">Corporate Email *</label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@organization.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-phone">Phone Number</label>
                    <input
                      id="input-phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ marginTop: 'var(--space-1)' }}>
                  <div className="form-group">
                    <label htmlFor="input-company">Organization Name</label>
                    <input
                      id="input-company"
                      type="text"
                      name="company"
                      placeholder="Your organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-serviceInterest">Core Practice Area</label>
                    <select
                      id="input-serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="form-control"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="Data Analytics & Power BI">Data Analytics & Power BI</option>
                      <option value="Tableau Dashboard Solutions">Tableau Dashboard Solutions</option>
                      <option value="Digital Marketing Campaigns">Digital Marketing Campaigns</option>
                      <option value="Web & E-Commerce Development">Web & E-Commerce Development</option>
                      <option value="YouTube & Social Media Marketing">YouTube & Social Media Marketing</option>
                      <option value="Influencer Collaborations">Influencer Collaborations</option>
                      <option value="Affiliate Network Partnership">Affiliate Network Partnership</option>
                      <option value="Media Planning Strategy">Media Planning Strategy</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: 'var(--space-1)' }}>
                  <label htmlFor="input-message">Project Scope &amp; Target KPIs</label>
                  <textarea
                    id="input-message"
                    name="message"
                    placeholder="Describe your current data pipelines, marketing challenges, or timeline requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                  style={{ width: '100%', marginTop: 'var(--space-3)' }}
                >
                  <Send size={15} aria-hidden="true" />
                  <span>{isLoading ? 'Transmitting...' : 'Send Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
