import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
      <Navbar onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <main>
        <Hero />
        <InteractiveDashboardPreview />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <AffiliateExplorer />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
