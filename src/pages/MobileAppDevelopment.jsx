import { useState } from 'react';
import HeroSection from '../components/HeroSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessCard from '../components/ProcessCard.jsx';
import WhyChooseCard from '../components/WhyChooseCard.jsx';
import TechStackCard from '../components/TechStackCard.jsx';
import CallToAction from '../components/CallToAction.jsx';

import {
  mobileServices,
  mobileTechStack,
  whyChooseItems,
  processSteps
} from '../data/mobileDevelopmentData.js';

const MobileAppDevelopment = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <title>Mobile App Development | JM TECH</title>
      <div className="page min-h-screen bg-[#0D0D0D] text-white font-['Inter',_sans-serif] antialiased overflow-x-hidden">
        <div className="app-container relative min-h-screen">
          <div className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"></div>
          <div className="content-container relative z-10">

            <HeroSection
              title="Crafting Exceptional Mobile Experiences with JM TECH"
              subtitle="At JM TECH, we transform your innovative ideas into powerful, intuitive, and high-performing mobile applications. Specializing in bespoke solutions for iOS, Android, and cross-platform ecosystems, we are your trusted partner in navigating the dynamic mobile landscape. Let's build something extraordinary together."
              ctaText="Request a Free Consultation"
              ctaLink="/contact"
              titleColor="#FBBF24"
              className="min-h-[500px] flex items-center justify-center bg-transparent bg-cover bg-center overflow-x-hidden"
            />

            <section
              id="why-jmtech"
              className="px-6 py-20 bg-transparent"
              aria-label="Reasons to partner with JM TECH for mobile development"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Why Partner with JM TECH for Mobile Development?"
                  subtitle="In today's mobile-first world, a compelling app is crucial for connecting with your audience. JM TECH brings expertise, innovation, and a user-centric approach to deliver mobile solutions that not only meet but exceed your expectations."
                />
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                  aria-label="Why choose JM TECH reasons grid"
                >
                  {whyChooseItems.map((item, index) => (
                    <WhyChooseCard
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="our-mobile-services"
              className="px-6 py-20 bg-transparent"
              aria-label="Comprehensive mobile development services offered"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Comprehensive Mobile Development Services"
                  subtitle="From concept to deployment and beyond, JM TECH offers a full spectrum of mobile development services to bring your vision to life. Each service is tailored to deliver exceptional results and a competitive edge."
                />
                <div
                  className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                  aria-label="Mobile development service cards grid"
                >
                  {mobileServices.map((service) => (
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
              id="our-process"
              className="px-6 py-20 bg-transparent"
              aria-label="JM TECH mobile development process steps"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Streamlined Development Process"
                  subtitle="We follow an agile and transparent development methodology to ensure your project is delivered on time, within budget, and to your exact specifications."
                />
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  aria-label="Process steps grid"
                >
                  {processSteps.map((step, index) => (
                    <ProcessCard
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              id="mobile-tech-stack"
              className="px-6 py-20 bg-transparent"
              aria-label="Core mobile technology stack categories"
            >
              <div className="max-w-7xl mx-auto text-center">
                <SectionHeader
                  title="Our Core Mobile Technology Stack"
                  subtitle="We utilize a versatile range of modern technologies to build high-performance, scalable, and user-friendly mobile applications."
                />
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
                  aria-label="Mobile technology stack categories grid"
                >
                  {mobileTechStack.map((techCategory, index) => (
                    <TechStackCard
                      key={index}
                      category={techCategory.category}
                      technologies={techCategory.technologies}
                    />
                  ))}
                </div>
              </div>
            </section>

            <CallToAction aria-label="Call to action section" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;
