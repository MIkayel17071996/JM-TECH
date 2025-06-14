/**
 * Mobile App Testing data
 * @typedef {Object} MobileAppTestingService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 *
 * @typedef {Object} WhyChooseItem
 * @property {string} icon - Emoji icon for the item
 * @property {string} title - Item title
 * @property {string} description - Item description
 *
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */

/**
 * Mobile app testing services offered
 * @type {MobileAppTestingService[]}
 */
export const mobileAppTestingServices = [
  {
    id: 'mobile-app-testing',
    icon: '📱',
    title: 'Mobile App Testing',
    description:
      'Ensure your mobile applications deliver flawless performance across devices and platforms with our comprehensive mobile app testing services, guaranteeing a seamless user experience.',
  },
  {
    id: 'functional-testing',
    icon: '✅',
    title: 'Functional Testing',
    description:
      'Validate every feature of your mobile app, from user flows to edge cases, ensuring robust functionality and consistent performance on iOS and Android devices.',
  },
  {
    id: 'usability-testing',
    icon: '🖲️',
    title: 'Usability Testing',
    description:
      'Enhance user satisfaction by testing your mobile app’s interface and navigation, ensuring an intuitive and engaging experience across diverse screen sizes and devices.',
  },
  {
    id: 'performance-testing',
    icon: '⚡',
    title: 'Performance Testing',
    description:
      'Assess your mobile app’s speed, responsiveness, and stability under various conditions, ensuring optimal performance even during high usage or low network scenarios.',
  },
  {
    id: 'compatibility-testing',
    icon: '🔄',
    title: 'Compatibility Testing',
    description:
      'Verify your mobile app’s compatibility across a wide range of devices, operating systems, and versions, ensuring consistent functionality and appearance for all users.',
  },
];

/**
 * Reasons to choose JM TECH for mobile app testing
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '📱',
    title: 'Device & Platform Coverage',
    description:
      'We test across a wide range of iOS and Android devices, ensuring your app performs flawlessly for all users.',
  },
  {
    icon: '🚀',
    title: 'Performance Optimization',
    description:
      'Our testing ensures your app runs smoothly under diverse conditions, boosting speed and reliability.',
  },
  {
    icon: '🌟',
    title: 'User-Centric Focus',
    description:
      'We prioritize usability and functionality, delivering mobile experiences that delight and retain users.',
  },
];

/**
 * Mobile app testing process steps
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Requirement Analysis',
    description:
      'We study your app’s goals and specs to design a tailored mobile testing strategy.',
  },
  {
    icon: '📝',
    title: '2. Test Planning',
    description:
      'Crafting detailed test cases to cover functionality, usability, and compatibility.',
  },
  {
    icon: '🧑‍💻',
    title: '3. Test Execution',
    description:
      'Our testers run rigorous tests across devices, platforms, and scenarios.',
  },
  {
    icon: '🔍',
    title: '4. Defect Reporting',
    description:
      'We document issues with clear, actionable insights for quick resolution.',
  },
  {
    icon: '✅',
    title: '5. Validation & Retesting',
    description:
      'We verify fixes and retest to ensure your app meets quality standards.',
  },
  {
    icon: '🚀',
    title: '6. Delivery & Support',
    description:
      'Final reports and ongoing support to maintain top app performance.',
  },
];
