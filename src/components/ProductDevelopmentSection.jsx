import { motion } from 'framer-motion';
import productcycle from '../assets/productcycle.png';

const ProductDevelopmentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: { duration: 0.9, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    },
  };

  return (
    <motion.section
      className="relative py-10 px-6 lg:px-20 max-w-full" // Reduced padding to minimize gaps
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Image Left */}
        <motion.div
          className="w-full max-w-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src={productcycle}
            alt="Product Development Cycle"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            style={{ maxWidth: '100%' }}
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            loading="lazy"
          />
        </motion.div>

        {/* Content Right */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Our Product Development Process
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-prose">
            We take care of your projects with proven agile methods that are designed to get all stakeholders (even non-technical ones) in alignment. Our workflow amplifies collaboration and faster turnarounds to achieve even the most ambitious goals.
          </p>
          <a href="#" className="text-blue-500 text-lg font-semibold hover:underline">
            SEE HOW WE WORK →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductDevelopmentSection;