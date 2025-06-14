import { memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import useSectionNavigation from '../hooks/useSectionNavigation';
import { securityTestingServices, whyChooseItems, processSteps } from '../data/securityTestingData';

/**
 * SecurityTesting page component
 * Renders the security testing services page with sections for services, why choose JM TECH, and process steps.
 * Tracks active section for ServiceCard interactions.
 * @returns {JSX.Element} The rendered component
 */
const SecurityTesting = () => {
  const { activeSection, handleSectionChange, handleKeyDown } = useSectionNavigation();

  return (
    <>
      <title>Security Testing Services | JM TECH</title>
      <meta
        name="description"
        content="JM TECH provides expert security testing services, including penetration testing, vulnerability assessments, and secure code reviews, to protect your applications and ensure compliance."
      />
      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="Security Testing Page"
      >
        <div className="app-container relative min-h-screen">
          {/* Background aurora effect */}
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none"
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
              title="Security Testing by JM TECH"
              subtitle="Our expert security testing services safeguard your applications against threats, ensuring robust protection, compliance, and reliability. Explore our comprehensive approach to securing your digital assets."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
              aria-label="Security Testing Hero Section"
            />

            {/* Why JM TECH Section */}
            <section
              id="why-jmtech-security"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="why-jmtech-security-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Security Testing?"
                  subtitle="In a world of evolving cyber threats, JM TECH delivers expert security testing to protect your applications, ensure compliance, and build trust with robust, tailored solutions."
                  id="why-jmtech-security-heading"
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

            {/* Security Testing Services Section */}
            <section
              id="security-testing-services"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="security-testing-services-heading"
            >
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  title="Our Comprehensive Security Testing Services"
                  subtitle="From penetration testing to secure code reviews, JM TECH provides end-to-end security solutions to protect your applications and data from threats."
                  id="security-testing-services-heading"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {securityTestingServices.map((service) => (
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

            {/* Security Testing Process Section */}
            <section
              id="security-testing-process"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="security-testing-process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Security Testing Process"
                  subtitle="Our structured and thorough process ensures your applications are rigorously tested, delivering robust security and peace of mind."
                  id="security-testing-process-heading"
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
export default memo(SecurityTesting);