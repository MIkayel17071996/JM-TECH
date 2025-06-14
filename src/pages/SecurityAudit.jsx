import { useState, useCallback, memo } from 'react';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import ProcessCard from '../components/ProcessCard';
import WhyChooseCard from '../components/WhyChooseCard';
import { securityAuditServices, whyChooseItems, processSteps } from '../data/securityAuditData';

/**
 * SecurityAudit page component
 * Renders the security audit services page with sections for services, why choose JM TECH, and process steps.
 * Tracks active section for ServiceCard interactions.
 * @returns {JSX.Element} The rendered component
 */
const SecurityAudit = () => {
  const [activeSection, setActiveSection] = useState('');

  /**
   * Handles section activation for ServiceCard clicks
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleSectionChange = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  /**
   * Handles keyboard events for accessibility
   * @param {React.KeyboardEvent} event - The keyboard event
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleKeyDown = useCallback(
    (event, sectionId) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleSectionChange(sectionId);
      }
    },
    [handleSectionChange],
  );

  return (
    <>
      <title>Security Audit Services | JM TECH</title>
      <meta
        name="description"
        content="JM TECH offers expert security audit services, including vulnerability assessments, penetration testing, and compliance audits, to protect your applications and ensure regulatory compliance."
      />
      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        role="main"
        aria-label="Security Audit Page"
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
              title="Security Audit by JM TECH"
              subtitle="Our expert security audit services protect your applications by identifying vulnerabilities and ensuring compliance. Explore our comprehensive approach to securing your digital assets."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
              aria-label="Security Audit Hero Section"
            />

            {/* Why JM TECH Section */}
            <section
              id="why-jmtech-security-audit"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="why-jmtech-security-audit-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Security Audits?"
                  subtitle="In a landscape of growing cyber threats, JM TECH delivers thorough security audits to safeguard your applications, ensure compliance, and build trust."
                  id="why-jmtech-security-audit-heading"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map((item) => (
                    <WhyChooseCard
                      key={item.id ?? item.title} // Use id if exists, else title as fallback
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

            {/* Security Audit Services Section */}
            <section
              id="security-audit-services"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="security-audit-services-heading"
            >
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  title="Our Comprehensive Security Audit Services"
                  subtitle="From vulnerability assessments to compliance audits, JM TECH provides end-to-end services to secure your applications against threats."
                  id="security-audit-services-heading"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {securityAuditServices.map((service) => (
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

            {/* Security Audit Process Section */}
            <section
              id="security-audit-process"
              className="px-6 py-20 md:py-24 bg-transparent"
              aria-labelledby="security-audit-process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Security Audit Process"
                  subtitle="Our structured and rigorous process ensures your applications are thoroughly audited, delivering robust security and compliance."
                  id="security-audit-process-heading"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map((step) => (
                    <ProcessCard
                      key={step.id ?? step.title} // Use id if exists, else title as fallback
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
export default memo(SecurityAudit);
