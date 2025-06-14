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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#BBF7D0',
      textShadow: '0 0 8px rgba(187, 247, 208, 0.5)',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      color: '#BBF7D0',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const socials = [
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <motion.footer
      className="relative py-16 mt-5 px-6 bg-gradient-to-r from-[#0F7F5C]/60 to-[#2A5DAA]/60 backdrop-blur-md text-white font-sans overflow-hidden border-t border-green-300/20 shadow-inner"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding Section */}
        <div className="space-y-6">
          <motion.div
            className="text-4xl font-extrabold text-green-300/80 flex items-center"
            whileHover={{ color: '#86EFAC', textShadow: '0 0 12px rgba(134, 239, 172, 0.7)' }}
          >
            JM <span className="text-white">Tech</span>
          </motion.div>
          <p className="text-base text-gray-400 leading-relaxed">
            Crafting innovative web and mobile solutions with cutting-edge technology.
          </p>
          <div className="flex space-x-6">
            {socials.map(({ icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-green-300 hover:text-green-200 transition"
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
        <div className="space-y-6">
          <h4 className="text-xl font-semibold">Company</h4>
          <ul className="space-y-3 text-base text-gray-300">
            {['/home', '/about', '/portfolio', '/blog'].map((path, idx) => (
              <li key={path}>
                <motion.div variants={linkVariants} whileHover="hover">
                  <Link to={path} className="hover:text-green-200">
                    {['Home', 'About', 'Portfolio', 'Blog'][idx]}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Navigation */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold">Services</h4>
          <ul className="space-y-3 text-base text-gray-300">
            {[
              { path: '/services/web', label: 'Web Development' },
              { path: '/services/mobile', label: 'Mobile Development' },
              { path: '/services/design', label: 'Product Design' },
              { path: '/services/audit', label: 'Software Audit' },
            ].map(({ path, label }) => (
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

        {/* Contact Section */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold">Contact</h4>
          <div className="space-y-3">
            <div className="text-base text-gray-300 flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaEnvelope className="mr-3 text-green-300" />
              </motion.div>
              <a href="mailto:info@jmtech.com" className="hover:text-green-200">
                info@jmtech.com
              </a>
            </div>
            <div className="text-base text-gray-300 flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaPhone className="mr-3 text-green-300" />
              </motion.div>
              <span>+374 (77) 777777</span>
            </div>
            <div className="text-base text-gray-300 flex items-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <FaMapMarkerAlt className="mr-3 text-green-300" />
              </motion.div>
              <span>Yerevan, Armenia</span>
            </div>
            <a
              href="/contact-us"
              className="inline-block mt-4 px-6 py-3 text-base font-medium bg-green-300/80 text-black rounded-xl shadow-md hover:bg-green-200 hover:shadow-lg transition duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-green-300/10 pt-4 text-center text-sm text-gray-400 transition-opacity hover:opacity-80">
        © {new Date().getFullYear()} JM Tech. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
