import { motion } from 'framer-motion';
import image1 from '../assets/phone&laptopImg.png';

const Intro = () => {
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
      className="relative pt-1 pb-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 min-w-0 relative">
          {/* Pattern Background */}
          <div
            className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 10 10%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%221%22 fill=%22%23A855F7%22/%3E%3C/svg%3E')] opacity-20"
            style={{ backgroundSize: '20px 20px' }}
          />
          <div className="relative z-10">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Custom Web & Mobile Development Solutions
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              JM Tech is a modern software development company focused on delivering
              high-quality web and mobile applications. We bring together skilled
              developers, QA engineers, and project managers to turn ideas into reliable,
              scalable digital products.
            </motion.p>
            <motion.p
              className="text-md sm:text-lg text-[#FBBF1F] italic mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-500 backdrop-blur-lg border border-green-300 rounded-2xl hover:bg-green-400 hover:border-green-200 hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"

            >
              Get Started
            </motion.a>
          </div>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center overflow-hidden min-w-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={image1}
            alt="Phone and laptop showcasing JM Tech solutions"
            className="w-full max-w-md object-contain animate-float"
            style={{ maxWidth: '100%' }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;
