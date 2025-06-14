// src/pages/UIDesignPrototyping.jsx
import React, { useState, useEffect, useCallback, memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import TechStackCard from '../components/TechStackCard';
import {
  uiDesignPrototypingServices,
  whyChooseItems,
  processSteps,
  uiTechStack,
} from '../data/uiDesignPrototypingData';

/**
 * ErrorBoundary component
 * Catches JavaScript errors in child components and displays a fallback UI.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The rendered component or fallback UI
 */
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20 text-white bg-[#0D0D0D] min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Something Went Wrong</h2>
          <p className="text-gray-300 mb-6">Please try refreshing the page or contact support.</p>
          <a
            href="/contact"
            className="text-yellow-400 hover:text-yellow-500 underline"
            aria-label="Contact Support"
          >
            Contact Support
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * UIDesignPrototyping page component
 * Renders the UI design and prototyping services page with sections for services, process, tech stack, and CTA.
 * Tracks active section based on scroll position and user interaction.
 * @returns {JSX.Element} The rendered component
 */
const UIDesignPrototyping = () => {
  const [activeSection, setActiveSection] = useState('');

  /**
   * Debounces a function to limit how often it runs
   * @param {function} func - Function to debounce
   * @param {number} delay - Delay in milliseconds
   * @returns {function} Debounced function
   */
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  /**
   * Handles scroll events to update the active section
   */
  const handleScroll = useCallback(
    debounce(() => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    }, 100),
    [],
  );

  /**
   * Handles manual section activation for ServiceCard clicks
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleSectionChange = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <title>UI Design and Prototyping Services| JM TECH</title>

      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="UI Design and Prototyping Services Page"
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
              title="UI Design & Prototyping 
by JM TECH"
              subtitle="Our expert UI design and prototyping services deliver visually appealing, user-centric, and functional interfaces. Explore our comprehensive approach to crafting exceptional digital experiences."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
              aria-label="UI Design and Prototyping Hero Section"
            />

            {/* Why Choose JM TECH Section */}
            <section
              id="why-jmtech-ui"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="why-jmtech-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Choose JM TECH for UI Design & Prototyping?"
                  subtitle="Our expertise in UI design and prototyping ensures visually stunning, intuitive, and scalable interfaces that elevate user experiences and align with your business goals."
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

            {/* UI Services Section */}
            <section
              id="ui-design-prototyping-services"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="services-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="services-heading"
                  title="Our UI Design & Prototyping Services"
                  subtitle="From wireframing to high-fidelity designs, we deliver comprehensive solutions to create engaging and functional user interfaces."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {uiDesignPrototypingServices.map((service) => (
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
              id="ui-process"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our UI Design & Prototyping Process"
                  subtitle="Our structured process ensures high-quality designs are delivered efficiently, meeting user needs and business objectives."
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
              id="ui-tech-stack"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="tech-stack-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our UI Technology Stack"
                  subtitle="We use industry-leading tools to deliver cutting-edge UI design and prototyping solutions."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {uiTechStack.map((techCategory, index) => (
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
export default memo(UIDesignPrototyping);