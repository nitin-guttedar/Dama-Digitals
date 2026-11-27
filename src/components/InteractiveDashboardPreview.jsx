import React, { useState } from 'react';
import { BarChart3, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';
import { TiltCard3D } from './TiltCard3D';

const mockDataSets = {
  healthcare: {
    title: 'Healthcare Prism Claims & Patient Flow',
    subtitle: 'Enterprise Hospital Network & Insurance Settlement BI',
    badge: 'Power BI & SQL Telemetry',
    kpis: [
      { label: 'Claim Accuracy', val: '99.4%', delta: '+2.8% vs last mo', isUp: true },
      { label: 'Active Inpatients', val: '42,850', delta: '+14% volume', isUp: true },
      { label: 'Settlement Speed', val: '3.2 Days', delta: '-45% processing time', isUp: true },
      { label: 'Revenue Realization', val: '₹18.4 Cr', delta: '+19.2% YoY', isUp: true }
    ],
    bars: [
      { label: 'Jan', height: '65%' },
      { label: 'Feb', height: '72%' },
      { label: 'Mar', height: '58%' },
      { label: 'Apr', height: '84%' },
      { label: 'May', height: '92%' },
      { label: 'Jun', height: '99%' }
    ],
    breakdown: [
      { name: 'Surgery & Oncology', share: '44%' },
      { name: 'Cardiology & ICU', share: '32%' },
      { name: 'Outpatient Diagnostics', share: '24%' }
    ]
  },
  ecommerce: {
    title: 'E-Commerce Omni-Channel Sales Intelligence',
    subtitle: 'Shopify, Amazon, Meta Ads & D2C Consolidated Telemetry',
    badge: 'Tableau + BigQuery Warehouse',
    kpis: [
      { label: 'Blended ROAS', val: '3.85x', delta: '+0.65x post-audit', isUp: true },
      { label: 'Monthly GMV', val: '₹3.42 Cr', delta: '+34% MoM', isUp: true },
      { label: 'Cart Abandonment', val: '58.2%', delta: '-14% recovered', isUp: true },
      { label: 'Customer LTV', val: '₹4,820', delta: '+22% retention', isUp: true }
    ],
    bars: [
      { label: 'Week 1', height: '55%' },
      { label: 'Week 2', height: '70%' },
      { label: 'Week 3', height: '82%' },
      { label: 'Week 4', height: '94%' },
      { label: 'Week 5', height: '88%' },
      { label: 'Week 6', height: '98%' }
    ],
    breakdown: [
      { name: 'Direct Website / D2C', share: '52%' },
      { name: 'Marketplaces (Amazon/Flipkart)', share: '31%' },
      { name: 'Affiliate & Social Commerce', share: '17%' }
    ]
  },
  fintech: {
    title: 'FinTech Loan Portfolio & Credit Risk Analytics',
    subtitle: 'NBFC Underwriting, Default Prediction & Cohort Retention',
    badge: 'Python ML + Power BI Embed',
    kpis: [
      { label: 'Disbursal Volume', val: '₹62.8 Cr', delta: '+28% quarterly', isUp: true },
      { label: 'NPA Ratio', val: '0.84%', delta: '-0.38% risk mitigated', isUp: true },
      { label: 'Approval Turnaround', val: '4.2 Min', delta: 'Instant automated', isUp: true },
      { label: 'Repeat Borrower Rate', val: '41.6%', delta: '+8.4% retention', isUp: true }
    ],
    bars: [
      { label: 'Q1', height: '62%' },
      { label: 'Q2', height: '74%' },
      { label: 'Q3', height: '88%' },
      { label: 'Q4', height: '96%' },
      { label: 'Q5', height: '85%' },
      { label: 'Q6', height: '100%' }
    ],
    breakdown: [
      { name: 'MSME Growth Capital', share: '46%' },
      { name: 'Personal Micro-Credit', share: '26%' },
      { name: 'Peer to Peer (P2P)', share: '28%' }
    ]
  }
};

export const InteractiveDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const currentData = mockDataSets[activeTab];

  return (
    <section id="interactive-bi" className="dashboard-preview-section" aria-label="Interactive BI Dashboards">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <BarChart3 size={13} aria-hidden="true" />
            <span>Interactive Telemetry</span>
          </div>
          <h2>
            Live Business Intelligence &amp; <span className="accent-text">Executive Dashboards</span>
          </h2>
          <p>
            Experience how our real-time Power BI and Tableau dashboards consolidate distributed data streams
            into clear, actionable strategic roadmaps.
          </p>
        </div>

        <div className="dashboard-container">
          {/* Header Bar */}
          <div className="dashboard-header-bar">
            <div className="dashboard-title-group">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--color-surface-base)',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)'
                }}
              >
                <Layers size={16} aria-hidden="true" />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-md)', margin: 0, fontWeight: 500 }}>
                  {currentData.title}
                </h3>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                  {currentData.subtitle} &bull; <strong style={{ color: 'var(--color-text-secondary)' }}>{currentData.badge}</strong>
                </span>
              </div>
            </div>

            {/* Interactive Dataset Switcher Tabs */}
            <div className="dashboard-tabs" role="tablist" aria-label="Select Industry Dashboard">
              {[
                { id: 'healthcare', label: 'Healthcare BI' },
                { id: 'ecommerce', label: 'E-Commerce Telemetry' },
                { id: 'fintech', label: 'FinTech Credit Risk' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`dashboard-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Body */}
          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="dashboard-body"
          >
            {/* KPI Cards Row (Part of List Component 3) */}
            <div className="kpi-row" role="list" aria-label="Dashboard Metrics">
              {currentData.kpis.map((kpi, idx) => (
                <TiltCard3D key={idx} maxTilt={6} scale={1.02} style={{ borderRadius: 'var(--radius-sm)' }}>
                  <div className="kpi-card" role="listitem" style={{ height: '100%' }}>
                    <div className="kpi-card-label">{kpi.label}</div>
                    <div className="kpi-card-val">{kpi.val}</div>
                    <div className="kpi-card-delta">
                      <TrendingUp size={12} aria-hidden="true" />
                      <span>{kpi.delta}</span>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>

            {/* Charts Row */}
            <div className="charts-row">
              {/* Trend Chart */}
              <div className="chart-box">
                <div className="chart-box-title">
                  <span>Normalized Cohort Velocity (6-Month Trend)</span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Automated ETL Synced</span>
                </div>
                <div className="chart-bars" aria-label="Bar chart showing monthly velocity">
                  {currentData.bars.map((bar, idx) => (
                    <div key={idx} className="bar-col">
                      <div
                        className="bar-fill"
                        style={{ height: bar.height }}
                        title={`${bar.label}: ${bar.height}`}
                      />
                      <span className="bar-label">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Composition Breakdown */}
              <div className="chart-box">
                <div className="chart-box-title">
                  <span>Revenue &amp; Channel Share</span>
                  <ArrowUpRight size={14} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                </div>
                <ul className="donut-list" aria-label="Channel share list">
                  {currentData.breakdown.map((item, idx) => (
                    <li key={idx} className="donut-item">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: idx === 0 ? 'var(--color-text-secondary)' : idx === 1 ? 'var(--color-text-tertiary)' : 'var(--color-text-muted)'
                          }}
                          aria-hidden="true"
                        />
                        <span style={{ color: 'var(--color-text-inverse)' }}>{item.name}</span>
                      </div>
                      <strong style={{ color: 'var(--color-text-tertiary)' }}>{item.share}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
