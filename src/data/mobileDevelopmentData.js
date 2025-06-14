/**
 * Mobile Services Data
 * @typedef {Object} MobileService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon representing the service
 * @property {string} title - Title of the mobile service
 * @property {string} description - Description of the mobile service
 *
 * @type {MobileService[]}
 */
export const mobileServices = [
  {
    id: 'native-development',
    icon: '📱',
    title: 'Native iOS & Android Development',
    description:
      'Unlock the full potential of iOS and Android with bespoke native apps. Using Swift/Objective-C and Kotlin/Java, we deliver high-performance, feature-rich applications with seamless device integration for GPS, cameras, and notifications, ideal for complex, immersive experiences.'
  },
  {
    id: 'cross-platform',
    icon: '📲',
    title: 'Cross-Platform Development',
    description:
      'Reach broader audiences with cost-effective cross-platform apps. Leveraging React Native and Flutter, we build stunning, high-functionality apps that run smoothly on both iOS and Android from a single codebase, ensuring faster development and consistent UX.'
  },
  {
    id: 'hybrid-development',
    icon: '🔄',
    title: 'Hybrid App Development',
    description:
      'Blend web and native with efficient hybrid apps using Ionic and Cordova. Our solutions offer rapid deployment, broad compatibility, and access to device features, perfect for content-driven apps and extending web presence to mobile.'
  },
  {
    id: 'pwa-development',
    icon: '💻',
    title: 'Progressive Web Apps (PWA)',
    description:
      'Deliver app-like experiences via the web with PWAs. Our fast, reliable, and engaging solutions offer offline access, push notifications, and quick load times, combining web discoverability with native functionality for enhanced user engagement.'
  },
  {
    id: 'mobile-app-testing',
    icon: '🧪',
    title: 'Comprehensive Mobile App Testing',
    description:
      'Ensure flawless performance across devices with our rigorous testing services. Covering functionality, performance, security, and usability, we proactively resolve issues to deliver stable, secure, and user-friendly apps that meet the highest standards.'
  },
  {
    id: 'ui-ux-design',
    icon: '🎨',
    title: 'Mobile UI/UX Design & Prototyping',
    description:
      'Craft intuitive and visually stunning mobile experiences. Our user-centric design process includes wireframing, prototyping, and testing to create interfaces that are beautiful, functional, and easy to navigate, driving adoption and satisfaction.'
  }
];

/**
 * Technology Stack Category
 * @typedef {Object} TechCategory
 * @property {string} category - Name of the technology category
 * @property {string[]} technologies - Array of technologies used
 *
 * @type {TechCategory[]}
 */
export const mobileTechStack = [
  { category: 'Native Development', technologies: ['Swift', 'Objective-C', 'Kotlin', 'Java'] },
  { category: 'Cross-Platform', technologies: ['React Native', 'Flutter', 'Dart'] },
  { category: 'Hybrid Development', technologies: ['Ionic', 'Cordova', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Testing Tools', technologies: ['Appium', 'Selenium', 'TestFlight', 'Firebase Test Lab'] },
  { category: 'UI/UX Tools', technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision'] },
  { category: 'Backend & APIs', technologies: ['Node.js', 'Firebase', 'GraphQL', 'REST APIs'] }
];

/**
 * Why Choose Section Item
 * @typedef {Object} WhyChooseItem
 * @property {string} icon - Emoji icon representing the value
 * @property {string} title - Title of the benefit
 * @property {string} description - Description of the benefit
 *
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🚀',
    title: 'Innovation & Expertise',
    description: 'We leverage cutting-edge mobile technologies and best practices, with a team skilled in diverse platforms and frameworks.'
  },
  {
    icon: '🤝',
    title: 'User-Centric Design',
    description: 'Our apps prioritize intuitive UI and seamless UX, ensuring high engagement and user satisfaction.'
  },
  {
    icon: '🔒',
    title: 'Scalability & Security',
    description: 'We build robust, secure apps designed to scale with your business while prioritizing data and user privacy.'
  }
];

/**
 * Development Process Step
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon representing the process step
 * @property {string} title - Title of the process step
 * @property {string} description - Description of the process step
 *
 * @type {ProcessStep[]}
 */
export const processSteps = [
  { icon: '💡', title: '1. Discovery & Planning', description: 'Defining your vision, requirements, and project scope.' },
  { icon: '🎨', title: '2. UI/UX Design', description: 'Crafting intuitive interfaces and engaging user experiences.' },
  { icon: '👨‍💻', title: '3. Development & Coding', description: 'Bringing your app to life with clean, efficient code.' },
  { icon: '✅', title: '4. Testing & QA', description: 'Ensuring flawless performance and bug-free operation.' },
  { icon: '🚀', title: '5. Deployment & Launch', description: 'Successfully launching your app on app stores.' },
  { icon: '📈', title: '6. Post-Launch Support', description: 'Ongoing updates, support, and performance monitoring.' }
];
