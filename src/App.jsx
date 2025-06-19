import { useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import Navbar from './components/Navbar.jsx';
import Aurora from './components/Aurora.jsx';
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';  // Correct import
import WebDevelopment from './pages/WebDevelopment.jsx';
import MobileAppDevelopment from './pages/MobileAppDevelopment.jsx'
import EcommerceCart from './pages/EcommerceCart.jsx'
import CrossPlatformDevelopment from './pages/CrossPlatformDevelopment.jsx'
import HybridAppDevelopment from './pages/HybridAppDevelopment.jsx'
import ProgressiveWebApps from './pages/ProgressiveWebApps.jsx'
import AutomationTesting from './pages/AutomationTesting.jsx'
import ManualTesting from './pages/ManualTesting.jsx'
import SecurityTesting from './pages/SecurityTesting.jsx'
import MobileAppTesting from './pages/MobileAppTesting.jsx'
import UXResearchStrategy from './pages/UXResearchStrategy.jsx'
import UIDesignPrototyping from './pages/UIDesignPrototyping.jsx'
import DesignSystemDevelopment from './pages/DesignSystemDevelopment.jsx'
import CodeReviewOptimization from './pages/CodeReviewOptimization.jsx'
import PerformanceAudit from './pages/PerformanceAudit.jsx'
import SecurityAudit from './pages/SecurityAudit.jsx'
import ComplianceAudit from './pages/ComplianceAudit.jsx'
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import './App.css';

function App() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -50]);
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
    <div className="app-container">
      <Navbar />
      <Aurora speed={0.5} blend={0.3} />

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-[#3B82F6]/20 via-[#10B981]/20 to-[#FBBF24]/20 z-0 overflow-hidden"
        style={{ y: yParallax }}
      />

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web" element={<WebDevelopment />} />
          <Route path="/services/mobile" element={<MobileAppDevelopment />} />
          <Route path="/services/ecommerce-cart" element={<EcommerceCart />} />
          <Route path="/services/cross-platform" element={<CrossPlatformDevelopment />} />
          <Route path="/services/hybrid" element={<HybridAppDevelopment />} />
          <Route path="/services/pwa" element={<ProgressiveWebApps />} />
          <Route path="/services/automation-testing" element={<AutomationTesting />} />
          <Route path="/services/manual-testing" element={<ManualTesting />} />
          <Route path="/services/security-testing" element={<SecurityTesting />} />
          <Route path="/services/mobile-app-testing" element={< MobileAppTesting/>} />
          <Route path="/services/ux-research" element={< UXResearchStrategy/>} />
          <Route path="/services/ui-design" element={< UIDesignPrototyping/>} />
          <Route path="/services/design-system" element={< DesignSystemDevelopment/>} />
          <Route path="/services/code-review" element={< CodeReviewOptimization/>} />
          <Route path="/services/performance-audit" element={< PerformanceAudit/>} />
          <Route path="/services/security-audit" element={< SecurityAudit/>} />
          <Route path="/services/compliance-audit" element={< ComplianceAudit/>} />
          <Route path="/portfolio" element={<div className="page">Portfolio Page</div>} />
          <Route path="/about" element={<About />} /> {/* Correct About route */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<div className="page text-center py-16">404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </div>
    </ErrorBoundary>
  );
}

export default App;
