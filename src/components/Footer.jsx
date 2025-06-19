import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      translateX: 5,
      color: '#A7F3D0', // Slightly softer light green
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      color: '#A7F3D0', // Slightly softer light green
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const socials = [
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
  ];

  const groupedServices = [
    {
      category: 'Development Services',
      items: [
        { path: '/services/web', label: 'Web Development' },
        { path: '/services/mobile', label: 'Mobile App Development' },
        { path: '/services/ecommerce-cart', label: 'E-Commerce Solutions' },
        { path: '/services/cross-platform', label: 'Cross-Platform Dev' },
        { path: '/services/hybrid', label: 'Hybrid App Dev' },
        { path: '/services/pwa', label: 'Progressive Web Apps' },
        { path: '/services/design-system', label: 'Product Design' },
      ],
    },
    {
      category: 'Quality & Audit',
      items: [
        { path: '/services/automation-testing', label: 'Automation Testing' },
        { path: '/services/manual-testing', label: 'Manual Testing' },
        { path: '/services/security-testing', label: 'Security Testing' },
        { path: '/services/code-review', label: 'Code Review & Opt.' },
        { path: '/services/security-audit', label: 'Security Audit' },
        { path: '/services/compliance-audit', label: 'Compliance Audit' },
      ],
    },
  ];

  return (
    <motion.footer
      className="relative py-12 mt-5 px-6 bg-gradient-to-r from-[#0F7F5C]/50 to-[#2A5DAA]/50 backdrop-blur-sm text-gray-300 font-sans overflow-hidden border-t border-green-300/10 shadow-inner rounded-t-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Branding Section */}
        <div className="space-y-4">
          <motion.div
            className="text-3xl font-extrabold text-green-300 flex items-center"
            whileHover={{ color: '#86EFAC', textShadow: '0 0 8px rgba(134, 239, 172, 0.5)' }}
          >
            JM <span className="text-white/90">Tech</span>
          </motion.div>
          <p className="text-sm leading-relaxed text-gray-400">
            Crafting innovative web and mobile solutions with cutting-edge technology.
          </p>
          <div className="flex space-x-4 pt-2">
            {socials.map(({ icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-300 hover:text-green-200 transition"
                variants={iconVariants}
                whileHover="hover"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Company Navigation */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white/90 mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            {['/home', '/about', '/portfolio', '/contact', '/privacy-policy'].map((path, idx) => (
              <li key={path}>
                <motion.div variants={linkVariants} whileHover="hover">
                  <Link to={path} className="hover:text-green-200">
                    {[
                      'Home',
                      'About',
                      'Portfolio',
                      'Contact Us',
                      'Privacy Policy',
                    ][idx]}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Navigation - Two-Column Layout */}
        <div className="space-y-4 md:col-span-1">
          <h4 className="text-xl font-semibold text-white/90 mb-3">Services</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6"> {/* Adjusted gap */}
            {groupedServices.map((group) => (
              <div key={group.category}>
                <h5 className="text-base font-medium text-green-300 mb-2">{group.category}</h5> {/* Adjusted font size */}
                <ul className="space-y-1 text-xs">
                  {group.items.map(({ path, label }) => (
                    <li key={label}>
                      <motion.div variants={linkVariants} whileHover="hover">
                        <Link to={path} className="hover:text-green-200">
                          {label}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white/90 mb-3">Contact</h4>
          <div className="space-y-3"> {/* Slightly increased spacing */}
            <div className="text-sm flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaEnvelope className="mr-2 text-green-300 text-base" />
              </motion.div>
              <a href="mailto:info@jmtech.com" className="hover:text-green-200">
                info@jmtech.com
              </a>
            </div>
            <div className="text-sm flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaPhone className="mr-2 text-green-300 text-base" />
              </motion.div>
              <span className="">+374 (77) 777777</span>
            </div>
            <div className="text-sm flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaMapMarkerAlt className="mr-2 text-green-300 text-base" />
              </motion.div>
              <span>Yerevan, Armenia</span>
            </div>
            <Link
              to="/contact-us"
              className="inline-block mt-4 px-5 py-2.5 text-sm font-medium bg-green-300/70 text-black rounded-md shadow-sm hover:bg-green-200 hover:shadow-md transition duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-green-300/10 pt-3 text-center text-xs text-gray-400 opacity-80 hover:opacity-100 transition-opacity">
        © {new Date().getFullYear()} JM Tech. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;