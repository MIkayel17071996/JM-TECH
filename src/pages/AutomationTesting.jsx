import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';
import { automationTestingServices, whyChooseItems, automationTechStack } from '../data/automationTestingData.js';

const AutomationTesting = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Automation Testing  | JM TECH</title>

      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none">
            <div className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"></div>
          </div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Automation Testing by JM TECH"
              subtitle="From robust automation frameworks to seamless CI/CD integration, we deliver comprehensive automation testing services to enhance your QA process. Explore our expertise in building reliable, efficient, and scalable testing solutions."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
              aria-label="Introduction to Automation Testing services"
            />

            <section id="why-jmtech-automation" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="why-jmtech-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Partner with JM TECH for Automation Testing?"
                  subtitle="In today’s fast-paced development cycles, automated testing is key to quality and speed. JM TECH delivers tailored, cutting-edge automation solutions to ensure flawless performance and rapid delivery."
                  aria-label="Reasons to choose JM TECH for automation testing"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" role="list">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                      aria-label={`Reason ${index + 1}: ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="automation-testing-services" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="services-heading">
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  id="services-heading"
                  title="Our Comprehensive Automation Testing Services"
                  subtitle="From ideation to deployment, JM TECH provides end-to-end automation testing services designed to deliver robust, efficient, and scalable QA solutions."
                  aria-label="Overview of automation testing services"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" role="list">
                  {automationTestingServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 min-h-[280px] flex flex-col backdrop-blur-sm"
                      aria-label={`Service: ${service.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="automation-tech-stack" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="tech-stack-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our Core Automation Technology Stack"
                  subtitle="We harness a versatile and modern technology stack to deliver scalable, reliable, and high-performance automation testing solutions tailored to your needs."
                  aria-label="Technology stack for automation testing"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left" role="list">
                  {automationTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={index}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm"
                      aria-label={`Technology category: ${techCategory.category}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm" aria-label="Call to action for automation testing services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomationTesting;