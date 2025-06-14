/**
 * Progressive Web Apps (PWA) data
 * @typedef {Object} PWAService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 *
 * @typedef {Object} TechCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies
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
 * PWA services offered
 * @type {PWAService[]}
 */
export const pwaServices = [
  {
    id: 'pwa',
    icon: '🖥️',
    title: 'Progressive Web Apps',
    description:
      'Deliver app-like experiences through web browsers with PWAs that are fast, reliable, and engaging, offering offline access and push notifications without app store installation.',
  },
  {
    id: 'offline-functionality',
    icon: '🌐',
    title: 'Offline Functionality',
    description:
      'Enable seamless offline access using service workers and caching strategies, ensuring users can interact with your PWA without an internet connection.',
  },
  {
    id: 'push-notifications',
    icon: '📩',
    title: 'Push Notifications',
    description:
      'Engage users with timely, personalized push notifications to keep them connected and informed through your PWA.',
  },
  {
    id: 'pwa-ui-ux',
    icon: '🎨',
    title: 'PWA UI/UX Design',
    description:
      'Design responsive and intuitive interfaces optimized for PWAs, ensuring a consistent experience across browsers and devices.',
  },
  {
    id: 'pwa-testing',
    icon: '🧪',
    title: 'PWA Testing',
    description:
      'Ensure reliability with comprehensive testing of PWAs, covering functionality, compatibility, and offline capabilities across browsers.',
  },
  {
    id: 'pwa-optimization',
    icon: '⚙️',
    title: 'PWA Performance Optimization',
    description:
      'Optimize PWAs for speed and scalability with advanced caching, lazy loading, and performance tuning for seamless user experiences.',
  },
];

/**
 * PWA technology stack
 * @type {TechCategory[]}
 */
export const pwaTechStack = [
  { category: 'Frameworks', technologies: ['React', 'Angular', 'Vue.js', 'Svelte'] },
  { category: 'Frontend', technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { category: 'Service Workers', technologies: ['Workbox', 'ServiceWorker API'] },
  { category: 'Tools', technologies: ['Webpack', 'Vite', 'Lighthouse', 'Figma'] },
  { category: 'Cloud', technologies: ['AWS', 'Firebase', 'Netlify', 'Vercel'] },
  { category: 'Testing', technologies: ['Jest', 'Cypress', 'Playwright', 'Lighthouse'] },
];

/**
 * Reasons to choose JM TECH for PWAs
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🚀',
    title: 'Fast & Accessible',
    description:
      'Our PWAs deliver lightning-fast performance and accessibility, reaching users without the need for app store downloads.',
  },
  {
    icon: '🤝',
    title: 'Engaging Experiences',
    description:
      'We design PWAs with intuitive interfaces and features like push notifications to maximize user engagement.',
  },
  {
    icon: '🔒',
    title: 'Reliable & Scalable',
    description:
      'Our PWAs are built for reliability with offline capabilities and scalability to handle growing user bases.',
  },
];

/**
 * PWA development process steps
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Discovery & Strategy',
    description: 'Understanding your PWA goals, audience, and technical requirements.',
  },
  {
    icon: '🎨',
    title: '2. UI/UX Design',
    description: 'Crafting responsive and engaging interfaces for web-based apps.',
  },
  {
    icon: '👨‍💻',
    title: '3. Development',
    description: 'Building PWAs with modern frameworks and service workers.',
  },
  {
    icon: '✅',
    title: '4. Testing & QA',
    description: 'Ensuring compatibility, performance, and offline functionality across browsers.',
  },
  {
    icon: '🚀',
    title: '5. Deployment',
    description: 'Launching your PWA with optimized hosting and configurations.',
  },
  {
    icon: '📈',
    title: '6. Maintenance & Optimization',
    description: 'Providing ongoing updates, performance tuning, and enhancements.',
  },
];