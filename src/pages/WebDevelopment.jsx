// src/pages/WebDevelopment.jsx
import { useState, useCallback, memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import TechStackCard from '../components/TechStackCard';
import { webServices, webTechStack, whyChooseItems, processSteps } from '../data/webDevelopmentData';

/**
 * WebDevelopment page component
 * Renders the web development services page with sections for services, process, tech stack, and CTA.
 * @returns {JSX.Element} The rendered component
 */
const WebDevelopment = () => {
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
      <title>Web Development | JM TECH</title>
      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="Web Development Services Page"
      >
        <div className="app-container relative min-h-screen">
          {/* Background aurora effect */}
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"
            aria-hidden="true"
          ></div>
          <div className="content-container relative z-10">
            {/* Why Choose JM TECH Section */}
            <section
              id="why-jmtech-web"
              className="px-6  bg-transparent"
              aria-labelledby="why-jmtech-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Partner with JM TECH for Web Development?"
                  subtitle="A powerful web presence is essential in today’s digital world. JM TECH combines cutting-edge technology, strategic design, and a results-driven approach to deliver web solutions that stand out and drive measurable success."
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

            {/* Web Services Section */}
            <section
              id="our-web-services"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="services-heading"
            >
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  id="services-heading"
                  title="Our Comprehensive Web Development Services"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {webServices.map((service) => (
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
              id="our-web-process"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our Streamlined Web Development Process"
                  subtitle="Our agile and transparent process ensures your web project is delivered on time, within budget, and to the highest standards of quality."
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
              id="web-tech-stack"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="tech-stack-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our Core Web Technology Stack"
                  subtitle="We harness a versatile and modern technology stack to deliver scalable, secure, and high-performance web applications tailored to your needs."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {webTechStack.map((techCategory, index) => (
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
export default memo(WebDevelopment);