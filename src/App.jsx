import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { InteractiveDashboardPreview } from './components/InteractiveDashboardPreview';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AffiliateExplorer } from './components/AffiliateExplorer';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Subtle tactile film noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <MarqueeRibbon speed="28s" />
        <InteractiveDashboardPreview />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <AffiliateExplorer />
        <MarqueeRibbon reverse speed="34s" />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
