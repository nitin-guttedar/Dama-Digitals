import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { blogPost } from '../data/siteContent';

export const BlogSection = () => {
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isReaderOpen) {
        setIsReaderOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReaderOpen]);

  return (
    <section id="blog" className="blog-section" style={{ padding: 'var(--space-7) 0', background: 'var(--color-surface-base)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Thought Leadership & Insights">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Sparkles size={13} aria-hidden="true" />
            <span>Strategic Intelligence</span>
          </div>
          <h2>
            Featured Thought Leadership &amp; <span className="accent-text">2026 Insights</span>
          </h2>
          <p>
            Stay ahead of algorithmic shifts, predictive customer telemetry, and unified performance funnels.
          </p>
        </div>

        {/* Featured Article Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            padding: 'var(--space-5)',
            border: '1px solid var(--border-medium)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                background: 'var(--color-surface-base)',
                border: '1px solid var(--border-medium)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {blogPost.category}
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={13} aria-hidden="true" /> {blogPost.readTime}
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={13} aria-hidden="true" /> {blogPost.date}
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1.2, marginBottom: 16, fontWeight: 400 }}>
            {blogPost.title}
          </h3>

          <p style={{ color: 'var(--color-text-inverse)', fontSize: 'var(--font-size-md)', lineHeight: '28px', marginBottom: 'var(--space-3)' }}>
            {blogPost.excerpt}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-3)',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: 16
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--color-surface-overlay)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)'
                }}
                aria-hidden="true"
              >
                D
              </div>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-tertiary)' }}>{blogPost.author}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>DAMA Digital Analytics</div>
              </div>
            </div>

            <button
              onClick={() => setIsReaderOpen(true)}
              className="btn btn-primary"
              aria-haspopup="dialog"
              aria-expanded={isReaderOpen}
            >
              <span>Read Full 2026 Playbook</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Full Article Reader Modal Dialog */}
        {isReaderOpen && (
          <div
            className="blog-modal"
            onClick={() => setIsReaderOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={blogPost.title}
          >
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-modal-btn"
                onClick={() => setIsReaderOpen(false)}
                aria-label="Close article modal"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-surface-base)',
                    border: '1px solid var(--border-medium)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {blogPost.category}
                </span>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {blogPost.date} &bull; {blogPost.readTime}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 16, fontWeight: 400 }}>{blogPost.title}</h2>
              <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', lineHeight: '28px', marginBottom: 'var(--space-4)' }}>
                {blogPost.intro}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {blogPost.sections.map((sec, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-tertiary)', marginBottom: 10, fontWeight: 400 }}>
                      {sec.title}
                    </h3>

                    {sec.content && (
                      <p style={{ color: 'var(--color-text-inverse)', lineHeight: 'var(--font-line-height-base)', fontSize: 'var(--font-size-base)', margin: 0 }}>
                        {sec.content}
                      </p>
                    )}

                    {sec.points && (
                      <ul style={{ listStyle: 'disc', paddingLeft: 24, marginTop: 12, color: 'var(--color-text-inverse)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ fontSize: 'var(--font-size-sm)', lineHeight: '24px' }}>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-5)', textAlign: 'right' }}>
                <button onClick={() => setIsReaderOpen(false)} className="btn btn-secondary">
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
