import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';

import {
  performanceAuditServices,
  whyChooseItems,
  processSteps,
} from '../data/performanceAuditData.js';

const PerformanceAudit = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Optional: Example handler to toggle activeSection on click
  const toggleActiveSection = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <title>Performance Audit| JM TECH</title>

      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none">
            <div className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"></div>
          </div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Performance Audit by JM TECH"
              subtitle="Our expert performance audit services ensure your applications run efficiently, scale seamlessly, and deliver exceptional user experiences. Explore our comprehensive approach to optimizing performance."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
            />

            <section id="why-jmtech-performance" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Performance Audits?"
                  subtitle="In a fast-paced digital world, JM TECH delivers expert performance audits to ensure your applications are optimized for speed, scalability, and user satisfaction."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map(({ id, icon, title, description }) => (
                    <WhyChooseCard
                      key={id}
                      icon={icon}
                      title={title}
                      description={description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="performance-audit-services" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  title="Our Comprehensive Performance Audit Services"
                  subtitle="From load testing to continuous monitoring, JM TECH provides end-to-end services to optimize your application’s performance and scalability."
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {performanceAuditServices.map(({ id, icon, title, description }) => (
                    <ServiceCard
                      key={id}
                      id={id}
                      icon={icon}
                      title={title}
                      description={description}
                      isActive={activeSection === id}
                      onClick={() => toggleActiveSection(id)}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 min-h-[280px] flex flex-col backdrop-blur-sm cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="performance-audit-process" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Performance Audit Process"
                  subtitle="Our structured and thorough process ensures your application is rigorously analyzed and optimized for peak performance and reliability."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map(({ id, icon, title, description }) => (
                    <ProcessCard
                      key={id}
                      icon={icon}
                      title={title}
                      description={description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceAudit;
