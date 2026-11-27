import React, { useState } from 'react';
import { Network, Search, Filter, Mail, CheckCircle2, DollarSign, Send, ArrowRight } from 'lucide-react';
import { servicesData, companyInfo } from '../data/siteContent';

export const AffiliateExplorer = () => {
  const affiliateInfo = servicesData.find((s) => s.id === 'affiliate-campaigns');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!affiliateInfo) return null;

  const categories = ['All', 'BFSI / Finance', 'FinTech & Trading', 'Crypto & Trading', 'Gaming & iGaming', 'E-Commerce / D2C'];

  const filteredTiers = affiliateInfo.payoutTiers.filter((tier) => {
    const matchesCategory = selectedCategory === 'All' || tier.category === selectedCategory;
    const matchesSearch =
      tier.offer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tier.mode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tier.channel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="affiliate" className="affiliate-section" aria-label="Affiliate Publisher Network">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Network size={13} aria-hidden="true" />
            <span>High-Yield Publisher Ecosystem</span>
          </div>
          <h2>
            Publisher &amp; <span className="accent-text">Affiliate Campaign Network</span>
          </h2>
          <p>
            Connecting performance agencies, media buyers, and creators with enterprise campaigns,
            real-time attribution tracking, and verified payout structures.
          </p>
        </div>

        {/* Inventory Channels Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-4)'
          }}
        >
          {affiliateInfo.inventories.map((inv, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-2)',
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--color-text-secondary)',
                }}
                aria-hidden="true"
              />
              <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, color: 'var(--color-text-tertiary)' }}>{inv}</span>
            </div>
          ))}
        </div>

        {/* Interactive Search & Filter Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-2)'
          }}
        >
          {/* Search Input with explicit Focus-Visible & Token padding */}
          <div style={{ position: 'relative', minWidth: 280, flex: 1, maxWidth: 440 }}>
            <Search
              size={15}
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Search offers, modes (CPD, CPAO, CPKYC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: 40, width: '100%' }}
              aria-label="Filter affiliate offers"
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }} role="tablist" aria-label="Offer Category Filters">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '6px 14px', fontSize: 'var(--font-size-xs)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Affiliate Table with Empty State Edge-Case Handling */}
        <div className="affiliate-table-container">
          {filteredTiers.length === 0 ? (
            <div className="empty-state">
              <p>No active affiliate campaigns match your criteria &ldquo;{searchQuery}&rdquo;.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="btn btn-secondary"
                style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <table className="affiliate-table" aria-label="Affiliate Campaign Payouts">
              <thead>
                <tr>
                  <th scope="col">Industry / Category</th>
                  <th scope="col">Campaign / Offer Details</th>
                  <th scope="col">Pricing Mode</th>
                  <th scope="col">Payout Rate</th>
                  <th scope="col">Approved Channels</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTiers.map((tier, idx) => (
                  <tr key={idx}>
                    <td style={{ color: 'var(--color-text-tertiary)', fontWeight: 500 }}>{tier.category}</td>
                    <td>{tier.offer}</td>
                    <td>
                      <span
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          padding: '3px 8px',
                          background: 'var(--color-surface-overlay)',
                          border: '1px solid var(--border-medium)',
                          color: 'var(--color-text-secondary)',
                          borderRadius: 'var(--radius-xs)',
                          fontWeight: 600
                        }}
                      >
                        {tier.mode}
                      </span>
                    </td>
                    <td>
                      <span className="payout-badge">{tier.payout}</span>
                    </td>
                    <td style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{tier.channel}</td>
                    <td>
                      <a
                        href={`mailto:${companyInfo.affiliateEmail}?subject=Application for ${encodeURIComponent(tier.offer)} (${tier.mode})`}
                        className="btn btn-secondary"
                        style={{ padding: '6px 12px', fontSize: 'var(--font-size-xs)' }}
                        aria-label={`Apply for ${tier.offer}`}
                      >
                        <span>Apply</span>
                        <ArrowRight size={13} aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
