import { memo } from 'react';
import CallToAction from '../components/CallToAction';
import { serviceCategories } from '../data/servicesData';
import useSectionNavigation from '../hooks/useSectionNavigation.js';

const Services = () => {
  const { activeSection, handleSectionChange, handleKeyDown } = useSectionNavigation();

  return (
    <>
      <title>Services | JM TECH</title>

      <div
        className="page min-h-screen bg-[#0D0D0D] text-white font-sans antialiased overflow-x-hidden"
        role="main"
        aria-label="Services Overview Page"
      >
        <div className="app-container relative min-h-screen">
          <div
            className="aurora-container fixed inset-0 z-[-1] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-yellow-900/20 animate-gradient-pulse"
            aria-hidden="true"
          ></div>

          <div className="py-20 relative z-10">
            {/* Core Services Section */}
            <section className="px-6  bg-transparent" aria-labelledby="core-services-heading">
              <div className="max-w-7xl mx-auto">
                <h4
                  id="core-services-heading"
                  className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-8 tracking-tight leading-tight"
                >
                  Our Core IT Services
                </h4>
                <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-gray-200 leading-7 font-['Inter',_sans-serif]">
                  We deliver high-quality, tailor-made solutions in software development and comprehensive quality assurance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {serviceCategories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className={`group relative bg-transparent border border-yellow-500/30 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex flex-col min-h-[220px] ${
                        activeSection === category.id ? 'border-yellow-500' : ''
                      }`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Learn more about ${category.title}`}
                      onClick={() => handleSectionChange(category.id)}
                      onKeyDown={(e) => handleKeyDown(e, category.id)}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"
                        aria-hidden="true"
                      ></div>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                          🛠️
                        </span>
                        <h3 className="relative text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>
                      <p className="relative text-gray-300 text-base leading-relaxed font-['Inter',_sans-serif] flex-grow">
                        {category.description}
                      </p>
                      <span className="absolute bottom-4 right-4 text-gray-500 group-hover:text-yellow-400 transition-colors duration-300 text-2xl transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Sub-Services Section */}
            <section className="px-6 py-24 bg-transparent" aria-labelledby="sub-services-heading">
              <div className="max-w-7xl mx-auto">
                {serviceCategories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className="mb-24 scroll-mt-40 pt-40"
                    aria-labelledby={`${category.id}-heading`}
                  >
                    <div className="flex items-center mb-10">
                      <h2
                        id={`${category.id}-heading`}
                        className={`text-3xl md:text-4xl font-bold text-white border-l-4 border-yellow-500 pl-4 ${
                          activeSection === category.id ? 'bg-yellow-500/10' : ''
                        }`}
                      >
                        {category.title}
                      </h2>
                      <div className="flex-grow h-px bg-gray-700/50 ml-6" aria-hidden="true"></div>
                    </div>
                    {/* <p className="text-lg text-gray-300 mb-12 leading-relaxed font-['Inter',_sans-serif] max-w-4xl">
                      {category.description}
                    </p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.subServices.map((subService) => (
                        <a
                          key={subService.id}
                          href={`/services/${subService.id}`}
                          className="group relative bg-transparent border border-yellow-500/20 p-8 rounded-xl shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex flex-col min-h-[240px]"
                          role="button"
                          tabIndex={0}
                          aria-label={`Explore ${subService.title}`}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              window.location.href = `/services/${subService.id}`;
                            }
                          }}
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
                            aria-hidden="true"
                          ></div>
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                            {subService.title}
                          </h3>
                          <p className="text-gray-300 text-base leading-relaxed font-['Inter',_sans-serif] flex-grow">
                            {subService.description}
                          </p>
                          <span className="absolute bottom-4 right-4 text-gray-600 group-hover:text-yellow-500 transition-colors duration-300 text-xl transform group-hover:translate-x-1">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <CallToAction aria-label="Call to Action Section" />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Services);