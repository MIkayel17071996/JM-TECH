import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import { complianceAuditServices, whyChooseItems, processSteps } from '../data/complianceAuditData.js';

const ComplianceAudit = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Compliance Audit | JM TECH</title>

      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-yellow-900/30 animate-gradient-pulse pointer-events-none">
            <div className="absolute inset-0 bg-radial-gradient from-[#FBBF24]/10 to-transparent opacity-30"></div>
          </div>
          <div className="content-container relative z-10">
            <HeroSection
              title="Compliance Audit by JM TECH"
              subtitle="Our expert compliance audit services ensure your applications adhere to industry regulations and standards, protecting your business and fostering trust. Explore our comprehensive approach to compliance."
              ctaText="Get Started"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center text-center bg-transparent bg-cover bg-center overflow-x-hidden p-6 md:p-10"
              aria-label="Introduction to Compliance Audit services"
            />

            <section id="why-jmtech-compliance" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="why-jmtech-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-jmtech-heading"
                  title="Why Partner with JM TECH for Compliance Audits?"
                  subtitle="Navigating regulatory requirements is critical for your business. JM TECH delivers expert audits to ensure compliance, minimize risks, and build trust."
                  aria-label="Reasons to choose JM TECH for compliance audits"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" role="list">
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240 new daata file]px] backdrop-blur-sm"
                      aria-label={`Reason ${index + 1}: ${item.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="compliance-audit-services" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="services-heading">
              <div className="max-w-7xl mx-auto">
                <SectionHeader
                  id="services-heading"
                  title="Our Comprehensive Compliance Audit Services"
                  subtitle="From regulatory assessments to detailed reporting, JM TECH provides end-to-end services to ensure your applications meet industry standards."
                  aria-label="Overview of compliance audit services"
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" role="list">
                  {complianceAuditServices.map((service) => (
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

            <section id="compliance-audit-process" className="px-6 py-20 md:py-24 bg-transparent" aria-labelledby="process-heading">
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our Streamlined Compliance Audit Process"
                  subtitle="Our structured and thorough process ensures your applications are rigorously audited for compliance, delivering peace of mind and regulatory adherence."
                  aria-label="Compliance audit process steps"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      className="group relative bg-transparent border border-yellow-500/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col min-h-[240px] backdrop-blur-sm"
                      aria-label={`Process step ${index + 1}: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction className="bg-transparent py-16 px-6 md:px-10 backdrop-blur-sm" aria-label="Call to action for compliance audit services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplianceAudit;