import { memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import TechStackCard from '../components/TechStackCard';
import useSectionNavigation from '../hooks/useSectionNavigation';
import { pwaServices, pwaTechStack, whyChooseItems, processSteps } from '../data/pwaData';

/**
 * ProgressiveWebApps page component
 * Renders the PWA services page with sections for services, technologies, why choose JM TECH, and process steps.
 * Tracks active section for ServiceCard interactions.
 * @returns {JSX.Element} The rendered component
 */
const ProgressiveWebApps = () => {
  const { activeSection, handleSectionChange, handleKeyDown } = useSectionNavigation();

  // Defensive check for data arrays
  if (!pwaServices?.length || !whyChooseItems?.length || !processSteps?.length || !pwaTechStack?.length) {
    console.warn('Missing data in ProgressiveWebApps');
    return null;
  }

  return (
    <>
      <title>Progressive Web Apps| JM TECH</title>

      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="Progressive Web Apps Page"
      >
        <div className="app-container relative min-h-screen">
          {/* Background aurora effect */}
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"
              aria-hidden="true"
            ></div>
          </div>
          <div className="content-container relative z-10">
            {/* Hero Section */}
            <HeroSection
              title="Progressive Web Apps by JM TECH"
              subtitle="From app-like web experiences to robust offline capabilities, we deliver comprehensive PWA development services tailored to your business needs. Explore our expertise in crafting fast, reliable, and engaging web applications."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
              aria-label="Progressive Web Apps Hero Section"
            />

            {/* Why JM TECH Section */}
            <section
              id="why-jmtech-pwa"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="why-jmtech-pwa-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for PWAs?"
                  subtitle="Progressive Web Apps combine the best of web and app experiences. JM TECH delivers fast, reliable, and engaging PWAs to drive user engagement and business growth."
                  id="why-jmtech-pwa-heading"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={`why-choose-${index}`}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                      aria-label={`Why Choose: ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* PWA Services Section */}
            <section
              id="pwa-services"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="pwa-services-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Comprehensive PWA Services"
                  subtitle="We specialize in building modern Progressive Web Apps with cutting-edge technologies, ensuring speed, reliability, and exceptional user engagement across browsers."
                  id="pwa-services-heading"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {pwaServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                      onClick={() => handleSectionChange(service.id)}
                      onKeyDown={(e) => handleKeyDown(e, service.id)}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 min-h-[280px] flex flex-col backdrop-blur-sm"
                      aria-label={`Service: ${service.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* PWA Process Section */}
            <section
              id="pwa-process"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="pwa-process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined PWA Development Process"
                  subtitle="Our agile methodology ensures your PWA is delivered on time, within budget, and tailored to your business needs."
                  id="pwa-process-heading"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={`process-${index}`}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                      aria-label={`Process Step: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* PWA Tech Stack Section */}
            <section
              id="pwa-tech-stack"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="pwa-tech-stack-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Core PWA Technology Stack"
                  subtitle="We leverage a versatile technology stack to build fast, scalable, and user-friendly Progressive Web Apps."
                  id="pwa-tech-stack-heading"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {pwaTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={`tech-${index}`}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                      aria-label={`Technology Category: ${techCategory.category}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <CallToAction
              className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm"
              aria-label="Call to Action Section"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ProgressiveWebApps);