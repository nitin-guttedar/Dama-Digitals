import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { privacyPolicyData } from '../data/siteContent';

export const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="blog-modal" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose} aria-label="Close Privacy Policy">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <div style={{ padding: 8, borderRadius: 'var(--radius-sm)', background: 'rgba(56,189,248,0.1)' }}>
            <ShieldCheck size={24} color="#38bdf8" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', margin: 0 }}>{privacyPolicyData.title}</h2>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
              Last updated: {privacyPolicyData.lastUpdated} &bull; {privacyPolicyData.company}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 24 }}>
          {privacyPolicyData.sections.map((sec, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: 8 }}>
                {sec.heading}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
