// src/data/manualTestingData.js

/**
 * @typedef {Object} Service
 * @property {string} id - Unique identifier for the service.
 * @property {string} icon - Emoji or icon representing the service.
 * @property {string} title - Title of the manual testing service.
 * @property {string} description - Description explaining the service.
 */

/**
 * @typedef {Object} WhyChooseItem
 * @property {string} icon - Emoji or icon representing the reason.
 * @property {string} title - Reason title.
 * @property {string} description - Description for why to choose JM TECH.
 */

/**
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji or icon for the step.
 * @property {string} title - Title of the process step.
 * @property {string} description - Detailed explanation of the step.
 */

/**
 * Array of manual testing services offered by JM TECH.
 * @type {Service[]}
 */
export const manualTestingServices = [
  {
    id: 'manual-testing',
    icon: '🧑‍💻',
    title: 'Manual Testing',
    description:
      'Ensure flawless functionality with our meticulous manual testing services. Our expert testers thoroughly validate your application to identify defects and deliver a seamless user experience.',
  },
  {
    id: 'functional-testing',
    icon: '✅',
    title: 'Functional Testing',
    description:
      'Verify that every feature of your application works as intended. Our detailed functional testing covers user workflows, edge cases, and business requirements to ensure robust performance.',
  },
  {
    id: 'usability-testing',
    icon: '🖱️',
    title: 'Usability Testing',
    description:
      'Enhance user satisfaction with our usability testing services. We evaluate your application’s interface, navigation, and overall experience to ensure it’s intuitive and user-friendly.',
  },
  {
    id: 'regression-testing',
    icon: '🔍',
    title: 'Regression Testing',
    description:
      'Safeguard your application’s stability with comprehensive regression testing. We verify that new updates or changes haven’t impacted existing functionalities, ensuring consistent quality.',
  },
  {
    id: 'exploratory-testing',
    icon: '🕵️',
    title: 'Exploratory Testing',
    description:
      'Uncover hidden defects with our exploratory testing approach. Our testers leverage creativity and critical thinking to simulate real-world usage and identify issues missed by automated scripts.',
  },
];

/**
 * Array of reasons to choose JM TECH for manual testing.
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🧠',
    title: 'Expert Human Insight',
    description:
      'Our skilled testers bring human judgment and intuition to catch nuanced issues automation can miss, ensuring top-quality results.',
  },
  {
    icon: '🔧',
    title: 'Tailored Testing Approach',
    description:
      'We customize our manual testing strategies to your project’s unique needs, delivering precise and effective quality assurance.',
  },
  {
    icon: '🌟',
    title: 'User-Focused Quality',
    description:
      'We prioritize real-world usability and functionality, testing from the user’s perspective to enhance satisfaction and engagement.',
  },
];

/**
 * Array of manual testing process steps.
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Requirement Analysis',
    description:
      'We study your project goals and specifications to design a tailored manual testing plan.',
  },
  {
    icon: '📝',
    title: '2. Test Planning',
    description:
      'Crafting detailed test cases and scenarios to cover all critical aspects of your application.',
  },
  {
    icon: '🧑‍💻',
    title: '3. Test Execution',
    description:
      'Our testers meticulously execute manual tests, exploring functionality, usability, and more.',
  },
  {
    icon: '🔍',
    title: '4. Defect Reporting',
    description:
      'We document and prioritize issues with clear, actionable insights for swift resolution.',
  },
  {
    icon: '✅',
    title: '5. Validation & Retesting',
    description:
      'We verify fixes and retest to ensure your application meets quality standards.',
  },
  {
    icon: '🚀',
    title: '6. Delivery & Support',
    description:
      'Final quality reports and ongoing support to maintain excellence post-launch.',
  },
];
