import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('summary');
  const [expandedDetails, setExpandedDetails] = useState({});

  // Function to toggle individual detail sections
  const toggleDetail = (id) => {
    setExpandedDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Smooth scroll and set active section when a nav link is clicked
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => setActiveSection(sectionId), 300);
    }
  };

  // Observe sections to update activeSection in navigation as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(
      '#summary, #data-collection, #data-usage-sharing, #your-rights-security, #general-info'
    );
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'summary', title: 'Quick Summary' },
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'data-usage-sharing', title: 'Usage & Sharing' },
    { id: 'your-rights-security', title: 'Your Rights & Security' },
    { id: 'general-info', title: 'General Info' },
  ];

  return (
    <div className="page py-16 px-4 font-sans antialiased bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Container for main content and sticky nav */}
      <div className="flex w-full max-w-7xl mx-auto relative z-10">
        {/* Sticky Side Navigation */}
        <nav className="hidden lg:block w-64 flex-shrink-0 sticky top-16 h-fit pt-8 pr-8 border-r border-gray-700/60">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavLinkClick(e, item.id)}
                  className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-400 text-white font-bold shadow-md'
                      : 'text-gray-400 hover:text-yellow-300 hover:bg-gray-800/50'
                    }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow pl-0 lg:pl-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 tracking-tight leading-tight">
              Your Privacy at JM TECH
            </h1>
            <p className="text-md text-gray-400 mb-6 max-w-3xl mx-auto">
              <em>
                <strong>Last Updated:</strong> <span className="text-yellow-400">June 16, 2025</span>
              </em>
            </p>
            <p className="text-lg text-white leading-relaxed max-w-4xl mx-auto">
              At <span className="text-yellow-300 font-bold">JM TECH</span>, we are committed to maintaining transparent and responsible data handling practices. This Privacy Policy outlines how we collect, use, and safeguard your personal information to ensure your trust and confidence.
            </p>
          </header>

          {/* Quick Summary */}
          <section id="summary" className="p-8 bg-gray-900/60 rounded-xl shadow-inner border border-gray-800/70 mb-12 transform hover:scale-[1.005] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Privacy Policy: Quick Summary
            </h2>
            <div className="prose prose-invert max-w-none text-white leading-relaxed">
              <p className="font-semibold text-lg mb-4 text-yellow-300">Key Information at a Glance:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-white">
                <li>
                  <strong>What We Collect:</strong> Information you provide (e.g., name and email when contacting us) and data collected automatically (e.g., IP address and browser type) to enhance our website.
                </li>
                <li>
                  <strong>Cookies:</strong> We utilize essential, analytics, and functionality cookies to improve site performance and user experience. You may manage these via your browser settings.
                </li>
                <li>
                  <strong>How We Use It:</strong> Your information supports responses to inquiries, service improvements, security measures, and, with your consent, marketing communications.
                </li>
                <li>
                  <strong>Sharing Your Data:</strong> <strong className="text-yellow-300">We do not sell your personal information.</strong> It is shared only with trusted service providers or when legally mandated.
                </li>
                <li>
                  <strong>Security:</strong> We employ encryption (HTTPS) and other safeguards to protect your data, though no system is entirely secure.
                </li>
              </ul>
              <p className="text-right text-sm text-gray-400 mt-6 italic">
                For detailed information, please review the sections below.
              </p>
            </div>
          </section>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* 1. Data Collection */}
            <section id="data-collection" className="p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800/70">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
                1. Information We Collect
              </h2>
              <p className="mb-6 text-gray-300">
                We collect various types of information to deliver and enhance our services, including data provided directly by you and data gathered automatically.
              </p>
              <button
                onClick={() => toggleDetail('data-collection-details')}
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 text-lg font-semibold transition-colors duration-200 mb-6"
              >
                {expandedDetails['data-collection-details'] ? 'Read Less ▲' : 'Read More Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedDetails['data-collection-details'] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="prose prose-invert max-w-none text-white leading-relaxed pt-2">
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-4">1.1. Information You Provide</h3>
                  <p className="mb-4 text-white">
                    This includes information you voluntarily submit when engaging with us:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Contact Details:</strong> Name, email address, phone number, and message content submitted via contact forms, emails (e.g., to <a href="mailto:contact@jmtech.com">contact@jmtech.com</a>), or live chat.
                    </li>
                    <li>
                      <strong>Subscriptions:</strong> Email address provided for newsletters or updates.
                    </li>
                    <li>
                      <strong>Service Requests:</strong> Data required to fulfill your specific service requests.
                    </li>
                  </ul>
                  <p className="mb-4 text-white">
                    This information enables effective communication and service delivery.
                  </p>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">1.2. Automatically Collected Information</h3>
                  <p className="mb-4 text-white">
                    We automatically gather technical data to assess site performance and user interaction, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.
                    </li>
                    <li>
                      <strong>Browsing Activity:</strong> Pages visited, visit timestamps, duration on pages, and navigation paths.
                    </li>
                    <li>
                      <strong>Referral Sources:</strong> The originating website that directed you to us.
                    </li>
                  </ul>
                  <p className="mb-4 text-white">
                    Cookies, web beacons, and similar technologies facilitate this collection for analytics and user experience enhancement.
                  </p>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">1.3. Cookies and Your Options</h3>
                  <p className="mb-4 text-white">
                    We employ cookies—small data files stored on your device—to optimize functionality and analyze usage:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Essential Cookies:</strong> Required for secure and efficient website operation.
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Enable us to monitor usage patterns and improve the site (data is aggregated and anonymized).
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> Retain your preferences (e.g., language settings) for a personalized experience.
                    </li>
                  </ul>
                  <p className="mb-4 text-white">
                    You may adjust cookie preferences through your browser settings; however, disabling essential cookies may impair site functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Data Usage & Sharing */}
            <section id="data-usage-sharing" className="p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800/70">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
                2. Use and Sharing of Your Information
              </h2>
              <p className="mb-6 text-gray-300">
                We utilize your information to support our operations and share it only under specific, limited conditions.
              </p>
              <button
                onClick={() => toggleDetail('data-usage-sharing-details')}
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 text-lg font-semibold transition-colors duration-200 mb-6"
              >
                {expandedDetails['data-usage-sharing-details'] ? 'Read Less ▲' : 'Read More Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedDetails['data-usage-sharing-details'] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="prose prose-invert max-w-none text-white leading-relaxed pt-2">
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-4">2.1. How We Use Your Information</h3>
                  <p className="mb-4 text-white">
                    Your information is used for the following purposes:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Communication:</strong> Responding to inquiries and providing support or requested services.
                    </li>
                    <li>
                      <strong>Service Enhancement:</strong> Analyzing usage to refine our website and develop new offerings.
                    </li>
                    <li>
                      <strong>Personalization:</strong> Customizing content and offers with your consent.
                    </li>
                    <li>
                      <strong>Marketing:</strong> Delivering updates and promotions with your permission; you may opt out at any time.
                    </li>
                    <li>
                      <strong>Security and Compliance:</strong> Preventing fraud, securing systems, and adhering to legal obligations.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">2.2. Information Sharing</h3>
                  <p className="mb-4 text-white">
                    <strong className="text-yellow-300">We do not sell, rent, or lease your personal information.</strong> Sharing occurs only in these instances:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Service Providers:</strong> Trusted third parties assisting with site operations (e.g., email or analytics services), bound by confidentiality agreements.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> Disclosure as mandated by law or court order.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> During mergers, acquisitions, or asset sales, with safeguards in place.
                    </li>
                    <li>
                      <strong>With Consent:</strong> For additional purposes with your explicit approval.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">2.3. Data Retention</h3>
                  <p className="mb-4 text-white">
                    We retain your information only as long as necessary to fulfill its intended purpose or comply with legal requirements. Subsequently, it is securely deleted or anonymized.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Your Rights & Security */}
            <section id="your-rights-security" className="p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800/70">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
                3. Your Rights and Security Measures
              </h2>
              <p className="mb-6 text-gray-300">
                You possess rights over your personal information, and we are dedicated to its protection.
              </p>
              <button
                onClick={() => toggleDetail('your-rights-security-details')}
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 text-lg font-semibold transition-colors duration-200 mb-6"
              >
                {expandedDetails['your-rights-security-details'] ? 'Read Less ▲' : 'Read More Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedDetails['your-rights-security-details'] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="prose prose-invert max-w-none text-white leading-relaxed pt-2">
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-4">3.1. Your Privacy Rights</h3>
                  <p className="mb-4 text-white">
                    Subject to applicable laws, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li><strong>Access:</strong> Request a copy of your data.</li>
                    <li><strong>Rectification:</strong> Correct inaccurate information.</li>
                    <li><strong>Erasure:</strong> Request deletion under certain conditions.</li>
                    <li><strong>Restriction:</strong> Limit processing in specific cases.</li>
                    <li><strong>Objection:</strong> Oppose processing under certain circumstances.</li>
                    <li><strong>Portability:</strong> Transfer data to another entity or yourself.</li>
                    <li><strong>Withdraw Consent:</strong> Revoke consent where applicable.</li>
                  </ul>
                  <p className="mb-4 text-white">
                    To exercise these rights, please contact us as outlined in the "Contact Us" section.
                  </p>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">3.2. Security Protections</h3>
                  <p className="mb-4 text-white">
                    We implement robust measures to safeguard your information:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-6 text-white">
                    <li>
                      <strong>Encryption:</strong> SSL/TLS encryption secures data transmission (indicated by "https://" and a padlock in your browser).
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Limited to authorized personnel and service providers.
                    </li>
                    <li>
                      <strong>Secure Storage:</strong> Protected by physical and digital safeguards.
                    </li>
                    <li>
                      <strong>Audits:</strong> Regular reviews ensure ongoing security efficacy.
                    </li>
                  </ul>
                  <p className="mb-4 text-white">
                    While we prioritize security, no online system is fully immune to risks. We continually refine our protections.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. General Information */}
            <section id="general-info" className="p-8 bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800/70">
              <h2 className="text-4xl font-bold text-yellow-400 mb-6 border-b border-gray-700 pb-3">
                4. General Information and Contact
              </h2>
              <p className="mb-6 text-gray-300">
                Additional details and contact information are provided below.
              </p>
              <button
                onClick={() => toggleDetail('general-info-details')}
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 text-lg font-semibold transition-colors duration-200 mb-6"
              >
                {expandedDetails['general-info-details'] ? 'Read Less ▲' : 'Read More Details ▼'}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedDetails['general-info-details'] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="prose prose-invert max-w-none text-white leading-relaxed pt-2">
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-4">4.1. Third-Party Websites</h3>
                  <p className="mb-4 text-white">
                    Our website may link to external sites not operated by JM TECH. We are not responsible for their privacy practices or content. We recommend reviewing their policies.
                  </p>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">4.2. Children’s Privacy</h3>
                  <p className="mb-4 text-white">
                    Our services are not designed for individuals under 13. We do not knowingly collect their data. If such information is identified, please contact us for its prompt removal.
                  </p>

                  <h3 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">4.3. Policy Updates</h3>
                  <p className="mb-4 text-white">
                    This Privacy Policy may be revised to reflect changes in practices or regulations. Updates will be posted here with a revised "Last Updated" date.
                  </p>

                  <h3 id="contact-us" className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">4.4. Contact Us</h3>
                  <p className="mb-4 text-white">
                    For questions, concerns, or to exercise your rights, please reach out to us:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-4 text-white">
                    <li>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:privacy@jmtech.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 underline underline-offset-2">
                        privacy@jmtech.com
                      </a>
                    </li>
                    <li>
                      <strong>Website:</strong>{' '}
                      <Link to="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 underline underline-offset-2">
                        Contact Page
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;