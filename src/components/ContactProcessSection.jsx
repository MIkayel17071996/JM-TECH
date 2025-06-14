import { motion } from 'framer-motion';
import contactImage from '../assets/team.png';

const ContactProcessSection = () => {
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
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    },
  };

  const steps = [
    {
      number: '1',
      title: 'Tell Us More',
      text: 'Fill out a quick form describing your needs. You can always add more details later on and we’ll reply within a day!',
    },
    {
      number: '2',
      title: 'Strategic Planning',
      text: 'We go through the recommended tools, technologies, and frameworks that best fit the challenges you face.',
    },
    {
      number: '3',
      title: 'Workshop Kickoff',
      text: 'Once we arrange the formalities, you can meet your team members and we’ll begin developing your next project.',
    },
  ];

  return (
    <motion.section
      className="relative py-10 px-6 lg:px-20 max-w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Content Left */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Talk About Your Product Project?
          </h1>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-white">{step.number}.</span>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-base">{step.text}</p>
                  {idx === 0 && (
                    <a
                      href="#"
                      className="inline-block mt-4 px-6 py-2 text-lg font-semibold text-white bg-blue-500 backdrop-blur-lg border border-green-300 rounded-2xl hover:bg-green-400 hover:border-green-200 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
                    >
                      CONTACT US
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Right */}
        <motion.div
          className="w-full max-w-full overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src={contactImage}
            alt="Team Collaboration"
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

export default ContactProcessSection;
