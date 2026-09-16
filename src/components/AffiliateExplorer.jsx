import React, { useState } from 'react';
import { Network, Search, Filter, Mail, CheckCircle2, DollarSign, Send } from 'lucide-react';
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
    <section id="affiliate" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <Network size={14} />
            <span>High-Yield Publisher Ecosystem</span>
          </div>
          <h2>
            DAMA <span className="gradient-text">Affiliate Campaign Network</span>
          </h2>
          <p>
            Bridging top ad networks, performance agencies, media buyers, and creators with exclusive,
            high-converting campaigns and transparent, guaranteed payouts.
          </p>
        </div>

        {/* Inventory Channels Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
            marginBottom: 36
          }}
        >
          {affiliateInfo.inventories.map((inv, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.02)',
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
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981'
                }}
              />
              <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{inv}</span>
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
            gap: 16,
            marginBottom: 20
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: 280 }}>
            <Search
              size={17}
              color="var(--text-subtle)"
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search offers, modes (CPD, CPAO, CPKYC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: 40, width: '100%' }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255,255,255,0.03)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Affiliate Table */}
        <div className="affiliate-table-container">
          <table className="affiliate-table">
            <thead>
              <tr>
                <th>Industry / Category</th>
                <th>Campaign / Offer Details</th>
                <th>Pricing Mode</th>
                <th>Payout Rate</th>
                <th>Approved Channels</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTiers.map((tier, idx) => (
                <tr key={idx}>
                  <td style={{ color: 'var(--text-main)', fontWeight: 600 }}>{tier.category}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{tier.offer}</td>
                  <td>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        padding: '3px 8px',
                        background: 'rgba(99, 102, 241, 0.15)',
                        color: '#818cf8',
                        borderRadius: 4,
                        fontWeight: 700
                      }}
                    >
                      {tier.mode}
                    </span>
                  </td>
                  <td>
                    <span className="payout-badge">{tier.payout}</span>
                  </td>
                  <td style={{ color: 'var(--text-subtle)', fontSize: '0.85rem' }}>{tier.channel}</td>
                  <td>
                    <a
                      href={`mailto:${companyInfo.affiliateEmail}?subject=Request access for ${tier.offer} (${tier.mode})`}
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4
                      }}
                    >
                      <span>Get Tracking Link</span>
                      <Send size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Publisher Onboarding Box */}
        <div
          style={{
            marginTop: 40,
            padding: 32,
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24
          }}
        >
          <div>
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>
              Publisher Onboarding
            </span>
            <h4 style={{ fontSize: '1.4rem', margin: '4px 0 8px' }}>
              Are You an Agency, Media Buyer, or Creator?
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
              Join DAMA Affiliate today. Get weekly payouts, dedicated campaign managers, and postback APIs.
            </p>
          </div>

          <a
            href={`mailto:${companyInfo.affiliateEmail}?subject=Become a Publisher - Dama Affiliate`}
            className="btn btn-accent"
          >
            <Mail size={16} />
            <span>Apply as Publisher ({companyInfo.affiliateEmail})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
