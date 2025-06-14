// src/pages/UXResearchStrategy.jsx
import { useState, useCallback, memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import TechStackCard from '../components/TechStackCard';
import {
  uxResearchStrategyServices,
  whyChooseItems,
  processSteps,
  uxTechStack,
} from '../data/uxResearchStrategyData';

/**
 * UXResearchStrategy page component
 * Renders the UX research and strategy services page with sections for services, process, tech stack, and CTA.
 * @returns {JSX.Element} The rendered component
 */
const UXResearchStrategy = () => {
  const [activeSection, setActiveSection] = useState('');

  /**
   * Handles section activation for ServiceCard interactions
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleSectionChange = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  return (
    <>
      <title>UX Research and Strategy | JM TECH</title>
      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="UX Research and Strategy Services Page"
      >
        <div className="app-container relative min-h-screen">
          {/* Background aurora effect */}
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"
            aria-hidden="true"
          ></div>
          <div className="content-container relative z-10">
            {/* Hero Section */}
            <HeroSection
              title="UX Research & Strategy 
by JM TECH"
              subtitle="Transform your product with user-centric research and strategic design. Our expert UX services deliver intuitive, engaging, and effective experiences tailored to your audience and business goals."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
              aria-label="UX Research and Strategy Hero Section"
            />

            {/* Why Choose JM TECH Section */}
            <section
              id="why-jmtech-ux"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="why-jmtech-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Choose JM TECH for UX Research & Strategy?"
                  subtitle="Our UX expertise combines deep research, strategic planning, and innovative design to create exceptional user experiences that drive engagement and loyalty."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={`why-choose-${index}`}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      aria-label={`Why Choose ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* UX Services Section */}
            <section
              id="ux-research-strategy-services"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="services-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="services-heading"
                  title="Our UX Research & Strategy Services"
                  subtitle="From user research to strategic design, we deliver comprehensive solutions to create intuitive and engaging user experiences."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {uxResearchStrategyServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                      onClick={handleSectionChange}
                      aria-label={`Service: ${service.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section
              id="ux-process"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our UX Research & Strategy Process"
                  subtitle="Our streamlined process ensures user-focused solutions are delivered efficiently and aligned with your business objectives."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={`process-${index}`}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      aria-label={`Process Step: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section
              id="ux-tech-stack"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="tech-stack-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our UX Technology Stack"
                  subtitle="We leverage industry-leading tools and methodologies to deliver cutting-edge UX research and strategy solutions."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {uxTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={`tech-stack-${index}`}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                      aria-label={`Technology Stack: ${techCategory.category}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <CallToAction aria-label="Call to Action Section" />
          </div>
        </div>
      </div>
    </>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(UXResearchStrategy);