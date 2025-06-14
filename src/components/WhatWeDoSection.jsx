// import Link from 'next/link';
import { FaCode, FaBug, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const categories = [
  {
    title: 'Custom Software Development',
    icon: <FaCode className="text-blue-400 w-6 h-6" />,
    link: '/services/custom-software-development',
    highlights: ['Mobile, Web, Desktop', 'Cloud Solutions', 'Cross-platform'],
  },
  {
    title: 'Software Testing and QA',
    icon: <FaBug className="text-pink-400 w-6 h-6" />,
    link: '/services/software-testing-qa',
    highlights: ['Automation Testing', 'Manual Testing', 'Security Testing'],
  },
  {
    title: 'Product Engineering',
    icon: <FaProjectDiagram className="text-green-400 w-6 h-6" />,
    link: '/services/product-engineering',
    highlights: ['Business Analysis', 'Prototyping', 'UI/UX & Low-code'],
  },
  {
    title: 'Staff Augmentation',
    icon: <FaUsers className="text-yellow-400 w-6 h-6" />,
    link: '/services/staff-augmentation',
    highlights: ['Dedicated Teams', 'Team Extension', 'React, Angular, Python'],
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold text-white text-center mb-6">What We Can Do</h2>
      <p className="text-gray-300 mb-10 text-center">
        We provide full-cycle services tailored to your business goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-md cursor-pointer">
              <div className="flex items-center mb-4">
                {item.icon}
                <h3 className="text-white text-lg font-semibold ml-3">{item.title}</h3>
              </div>
              <ul className="text-gray-400 list-disc pl-6 space-y-1 text-sm">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
