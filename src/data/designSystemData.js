/**
 * Design System services data
 * @typedef {Object} DesignSystemService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 */
export const designSystemServices = [
  {
    id: 'design-system',
    icon: '🛠️',
    title: 'Design System Development',
    description: 'Build scalable and consistent design systems to streamline your UI development, ensuring uniformity and efficiency across your digital products.',
  },
  {
    id: 'component-library',
    icon: '🧩',
    title: 'Component Library Creation',
    description: 'Develop reusable UI component libraries that accelerate design and development, maintaining consistency and reducing redundancy in your projects.',
  },
  {
    id: 'style-guide',
    icon: '🎨',
    title: 'Style Guide Development',
    description: 'Create comprehensive style guides defining typography, colors, and visual standards, ensuring cohesive branding and design across all platforms.',
  },
  {
    id: 'design-tokens',
    icon: '📏',
    title: 'Design Tokens Implementation',
    description: 'Implement design tokens to standardize design properties, enabling seamless updates and scalability across multiple platforms and devices.',
  },
  {
    id: 'system-maintenance',
    icon: '🔧',
    title: 'Design System Maintenance',
    description: 'Provide ongoing maintenance and updates for your design system, ensuring it evolves with your product needs and industry trends.',
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
    icon: '🛠️',
    title: 'Scalable Systems',
    description: 'Our design systems are built for scalability, supporting your product’s growth across platforms and teams.',
  },
  {
    icon: '🔄',
    title: 'Consistency Guaranteed',
    description: 'We ensure uniformity in design and functionality, reducing errors and enhancing user trust.',
  },
  {
    icon: '🚀',
    title: 'Efficient Development',
    description: 'Our systems streamline workflows, enabling faster design and development cycles.',
  },
];

/**
 * Design System process steps
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */
export const processSteps = [
  {
    icon: '🔍',
    title: '1. Discovery & Planning',
    description: 'Assess project needs and define design system goals and scope.',
  },
  {
    icon: '📝',
    title: '2. Design Tokens Creation',
    description: 'Establish design tokens for colors, typography, and other properties.',
  },
  {
    icon: '🧩',
    title: '3. Component Development',
    description: 'Build reusable UI components with consistent styling and behavior.',
  },
  {
    icon: '🎨',
    title: '4. Style Guide Creation',
    description: 'Document visual and functional standards in a comprehensive style guide.',
  },
  {
    icon: '🧪',
    title: '5. Testing & Validation',
    description: 'Test components across applications to ensure reliability and consistency.',
  },
  {
    icon: '🔧',
    title: '6. Maintenance & Updates',
    description: 'Provide ongoing support to evolve the system with new requirements.',
  },
];

/**
 * Design System technology stack data
 * @typedef {Object} TechStackCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies in the category
 */
export const designTechStack = [
  {
    category: 'Design Tools',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    category: 'Component Frameworks',
    technologies: ['Storybook', 'Pattern Lab'],
  },
  {
    category: 'Version Control',
    technologies: ['Git', 'GitHub', 'Bitbucket'],
  },
  {
    category: 'Build Tools',
    technologies: ['Webpack', 'Vite'],
  },
];