import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';

import {
  hybridAppServices,
  whyChooseItems,
  processSteps,
  hybridTechStack
} from '../data/hybridAppData.js';

const HybridAppDevelopment = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Hybrid App Development | JM TECH</title>

      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"></div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Hybrid App Development by JM TECH"
              subtitle="From rapid-deployment hybrid apps to seamless web-native integrations, we deliver comprehensive hybrid app development services tailored to your business needs. Explore our expertise in crafting scalable, compatible, and user-friendly apps."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
            />

            <section id="why-jmtech-hybrid" className="px-6 py-20 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Hybrid Apps?"
                  subtitle="Hybrid apps offer the perfect balance of speed, cost, and performance. JM TECH delivers innovative, scalable, and user-focused solutions to drive your business forward."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="hybrid-app-services" className="px-6 py-20 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Comprehensive Hybrid App Services"
                  subtitle="We specialize in building modern hybrid applications with cutting-edge frameworks, ensuring fast development, broad compatibility, and exceptional user experiences."
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {hybridAppServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="hybrid-app-process" className="px-6 py-20 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Hybrid App Development Process"
                  subtitle="Our agile methodology ensures your hybrid app is delivered on time, within budget, and tailored to your business needs."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="hybrid-tech-stack" className="px-6 py-20 bg-transparent">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Core Hybrid App Technology Stack"
                  subtitle="We leverage a versatile technology stack to build scalable, high-performance, and user-friendly hybrid applications."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {hybridTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={index}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction />
          </div>
        </div>
      </div>
    </>
  );
};

export default HybridAppDevelopment;
