// src/data/webDevelopmentData.js

/**
 * Web development services data
 * @typedef {Object} WebService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 */
export const webServices = [
  {
    id: 'front-end',
    icon: '🎨',
    title: 'Front-End Development',
    description:
      'Create engaging and responsive user interfaces that captivate your audience. Using modern frameworks like React, Vue.js, and Angular, we deliver pixel-perfect, accessible, and seamless web experiences optimized for user engagement and performance across all devices.',
  },
  {
    id: 'back-end',
    icon: '⚙️',
    title: 'Back-End Development',
    description:
      'Power your web applications with robust, secure, and scalable server-side solutions. Our expertise in Node.js, Python (Django/Flask), and Java ensures high-performance APIs, efficient database management, and resilient architectures tailored to your business needs.',
  },
  {
    id: 'full-stack',
    icon: '🌐',
    title: 'Full-Stack Development',
    description:
      'Experience seamless end-to-end web solutions from a unified team. Our full-stack developers combine captivating front-end designs with powerful back-end systems, delivering high-performing, maintainable applications that cover all aspects of your web project.',
  },
  {
    id: 'cms-e-commerce',
    icon: '🛒',
    title: 'CMS & E-commerce Development',
    description:
      'Empower your online presence with user-friendly CMS and e-commerce platforms. We build custom solutions using WordPress, Shopify, Magento, or bespoke systems, giving you full control over content management and sales with seamless functionality.',
  },
  {
    id: 'api-integration',
    icon: '🔌',
    title: 'API Development & Integration',
    description:
      'Enhance your web applications with secure and efficient APIs. We design and integrate APIs to connect your services with third-party platforms or mobile apps, enabling smooth data exchange and expanding your digital ecosystem’s capabilities.',
  },
  {
    id: 'web-security',
    icon: '🔒',
    title: 'Web Security & Performance Optimization',
    description:
      'Safeguard your web assets with advanced security measures and optimize for blazing-fast performance. We conduct vulnerability assessments, implement robust protections, and enhance speed to ensure a secure, reliable, and smooth user experience.',
  },
];

/**
 * Web technology stack data
 * @typedef {Object} TechStackCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies in the category
 */
export const webTechStack = [
  {
    category: 'Front-End',
    technologies: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Back-End',
    technologies: ['Node.js', 'Python (Django, Flask)', 'Java (Spring Boot)', 'PHP (Laravel)', '.NET'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    category: 'CMS & E-commerce',
    technologies: ['WordPress', 'Shopify', 'Magento', 'WooCommerce'],
  },
  {
    category: 'UI/UX Tools',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
  },
];

/**
 * Why choose JM TECH data
 * @typedef {Object} WhyChooseItem
 * @property {string} icon - Emoji icon for the item
 * @property {string} title - Item title
 * @property {string} description - Item description
 */
export const whyChooseItems = [
  {
    icon: '🚀',
    title: 'Cutting-Edge Technologies',
    description:
      'We leverage the latest frameworks and tools to build modern, efficient, and future-ready web applications that stay ahead of industry trends.',
  },
  {
    icon: '📈',
    title: 'Performance & Scalability',
    description:
      'Our solutions are engineered for speed and scalability, ensuring your web application handles growth and high traffic with ease.',
  },
  {
    icon: '🎯',
    title: 'User-Centric Design',
    description:
      'We prioritize intuitive navigation, engaging visuals, and accessibility to create web experiences that delight users and boost engagement.',
  },
];

/**
 * Web development process steps
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Discovery & Strategy',
    description: 'Understanding your goals, audience, and technical requirements to lay a solid foundation.',
  },
  {
    icon: '🎨',
    title: '2. UI/UX Design',
    description: 'Crafting intuitive and visually appealing interfaces through wireframes and prototypes.',
  },
  {
    icon: '👨‍💻',
    title: '3. Development & Coding',
    description: 'Building robust front-end and back-end systems with clean, scalable code.',
  },
  {
    icon: '✅',
    title: '4. Testing & QA',
    description: 'Rigorous testing to ensure flawless performance across devices and browsers.',
  },
  {
    icon: '🚀',
    title: '5. Deployment & Launch',
    description: 'Seamless deployment to live servers with essential configurations.',
  },
  {
    icon: '📈',
    title: '6. Maintenance & Optimization',
    description: 'Ongoing support, updates, and performance enhancements to keep your app thriving.',
  },
];