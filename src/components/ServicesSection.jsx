import SpotlightCard from './SpotlightCard.jsx';
import { FaGlobe, FaMobileAlt, FaBuilding, FaShoppingCart, FaPaintBrush, FaCheckCircle } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Applications',
      description:
        'Software solutions optimized for seamless access through any modern web browser, enabling users to easily interact from desktops, laptops, and mobile devices.',
      icon: <FaGlobe className="text-blue-500 w-8 h-8" />,
      url: '/services/web',
    },
    {
      title: 'Mobile & Tablet Applications',
      description:
        'Custom-built applications crafted specifically for iOS and Android platforms, designed to deliver an intuitive and engaging user experience on smartphones and tablets.',
      icon: <FaMobileAlt className="text-green-500 w-8 h-8" />,
      url: '/services/mobile',
    },
    {
      title: 'Hybrid App Development',
      description:
        'Specializes in hybrid app development, delivering smooth, responsive apps that run flawlessly across all major platforms.',
      icon: <FaBuilding className="text-purple-500 w-8 h-8" />,
      url: '/services/hybrid',
    },
    {
      title: 'E-commerce Platforms',
      description:
        'Custom online marketplaces built to provide smooth shopping experiences, secure transactions, and scalable product management.',
      icon: <FaShoppingCart className="text-orange-500 w-8 h-8" />,
      url: '/services/ecommerce-cart',
    },
    {
      title: 'Web & Mobile App Design',
      description:
        'Creative and user-centric graphic and UI/UX design services that bring your digital products to life, ensuring visually appealing and highly usable applications.',
      icon: <FaPaintBrush className="text-red-500 w-8 h-8" />,
      url: '/services/design-system',
    },
    {
      title: 'Quality Assurance (QA)',
      description:
        'Comprehensive testing and quality assurance processes to guarantee that your software performs flawlessly across all devices and platforms, ensuring reliability and user satisfaction.',
      icon: <FaCheckCircle className="text-teal-500 w-8 h-8" />,
      url: '/services/automation-testing',
    },
  ];

  return (
    <section className="page py-12 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a href={service.url} key={index}>
            <SpotlightCard
              spotlightColor="rgba(251, 191, 36, 0.25)"
              className="flex flex-col min-h-[360px] overflow-hidden"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-300 flex-grow">{service.description}</p>
            </SpotlightCard>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;