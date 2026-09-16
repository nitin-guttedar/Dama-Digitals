import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { blogPost } from '../data/siteContent';

export const BlogSection = () => {
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  return (
    <section id="blog" style={{ padding: '100px 0', background: 'rgba(8, 12, 22, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Sparkles size={14} />
            <span>Strategic Intelligence</span>
          </div>
          <h2>
            Featured Thought Leadership & <span className="gradient-text">2026 Insights</span>
          </h2>
          <p>
            Stay ahead of consumer behavior shifts, AI-powered search algorithms, and full-funnel marketing strategies.
          </p>
        </div>

        {/* Featured Article Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '40px',
            border: '1px solid rgba(56, 189, 248, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14, flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--primary)',
                background: 'rgba(56, 189, 248, 0.12)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              {blogPost.category}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} /> {blogPost.readTime}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} /> {blogPost.date}
            </span>
          </div>

          <h3 style={{ fontSize: '2.1rem', lineHeight: 1.25, marginBottom: 16 }}>
            {blogPost.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 24 }}>
            {blogPost.excerpt}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 24,
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: 16
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}
              >
                D
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{blogPost.author}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Dama Digital Analytics</div>
              </div>
            </div>

            <button
              onClick={() => setIsReaderOpen(true)}
              className="btn btn-primary"
              style={{ padding: '10px 22px' }}
            >
              <span>Read Full 2026 Playbook</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Full Article Reader Modal */}
        {isReaderOpen && (
          <div className="blog-modal" onClick={() => setIsReaderOpen(false)}>
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="close-modal-btn"
                onClick={() => setIsReaderOpen(false)}
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--primary)',
                    background: 'rgba(56, 189, 248, 0.12)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {blogPost.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>{blogPost.date} &bull; {blogPost.readTime}</span>
              </div>

              <h2 style={{ fontSize: '2.2rem', marginBottom: 16 }}>{blogPost.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#38bdf8', lineHeight: 1.7, marginBottom: 28 }}>
                {blogPost.intro}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {blogPost.sections.map((sec, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: 12 }}>
                      {sec.title}
                    </h3>

                    {sec.content && (
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem', margin: 0 }}>
                        {sec.content}
                      </p>
                    )}

                    {sec.list && (
                      <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
                        {sec.list.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '12px 16px',
                              background: 'rgba(255, 255, 255, 0.03)',
                              borderRadius: 'var(--radius-sm)',
                              borderLeft: '3px solid var(--primary)'
                            }}
                          >
                            <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: 2 }}>
                              {item.name}
                            </div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                              {item.detail}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 40,
                  padding: 24,
                  background: 'rgba(56, 189, 248, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.15rem', margin: 0 }}>Ready to put the 2026 playbook to work?</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '4px 0 0' }}>
                    Contact our growth specialists to design a tailor-made roadmap.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsReaderOpen(false)}
                  className="btn btn-primary"
                  style={{ padding: '9px 18px', fontSize: '0.88rem' }}
                >
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
