import React, { useState } from 'react';
import { BarChart3, TrendingUp, ShieldCheck, Activity, Layers, ArrowUpRight } from 'lucide-react';

const mockDataSets = {
  healthcare: {
    title: 'Healthcare Prism Claims & Patient Flow',
    subtitle: 'Enterprise Hospital Network & Insurance Settlement BI',
    badge: 'Power BI & SQL Live Feed',
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
      { name: 'Surgery & Oncology', share: '44%', color: '#38bdf8' },
      { name: 'Cardiology & ICU', share: '32%', color: '#6366f1' },
      { name: 'Outpatient Diagnostics', share: '24%', color: '#10b981' }
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
      { name: 'Direct Website / D2C', share: '52%', color: '#38bdf8' },
      { name: 'Marketplaces (Amazon/Flipkart)', share: '31%', color: '#f59e0b' },
      { name: 'Affiliate & Social Commerce', share: '17%', color: '#a855f7' }
    ]
  },
  fintech: {
    title: 'FinTech UPI & Payment Flow Telemetry',
    subtitle: 'High-Velocity Transaction Processing & Anomaly Guard',
    badge: 'Real-time Apache Kafka + Power BI',
    kpis: [
      { label: 'Daily Volume', val: '1.42M', delta: '+18% Peak Run', isUp: true },
      { label: 'Gateway Success Rate', val: '99.98%', delta: 'Zero Outages', isUp: true },
      { label: 'Fraud Detection Risk', val: '< 0.002%', delta: '-80% False Positives', isUp: true },
      { label: 'Avg Latency', val: '180ms', delta: '-40ms optimized', isUp: true }
    ],
    bars: [
      { label: '00:00', height: '40%' },
      { label: '04:00', height: '25%' },
      { label: '08:00', height: '75%' },
      { label: '12:00', height: '98%' },
      { label: '16:00', height: '92%' },
      { label: '20:00', height: '85%' }
    ],
    breakdown: [
      { name: 'Peer to Merchant (P2M)', share: '62%', color: '#10b981' },
      { name: 'Peer to Peer (P2P)', share: '28%', color: '#38bdf8' },
      { name: 'Cross-Border & Remittance', share: '10%', color: '#6366f1' }
    ]
  }
};

export const InteractiveDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const current = mockDataSets[activeTab];

  return (
    <section id="interactive-bi" className="dashboard-preview-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <BarChart3 size={14} />
            <span>Interactive Business Intelligence</span>
          </div>
          <h2>
            Experience Our <span className="gradient-text">Interactive Dashboards</span>
          </h2>
          <p>
            Explore live previews of our custom Power BI and Tableau analytics solutions built for
            modern enterprises. Click through real-world industry scenarios below:
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="dashboard-container">
          {/* Header Bar */}
          <div className="dashboard-header-bar">
            <div className="dashboard-title-group">
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{current.title}</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                  {current.subtitle}
                </span>
              </div>
            </div>

            {/* Dashboard Selector Tabs */}
            <div className="dashboard-tabs">
              <button
                className={`dashboard-tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`}
                onClick={() => setActiveTab('healthcare')}
              >
                Healthcare Prism
              </button>
              <button
                className={`dashboard-tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setActiveTab('ecommerce')}
              >
                E-Commerce Sales
              </button>
              <button
                className={`dashboard-tab-btn ${activeTab === 'fintech' ? 'active' : ''}`}
                onClick={() => setActiveTab('fintech')}
              >
                FinTech UPI Stream
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="dashboard-body">
            {/* KPI Cards Row */}
            <div className="kpi-row">
              {current.kpis.map((kpi, i) => (
                <div key={i} className="kpi-card">
                  <div className="kpi-card-label">{kpi.label}</div>
                  <div className="kpi-card-val">{kpi.val}</div>
                  <div className={`kpi-card-delta ${kpi.isUp ? 'delta-up' : 'delta-down'}`}>
                    <TrendingUp size={14} />
                    <span>{kpi.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Charts Row */}
            <div className="charts-row">
              {/* Main Velocity Bar Chart */}
              <div className="chart-box">
                <div className="chart-box-title">
                  <span>Performance Trajectory & Volume Velocity</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '3px 8px',
                      background: 'rgba(56,189,248,0.1)',
                      color: 'var(--primary)',
                      borderRadius: 4,
                    }}
                  >
                    {current.badge}
                  </span>
                </div>

                <div className="chart-bars">
                  {current.bars.map((bar, idx) => (
                    <div key={idx} className="bar-col">
                      <div className="bar-fill" style={{ height: bar.height }} />
                      <span className="bar-label">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segment Breakdown */}
              <div className="chart-box">
                <div className="chart-box-title">
                  <span>Channel / Segment Share</span>
                  <Layers size={16} color="var(--primary)" />
                </div>
                <div className="donut-list">
                  {current.breakdown.map((item, idx) => (
                    <div key={idx} className="donut-item">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: item.color,
                          }}
                        />
                        <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>
                          {item.name}
                        </span>
                      </div>
                      <span style={{ fontWeight: 700, color: item.color }}>{item.share}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24, textAlign: 'center' }}>
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '10px 16px' }}
                  >
                    <span>Request Custom BI Build</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
