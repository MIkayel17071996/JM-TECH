import { motion } from 'framer-motion';
import whyChooseUsImg from '../assets/whychooseus.png';

const features = [
  {
    title: 'Experienced and Dedicated Talent',
    text: `Our developers aren’t just skilled — they’re proven. Fewer than 2% pass our screening process, giving you a team of mid-to-senior engineers who provide stability, technical depth, and long-term value.`,
  },
  {
    title: 'End-to-End Flexibility',
    text: `From full product delivery to specific modules, we adapt to your needs. Whether you're starting from scratch or modernizing a legacy system, we deliver scalable solutions that grow with your business.`,
  },
  {
    title: 'Technology Without Limits',
    text: `We don’t just develop — we advise. Our full-stack team helps you choose the right technologies to ensure your product is fast, secure, and ready for future growth.`,
  },
  {
    title: 'Built-In Quality',
    text: `Quality is our foundation. With rigorous QA, proactive risk control, and agile delivery, we ensure every project is robust, scalable, and built to perform.`,
  },
];

const WhyChooseUsSection = () => {
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

  const cardVariants = {
    initial: { scale: 1, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' },
    hover: {
      scale: 1.03,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
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
        {/* Content Left */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Why Partner with Us?
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-prose">
            Unlike other development companies, you’ll get to know our experts face-to-face. We go the distance to understand your business and integrate with your teams and workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ title, text }, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-md border border-gray-700 hover:border-gray-500 transition-all duration-300"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-base">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Right */}
        <motion.div
          className="w-full max-w-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src={whyChooseUsImg}
            alt="Team"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            style={{ maxWidth: '100%' }}
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;