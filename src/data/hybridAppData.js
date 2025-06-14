/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} WhyChooseItem
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} ProcessStep
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} TechStackCategory
 * @property {string} category
 * @property {string[]} technologies
 */

/** @type {Service[]} */


export const hybridAppServices = [
  {
    id: 'hybrid',
    icon: '🔄',
    title: 'Hybrid App Development',
    description: 'Combine web technologies with native features for fast, cost-effective hybrid apps that deliver near-native performance across iOS and Android.'
  },
  {
    id: 'ionic',
    icon: '⚡️',
    title: 'Ionic Development',
    description: 'Build feature-rich hybrid apps using Ionic, leveraging HTML, CSS, and JavaScript for seamless performance and native device integration.'
  },
  {
    id: 'cordova',
    icon: '📱',
    title: 'Cordova Development',
    description: 'Develop versatile hybrid apps with Apache Cordova, enabling access to native device features through plugins for a robust experience.'
  },
  {
    id: 'hybrid-ui-ux',
    icon: '🎨',
    title: 'Hybrid UI/UX Design',
    description: 'Create responsive and intuitive user interfaces optimized for hybrid apps, ensuring a consistent experience across platforms.'
  },
  {
    id: 'hybrid-testing',
    icon: '🧪',
    title: 'Hybrid App Testing',
    description: 'Ensure reliability with comprehensive testing for functionality, compatibility, and performance across iOS and Android devices.'
  },
  {
    id: 'hybrid-maintenance',
    icon: '🛠️',
    title: 'Hybrid App Maintenance',
    description: 'Provide ongoing updates, bug fixes, and performance optimization to keep your hybrid apps secure and aligned with platform updates.'
  }
];

export const whyChooseItems = [
  {
    icon: '🚀',
    title: 'Rapid Development',
    description: 'Our hybrid approach accelerates development with web technologies, reducing time-to-market for iOS and Android apps.'
  },
  {
    icon: '🤝',
    title: 'Consistent UX',
    description: 'We design intuitive interfaces that ensure a seamless user experience across platforms, boosting engagement.'
  },
  {
    icon: '🔒',
    title: 'Cost-Effective Solutions',
    description: 'Leverage a single codebase for cost-efficient development, maintenance, and updates without compromising quality.'
  }
];

export const processSteps = [
  { icon: '💡', title: '1. Discovery & Strategy', description: 'Understanding your app goals, audience, and hybrid requirements.' },
  { icon: '🎨', title: '2. UI/UX Design', description: 'Crafting responsive and engaging interfaces for hybrid apps.' },
  { icon: '👨‍💻', title: '3. Development', description: 'Building hybrid apps with Ionic, Cordova, or other frameworks.' },
  { icon: '✅', title: '4. Testing & QA', description: 'Ensuring compatibility, performance, and functionality across devices.' },
  { icon: '🚀', title: '5. Deployment', description: 'Launching your app on iOS and Android with optimized configurations.' },
  { icon: '📈', title: '6. Maintenance & Updates', description: 'Providing ongoing support, updates, and performance enhancements.' }
];

export const hybridTechStack = [
  { category: 'Frameworks', technologies: ['Ionic', 'Apache Cordova', 'Capacitor', 'PhoneGap'] },
  { category: 'Frontend', technologies: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React'] },
  { category: 'Backend', technologies: ['Node.js', 'Express.js', 'Firebase', 'PHP'] },
  { category: 'Tools', technologies: ['VS Code', 'Ionic CLI', 'Cordova CLI', 'Figma'] },
  { category: 'Cloud', technologies: ['AWS', 'Firebase', 'Azure', 'Google Cloud'] },
  { category: 'Testing', technologies: ['Jest', 'Cypress', 'Appium', 'BrowserStack'] }
];
