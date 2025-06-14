import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';
import { crossPlatformServices, whyChooseItems, processSteps, crossPlatformTechStack } from '../data/crossPlatformData.js';

const CrossPlatformDevelopment = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Cross-Platform Development | JM TECH</title>
      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"></div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Cross-Platform Development by JM TECH"
              subtitle="From efficient single-codebase solutions to seamless multi-platform apps, we deliver comprehensive cross-platform development services tailored to your business needs. Explore our expertise in crafting scalable, user-friendly, and high-performance apps."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
              aria-label="Introduction to Cross-Platform Development services"
            />

            <section id="why-jmtech-cross-platform" className="px-6 py-20 bg-transparent" aria-labelledby="why-jmtech-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Partner with JM TECH for Cross-Platform Apps?"
                  subtitle="In the fast-paced mobile app market, cross-platform development offers efficiency and reach. JM TECH delivers innovative, scalable, and user-focused apps to drive your business forward."
                  aria-label="Reasons to choose JM TECH for cross-platform development"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" role="list">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      aria-label={`Reason ${index + 1}: ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="cross-platform-services" className="px-6 py-20 bg-transparent" aria-labelledby="services-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="services-heading"
                  title="Our Comprehensive Cross-Platform Services"
                  subtitle="We specialize in building modern cross-platform applications with cutting-edge frameworks, ensuring performance, scalability, and a consistent user experience across iOS and Android."
                  aria-label="Overview of cross-platform services"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" role="list">
                  {crossPlatformServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                      aria-label={`Service: ${service.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="cross-platform-process" className="px-6 py-20 bg-transparent" aria-labelledby="process-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our Streamlined Cross-Platform Development Process"
                  subtitle="Our agile methodology ensures your cross-platform app is delivered on time, within budget, and tailored to your business needs."
                  aria-label="Cross-platform development process steps"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      aria-label={`Process step ${index + 1}: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="cross-platform-tech-stack" className="px-6 py-20 bg-transparent" aria-labelledby="tech-stack-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our Core Cross-Platform Technology Stack"
                  subtitle="We leverage a versatile technology stack to build scalable, high-performance, and user-friendly cross-platform applications."
                  aria-label="Technology stack for cross-platform development"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left" role="list">
                  {crossPlatformTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={index}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                      aria-label={`Technology category: ${techCategory.category}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction aria-label="Call to action for cross-platform development services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CrossPlatformDevelopment;