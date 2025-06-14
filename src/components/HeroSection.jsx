// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({
  title,
  titleColor = '#FBBF24',
  subtitle,
  ctaText = '',
  ctaLink = '',
  backgroundImage,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.4 } },
  };

  const lines = title.split('\n');

  return (
    <motion.div
      className="relative top-[-150px] min-h-[calc(100vh-10rem)] flex items-center justify-center bg-transparent overflow-x-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 flex justify-center flex-wrap text-center"
          style={{ color: titleColor }}
        >
          {lines.map((line, i) => (
            <div key={i} className="w-full flex justify-center flex-wrap">
              {line.split(' ').map((word, j) => (
                <motion.span
                  key={`${i}-${j}`}
                  variants={wordVariants}
                  className="inline-block whitespace-nowrap mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {subtitle}
        </motion.p>

        {ctaText && ctaLink && (
          <motion.a
            href={ctaLink}
            className="inline-block bg-[#FBBF24] text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-[#EAB308] transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {ctaText}
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
