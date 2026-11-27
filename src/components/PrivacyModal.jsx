import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { privacyPolicyData } from '../data/siteContent';

export const PrivacyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="blog-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
    >
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-modal-btn"
          onClick={onClose}
          aria-label="Close Privacy Policy dialog"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ padding: 8, borderRadius: 'var(--radius-xs)', background: 'var(--color-surface-base)', border: '1px solid var(--border-medium)' }}>
            <ShieldCheck size={20} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
          </div>
          <div>
            <h2 style={{ fontSize: 'var(--font-size-lg)', margin: 0, fontWeight: 400 }}>{privacyPolicyData.title}</h2>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              Last updated: {privacyPolicyData.lastUpdated} &bull; {privacyPolicyData.company}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
          {privacyPolicyData.sections.map((sec, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-tertiary)', marginBottom: 8, fontWeight: 500 }}>
                {sec.heading}
              </h3>
              <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--font-line-height-base)', margin: 0 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-5)', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
