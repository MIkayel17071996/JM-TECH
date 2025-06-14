// src/data/uxResearchStrategyData.js

/**
 * UX Research & Strategy services data
 * @typedef {Object} UXService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 */
export const uxResearchStrategyServices = [
  {
    id: 'ux-research',
    icon: '🔍',
    title: 'UX Research',
    description:
      'Uncover deep insights into user behavior through comprehensive research methods, ensuring your product is designed with the user at its core.',
  },
  {
    id: 'user-interviews',
    icon: '🗣️',
    title: 'User Interviews',
    description:
      'Conduct in-depth interviews to reveal user needs, pain points, and motivations, driving actionable insights for user-centric design.',
  },
  {
    id: 'usability-testing',
    icon: '🖱️',
    title: 'Usability Testing',
    description:
      'Test your product’s usability to identify friction points, ensuring intuitive and seamless experiences across all platforms.',
  },
  {
    id: 'ux-strategy',
    icon: '📊',
    title: 'UX Strategy',
    description:
      'Craft a data-driven UX strategy aligned with business goals, creating engaging and effective user experiences.',
  },
  {
    id: 'persona-development',
    icon: '👥',
    title: 'Persona Development',
    description:
      'Develop detailed user personas based on research to guide design decisions and resonate with your target audience.',
  },
  {
    id: 'prototyping-wireframing',
    icon: '✍️',
    title: 'Prototyping & Wireframing',
    description:
      'Create interactive prototypes and wireframes to visualize user flows and validate design concepts early in the process.',
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
    icon: '🌟',
    title: 'User-Centric Innovation',
    description:
      'We prioritize user needs, leveraging research to create intuitive and impactful experiences that drive engagement.',
  },
  {
    icon: '📈',
    title: 'Data-Driven Decisions',
    description:
      'Our strategies are backed by robust research and analytics, ensuring alignment with business and user goals.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Approach',
    description:
      'We partner closely with your team to translate insights into designs that resonate with your audience.',
  },
];

/**
 * UX Research & Strategy process steps
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */
export const processSteps = [
  {
    icon: '🔍',
    title: '1. Research & Discovery',
    description: 'Conduct user research to understand behaviors, needs, and goals.',
  },
  {
    icon: '📝',
    title: '2. Analysis & Insights',
    description: 'Analyze data to uncover actionable insights and define user personas.',
  },
  {
    icon: '✍️',
    title: '3. Prototyping & Wireframing',
    description: 'Create wireframes and prototypes to visualize and test user flows.',
  },
  {
    id: 'usability-testing',
    icon: '🖱️',
    title: '4. Usability Testing',
    description: 'Test designs with real users to identify and resolve usability issues.',
  },
  {
    icon: '📊',
    title: '5. Strategy Development',
    description: 'Develop a UX strategy aligned with research findings and business objectives.',
  },
  {
    icon: '🚀',
    title: '6. Implementation & Support',
    description: 'Support design implementation and provide ongoing optimization.',
  },
];

/**
 * UX technology stack data
 * @typedef {Object} TechStackCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies in the category
 */
export const uxTechStack = [
  {
    category: 'Research Tools',
    technologies: ['Miro', 'Lookback', 'UserTesting', 'Hotjar'],
  },
  {
    category: 'Design Tools',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision'],
  },
  {
    category: 'Analytics',
    technologies: ['Google Analytics', 'Mixpanel', 'Amplitude'],
  },
  {
    category: 'Collaboration',
    technologies: ['Slack', 'Jira', 'Trello'],
  },
];