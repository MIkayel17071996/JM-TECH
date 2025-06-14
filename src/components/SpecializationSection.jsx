import SpotlightCard from './SpotlightCard.jsx';
import laptopImg from '../assets/laptop.jpg'; // Replace with actual image path
import mobileImg from '../assets/mobile.jpg'; // Replace with actual image path
import { FaGlobe, FaMobileAlt } from 'react-icons/fa';

const SpecializationSection = () => {
  const specializations = [
    {
      title: 'Web Applications',
      description:
        'Custom software designed for users to access through web browsers.',
      icon: <FaGlobe className="text-blue-500 w-8 h-8" />,
      image: laptopImg,
      alt: 'Laptop with web application',
    },
    {
      title: 'Mobile & Tablet Applications',
      description:
        'Custom software developed for users to access on iOS and Android mobile and tablet devices.',
      icon: <FaMobileAlt className="text-green-500 w-8 h-8" />,
      image: mobileImg,
      alt: 'Mobile device with application',
    },
  ];

  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Specialization</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {specializations.map((spec, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(251, 191, 36, 0.25)"
            className="relative w-64 h-64 flex flex-col items-center"
          >
            <div className="flex items-center mb-4">
              {spec.icon}
              <h3 className="text-xl font-semibold text-white ml-3">{spec.title}</h3>
            </div>
            <img
              src={spec.image}
              alt={spec.alt}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 text-center">{spec.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default SpecializationSection;