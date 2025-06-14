import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';

import {
  mobileAppTestingServices,
  whyChooseItems,
  processSteps,
} from '../data/mobileAppTestingData.js';

const MobileAppTesting = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Mobile App Testing | JM TECH</title>
      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none">
            <div className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"></div>
          </div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Mobile App Testing by JM TECH"
              subtitle="Our expert mobile app testing services ensure your applications perform reliably across devices, platforms, and conditions. Explore our comprehensive approach to delivering high-quality mobile experiences."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
            />

            <section id="why-jmtech-mobile" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Mobile App Testing?"
                  subtitle="In a mobile-first world, JM TECH delivers expert testing to ensure your apps are reliable, user-friendly, and optimized across all devices and platforms."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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

            <section id="mobile-app-testing-services" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  title="Our Comprehensive Mobile App Testing Services"
                  subtitle="From functionality to compatibility, JM TECH provides end-to-end mobile testing services to deliver robust, user-friendly, and high-performing apps."
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {mobileAppTestingServices.map((service) => (
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

            <section id="mobile-testing-process" className="px-6 py-20 md:py-24 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Mobile App Testing Process"
                  subtitle="Our structured and thorough process ensures your mobile app is rigorously tested, delivering high-quality results on time and within budget."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <CallToAction className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppTesting;
