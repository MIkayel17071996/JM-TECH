import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction.jsx';

function About() {
  const [activeSection, setActiveSection] = useState('intro');
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle collapsible sections
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Smooth scroll with navbar offset
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navbarHeight = 160; // Fixed height of navbar (h-40 = 160px)
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
      setTimeout(() => setActiveSection(sectionId), 300);
    }
  };

  // IntersectionObserver for sticky navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-160px 0px 0px 0px' } // Adjust for navbar height
    );

    const sections = document.querySelectorAll('#intro, #why-we-started, #who-we-are, #what-we-do, #our-mission');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'intro', title: 'Introduction' },
    { id: 'why-we-started', title: 'Why We Started' },
    { id: 'who-we-are', title: 'Who We Are' },
    { id: 'what-we-do', title: 'What We Do' },
    { id: 'our-mission', title: 'Our Mission' },
  ];

  return (
    <>
      <title>About | JM TECH</title>

      <div className="page max-w-7xl mx-auto px-6 py-20 text-white font-['Inter',sans-serif] bg-gray-900 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="aurora-container fixed inset-0 z-[-1]"></div>

        <div className="flex relative z-10">
          {/* Sticky Side Navigation */}
          <nav className="hidden lg:block w-64 flex-shrink-0 sticky top-20 h-fit pt-8 pr-8 border-r border-gray-700/50">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavLinkClick(e, item.id)}
                    className={`block px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 ${activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-400 text-white font-bold shadow-md'
                      : 'text-yellow-400 hover:text-yellow-300 hover:bg-gray-800/50 focus:text-yellow-300 focus:bg-gray-800/50'
                      }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content Area */}
          <div className="flex-grow pl-0 lg:pl-10">
            {/* Introduction */}
            <section id="intro" className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 tracking-tight leading-tight">
                About JM TECH
              </h1>
              <p className="text-xl leading-relaxed text-gray-50 max-w-4xl mx-auto">
                JM TECH is a dynamic, newly established technology company dedicated to delivering <span className="text-yellow-300 font-semibold">innovative web and mobile application solutions</span>. Founded by a team of seasoned professionals with decades of collective experience, we combine deep technical expertise with a forward-thinking vision to empower businesses worldwide. Our focus on creating scalable, user-centric applications positions us as a trusted partner for startups, enterprises, and organizations seeking to transform their digital presence.
              </p>
              <button
                onClick={() => toggleSection('intro-details')}
                className="mt-6 mx-auto flex items-center gap-2 text-lg font-semibold text-yellow-400 hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-200"
                aria-expanded={expandedSections['intro-details']}
              >
                {expandedSections['intro-details'] ? 'Hide Details ▲' : 'Show Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['intro-details'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="mt-4 text-lg leading-relaxed text-gray-50 max-w-4xl mx-auto">
                  Our mission is to bridge the gap between complex technical challenges and intuitive, impactful solutions, with a particular emphasis on web and mobile platforms that drive business success.
                </p>
              </div>
            </section>

            <div className="border-t border-gradient-to-r from-gray-700/50 to-transparent my-12"></div>

            {/* Why We Started */}
            <section id="why-we-started" className="mb-16">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Why We Founded JM TECH</h2>
              <p className="text-lg leading-relaxed text-gray-50 max-w-3xl mx-auto text-center">
                JM TECH was born from a collective desire to redefine software development by prioritizing <span className="text-yellow-300 font-semibold">innovation, precision, and client success</span>. Our founders, with extensive experience in global projects, identified a gap in the industry for a company that combines technical expertise with a client-centric approach, delivering tailored web and mobile solutions that drive measurable results.
              </p>
              <button
                onClick={() => toggleSection('why-we-started-details')}
                className="mt-6 mx-auto flex items-center gap-2 text-lg font-semibold text-yellow-400 hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-200"
                aria-expanded={expandedSections['why-we-started-details']}
              >
                {expandedSections['why-we-started-details'] ? 'Hide Details ▲' : 'Show Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['why-we-started-details'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="mt-4 text-lg leading-relaxed text-gray-50 max-w-3xl mx-auto">
                  <p className="mb-4">
                    After years of working in diverse sectors—from fintech to healthcare—our team saw opportunities to improve how software solutions are delivered. Traditional approaches often lacked flexibility, transparency, or a focus on long-term value. JM TECH was established to address these challenges, offering bespoke web and mobile applications that align with clients’ strategic goals. Our commitment to <span className="text-yellow-300 font-semibold">Agile development, open communication, and technical excellence</span> ensures we deliver solutions that are both innovative and reliable.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gradient-to-r from-gray-700/50 to-transparent my-12"></div>

            {/* Who We Are */}
            <section id="who-we-are" className="mb-16">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Our Team</h2>
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-lg leading-relaxed text-gray-50 mb-6">
                    Our team comprises <span className="text-yellow-300 font-semibold">highly skilled developers, engineers, designers, testers, and project managers</span>, each with over seven years of industry experience. Specializing in <span className="text-yellow-300 font-semibold">web and mobile application development</span>, we bring expertise in frontend and backend technologies, full-stack architecture, UI/UX design, quality assurance, DevOps, and agile project management.
                  </p>
                  <button
                    onClick={() => toggleSection('who-we-are-details')}
                    className="mx-auto flex items-center gap-2 text-lg font-semibold text-yellow-400 hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-200"
                    aria-expanded={expandedSections['who-we-are-details']}
                  >
                    {expandedSections['who-we-are-details'] ? 'Hide Details ▲' : 'Show Details ▼'}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['who-we-are-details'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="mt-4 text-lg leading-relaxed text-gray-50">
                      At JM TECH, our team’s diversity is our strength. Our developers are proficient in modern frameworks like React, Angular, Node.js, and Flutter, enabling us to build robust web and mobile applications. Our designers create intuitive interfaces that prioritize user experience (UX), while our QA specialists ensure flawless performance through rigorous testing. Our project managers employ agile methodologies to deliver projects on time and within scope, fostering transparent communication with clients. This multidisciplinary approach ensures we deliver holistic solutions that drive business success.
                    </p>
                  </div>
                </div>
                <div className="group relative bg-gray-800/50 p-8 rounded-lg shadow-lg border border-yellow-500/20 hover:shadow-xl hover:border-yellow-500 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"></div>
                  <p className="text-xl font-semibold text-yellow-400 mb-4 group-hover:text-white relative z-10">Industry Expertise:</p>
                  <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 text-gray-50 group-hover:text-white relative z-10">
                    <li>E-commerce Platforms</li>
                    <li>Financial Technology</li>
                    <li>Healthcare Solutions</li>
                    <li>Logistics Chain Systems</li>
                    <li>Educational Technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-gradient-to-r from-gray-700/50 to-transparent my-12"></div>

            {/* What We Do */}
            <section id="what-we-do" className="mb-16">
              <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Our Services</h2>
              <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto text-center mb-8">
                JM TECH specializes in <span className="text-yellow-300 font-semibold">full-cycle web and mobile application development</span>, delivering end-to-end solutions tailored to the unique needs of startups, enterprises, and organizations. From concept to deployment, we provide comprehensive services to ensure seamless, scalable, and impactful applications.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Frontend Development',
                    desc: 'Crafting responsive, accessible, and modern user interfaces using technologies like React, Angular, and Vue.js.',
                  },
                  {
                    title: 'Backend Development',
                    desc: 'Building scalable, secure APIs and cloud-ready infrastructure with Node.js, Python, and AWS.',
                  },
                  {
                    title: 'Mobile Development',
                    desc: 'Developing native and cross-platform apps for iOS and Android using Swift, Kotlin, and Flutter.',
                  },
                  {
                    title: 'UI/UX Design',
                    desc: 'Designing intuitive, user-centric interfaces that prioritize engagement and usability.',
                  },
                  {
                    title: 'QA & Testing',
                    desc: 'Ensuring flawless functionality through  manual and automated testing.',
                  },
                  {
                    title: 'Project Management',
                    desc: 'Employing agile methodologies for transparent, timely, and client-focused project delivery.',
                  },
                ].map(({ title, desc }, i) => (
                  <div
                    key={i}
                    className={`group relative bg-gray-800/50 p-6 rounded-lg shadow-lg border border-yellow-500/20 hover:shadow-xl hover:border-yellow-500 transition-all duration-300 ${i === 6 ? 'md:col-start-2 md:col-end-3 lg:col-start-2 lg:col-end-3' : ''
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 z-0"></div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:text-white relative z-10">{title}</h3>
                    <p className="text-gray-50 group-hover:text-white relative z-10">{desc}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => toggleSection('what-we-do-details')}
                className="mt-8 mx-auto flex items-center gap-2 text-lg font-semibold text-yellow-400 hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-200"
                aria-expanded={expandedSections['what-we-do-details']}
              >
                {expandedSections['what-we-do-details'] ? 'Hide Details ▲' : 'Show Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['what-we-do-details'] ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="mt-4 text-lg leading-relaxed text-gray-50 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Our development process begins with a deep understanding of our clients’ needs, followed by meticulous planning and design. We leverage modern frameworks and cloud technologies to build web and mobile applications that are both robust and adaptable. 
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gradient-to-r from-gray-700/50 to-transparent my-12"></div>

            {/* Our Mission */}
            <section id="our-mission" className="text-center mb-16">
              <h4 className="text-4xl font-bold text-yellow-400 mb-6">Our Mission</h4>
              <p className="text-xl leading-relaxed text-gray-50 max-w-3xl mx-auto italic font-semibold">
                “To deliver innovative web and mobile application solutions that address real-world challenges, empower businesses, and exceed client expectations.”
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-50 max-w-3xl mx-auto">
                At JM TECH, we are committed to <span className="text-yellow-300 font-semibold">transparency, quality, and long-term partnerships</span>. Our goal is to create applications that not only meet immediate needs but also drive sustainable growth and success for our clients.
              </p>
              <button
                onClick={() => toggleSection('our-mission-details')}
                className="mt-6 mx-auto flex items-center gap-2 text-lg font-semibold text-yellow-400 hover:text-yellow-300 focus:text-yellow-300 transition-colors duration-200"
                aria-expanded={expandedSections['our-mission-details']}
              >
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSections['our-mission-details'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
              </div>
            </section>

            {/* Call to Action */}
            <div className="text-center">
              <CallToAction className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
