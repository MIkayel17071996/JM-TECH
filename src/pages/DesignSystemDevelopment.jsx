import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';
import { designSystemServices, whyChooseItems, processSteps, designTechStack } from '../data/designSystemData.js';

const DesignSystemDevelopment = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Design System Development | JM TECH</title>
      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"></div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Design System Development by JM TECH"
              subtitle="Our expert design system development services deliver scalable, consistent, and efficient solutions to elevate your UI design process. Explore our comprehensive approach to building robust design systems."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
              aria-label="Introduction to Design System Development services"
            />

            <section id="why-jmtech-designsystem" className="px-6 py-20 bg-transparent" aria-labelledby="why-jmtech-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Choose JM TECH for Design System Development?"
                  subtitle="Our expertise in design system development ensures scalable, consistent, and efficient solutions that streamline your design and development processes."
                  aria-label="Reasons to choose JM TECH for design system development"
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

            <section id="design-system-services" className="px-6 py-20 bg-transparent" aria-labelledby="services-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="services-heading"
                  title="Our Design System Services"
                  subtitle="From component libraries to system maintenance, we deliver comprehensive solutions to ensure consistency and efficiency in your digital products."
                  aria-label="Overview of design system services"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" role="list">
                  {designSystemServices.map((service) => (
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

            <section id="design-system-process" className="px-6 py-20 bg-transparent" aria-labelledby="process-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our Design System Development Process"
                  subtitle="Our structured process ensures robust design systems are built efficiently, delivering consistent and scalable solutions."
                  aria-label="Design system development process steps"
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

            <section id="design-system-tech-stack" className="px-6 py-20 bg-transparent" aria-labelledby="tech-stack-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our Design System Technology Stack"
                  subtitle="We leverage industry-leading tools and frameworks to deliver scalable and maintainable design systems."
                  aria-label="Technology stack for design systems"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left" role="list">
                  {designTechStack.map((techCategory, index) => (
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

            <CallToAction aria-label="Call to action for design system services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignSystemDevelopment;