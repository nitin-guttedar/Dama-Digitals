import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Ignore if confetti not supported
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <MessageSquare size={14} />
            <span>Connect Directly</span>
          </div>
          <h2>
            Let&rsquo;s Build Your <span className="gradient-text">Growth Strategy</span>
          </h2>
          <p>
            Whether you have an upcoming project, need a comprehensive BI audit, or want to explore our affiliate
            network, our leadership team is ready to assist.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact & Office Hubs */}
          <div className="contact-info-panel">
            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 4px' }}>Direct Phone</h4>
                <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', margin: '0 0 6px' }}>
                  Speak directly with our senior consultant
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 4px' }}>Email Inquiries</h4>
                <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', margin: '0 0 6px' }}>
                  Average response time within 2 hours
                </p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem' }}
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="contact-info-card">
              <div className="contact-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 4px' }}>Registered Office</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  {companyInfo.address}
                </p>
              </div>
            </div>

            {/* Regional Hubs Box */}
            <div
              style={{
                padding: 24,
                background: 'rgba(14, 21, 37, 0.6)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <h4 style={{ fontSize: '1rem', color: '#10b981', marginBottom: 12 }}>
                Regional Hubs &bull; Serving Worldwide
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {companyInfo.locations.map((loc, idx) => (
                  <div key={idx} style={{ fontSize: '0.88rem' }}>
                    <div style={{ fontWeight: 700, color: '#ffffff' }}>{loc.city}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>{loc.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: 12 }}>Thank You!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 440, margin: '0 auto 24px' }}>
                  Your inquiry has been received. A senior strategy lead from Dama Digital Analytics will review your
                  requirements and reach out within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.88rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 6 }}>Request a Consultation</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 24 }}>
                  Fill in your details below and we will prepare a tailored audit & action plan.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="e.g. Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ marginTop: 14 }}>
                  <div className="form-group">
                    <label>Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ marginTop: 14 }}>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Primary Interest</label>
                    <select
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

                <div className="form-group" style={{ marginTop: 14 }}>
                  <label>Message / Project Objectives</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your brand, current bottlenecks, target KPIs, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 24, padding: '14px 20px', fontSize: '1rem' }}
                >
                  <Send size={16} />
                  <span>Send Proposal Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
