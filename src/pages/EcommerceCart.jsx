// src/pages/EcommerceCart.jsx
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';

import {
  ecommerceServices,
  ecommerceTechStack,
  whyChooseItems,
  processSteps,
} from '../data/ecommerceData.js';

const EcommerceCart = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>E-Commerce Cart Development | JM Tech</title>
      <main
        className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden"
        aria-label="E-Commerce Cart Development page"
      >
        <div className="app-container relative min-h-screen">
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"
            aria-hidden="true"
          ></div>

          <div className="content-container relative z-10">
            <section
              id="why-jmtech-ecommerce"
              className="px-6  bg-transparent"
              aria-labelledby="why-partner-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="why-partner-heading"
                  title="Why Partner with JM TECH for E-Commerce?"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  {whyChooseItems.map((item, i) => (
                    <WhyChooseCard
                      key={i}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="ecommerce-services"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="services-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="services-heading"
                  title="Our Comprehensive E-Commerce Services"
                  subtitle="We specialize in building modern e-commerce platforms with cutting-edge technologies, ensuring seamless user experiences, scalability, and security."
                />
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {ecommerceServices.map(service => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      isActive={activeSection === service.id}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="ecommerce-process"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="process-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="process-heading"
                  title="Our Streamlined E-Commerce Development Process"
                  subtitle="Our agile methodology ensures your e-commerce platform is delivered on time, within budget, and tailored to your business needs."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {processSteps.map((step, i) => (
                    <ProcessCard
                      key={i}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="ecommerce-tech-stack"
              className="px-6 py-20 bg-transparent"
              aria-labelledby="tech-stack-heading"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  id="tech-stack-heading"
                  title="Our Core E-Commerce Technology Stack"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {ecommerceTechStack.map((tech, i) => (
                    <TechStackCard
                      key={i}
                      category={tech.category}
                      technologies={tech.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction />
          </div>
        </div>
      </main>
    </>
  );
};

export default EcommerceCart;
