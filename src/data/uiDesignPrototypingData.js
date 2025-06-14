// src/data/uiDesignPrototypingData.js

/**
 * UI Design & Prototyping services data
 * @typedef {Object} UIService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 */
export const uiDesignPrototypingServices = [
  {
    id: 'ui-design',
    icon: '🎨',
    title: 'UI Design',
    description:
      'Create visually stunning and user-friendly interfaces that enhance user engagement and align with your brand’s identity, ensuring a seamless experience across all devices.',
  },
  {
    id: 'prototyping',
    icon: '🖌️',
    title: 'Prototyping',
    description:
      'Develop interactive prototypes to visualize and test your product’s functionality and flow, enabling early feedback and iterative improvements before development.',
  },
  {
    id: 'wireframing',
    icon: '📐',
    title: 'Wireframing',
    description:
      'Craft detailed wireframes to outline your application’s structure and layout, providing a clear blueprint for design and development teams to follow.',
  },
  {
    id: 'design-systems',
    icon: '🛠️',
    title: 'Design Systems',
    description:
      'Build scalable and consistent design systems to streamline UI development, ensuring uniformity across your application and faster design iterations.',
  },
  {
    id: 'user-flow-design',
    icon: '🚶',
    title: 'User Flow Design',
    description:
      'Design intuitive user flows to guide users through your application effortlessly, optimizing navigation and enhancing overall user satisfaction.',
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
    icon: '🎨',
    title: 'Visually Stunning Designs',
    description:
      'Our UI designs combine aesthetics and functionality to create engaging interfaces that captivate users and reflect your brand.',
  },
  {
    icon: '🔄',
    title: 'Iterative Prototyping',
    description:
      'We use rapid prototyping to test and refine designs early, reducing development costs and ensuring user satisfaction.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Workflow',
    description:
      'We work closely with your team to align designs with your vision, ensuring seamless integration and stakeholder approval.',
  },
];

/**
 * UI Design & Prototyping process steps
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */
export const processSteps = [
  {
    icon: '🔍',
    title: '1. Requirement Gathering',
    description: 'Understand project goals, user needs, and brand guidelines to define design objectives.',
  },
  {
    icon: '📝',
    title: '2. Wireframing',
    description: 'Create low-fidelity wireframes to map out structure and layout.',
  },
  {
    icon: '✍️',
    title: '3. Prototyping',
    description: 'Develop interactive prototypes to test functionality and user flows.',
  },
  {
    icon: '🖌️',
    title: '4. UI Design',
    description: 'Craft high-fidelity designs with consistent branding and intuitive interfaces.',
  },
  {
    icon: '🧪',
    title: '5. User Testing',
    description: 'Conduct usability testing to validate designs and gather feedback.',
  },
  {
    icon: '🚀',
    title: '6. Handoff & Support',
    description: 'Deliver assets to developers and provide ongoing design support.',
  },
];

/**
 * UI technology stack data
 * @typedef {Object} TechStackCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies in the category
 */
export const uiTechStack = [
  {
    category: 'Design Tools',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision'],
  },
  {
    category: 'Prototyping',
    technologies: ['Framer', 'Proto.io', 'Marvel'],
  },
  {
    category: 'Collaboration',
    technologies: ['Zeplin', 'Slack', 'Jira'],
  },
];