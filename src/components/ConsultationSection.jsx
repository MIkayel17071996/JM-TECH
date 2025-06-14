import { motion } from 'framer-motion';
import consultationImage from '../assets/consultation.png';

const ConsultationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };



  return (
    <motion.section
      className="relative mt-30 pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={consultationImage}
            alt="Team consultation"
            className="w-full max-w-md object-contain animate-float"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* Pattern Background */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 10 10%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%221%22 fill=%22%23A855F7%22/%3E%3C/svg%3E')] opacity-20"
            style={{ backgroundSize: '20px 20px' }}
          />
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Launch Your Product with a Clear Plan
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Unsure how to begin your product development? Our experts will guide you through design, tech, and team decisions, delivering a precise roadmap and resource plan for success.
            </p>
            <p className="text-md sm:text-lg text-[#FBBF1F] italic mb-12">
              From first steps to final success — we pave the way for your vision.
            </p>
            <motion.a
              href="/consultation"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-500 backdrop-blur-lg border border-green-300 rounded-2xl hover:bg-green-400 hover:border-green-200 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"

            >
              START FREE CONSULTATION
            </motion.a>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConsultationSection;
