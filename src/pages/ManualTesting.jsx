// src/pages/ManualTesting.jsx
import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';

import {
  manualTestingServices,
  whyChooseItems,
  processSteps,
} from '../data/manualTestingData.js';

const ManualTesting = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Manual Testing | JM TECH</title>

      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        aria-label="Manual Testing page"
      >
        <div className="app-container relative min-h-screen">
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"></div>
          </div>
          <main className="content-container relative z-10" role="main">
            <HeroSection
              title="Manual Testing by JM TECH"
              subtitle="Our expert manual testing services ensure your applications are thoroughly validated for functionality, usability, and reliability. Discover our comprehensive approach to delivering high-quality software."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
            />

            <section
              id="why-jmtech-manual"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="why-jmtech-manual-title"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-manual-title"
                  title="Why Partner with JM TECH for Manual Testing?"
                  subtitle="Manual testing brings human insight to quality assurance. JM TECH combines expertise, precision, and a user-centric approach to deliver flawless software tailored to your needs."
                />
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                  aria-label="Reasons to partner with JM TECH for manual testing"
                >
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="manual-testing-services"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="manual-testing-services-title"
            >
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  id="manual-testing-services-title"
                  title="Our Comprehensive Manual Testing Services"
                  subtitle="From functional validation to exploratory testing, JM TECH provides meticulous manual testing services to ensure your software is robust, user-friendly, and defect-free."
                />
                <div
                  className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                  aria-label="Manual testing services"
                >
                  {manualTestingServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 min-h-[280px] flex flex-col backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="manual-testing-process"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="manual-testing-process-title"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="manual-testing-process-title"
                  title="Our Streamlined Manual Testing Process"
                  subtitle="Our structured and thorough process ensures your software is rigorously tested, delivering high-quality results on time and within budget."
                />
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  aria-label="Manual testing process steps"
                >
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction
              className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm"
              aria-label="Contact JM TECH call to action"
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default ManualTesting;
