/**
 * Performance Audit data
 * @typedef {Object} PerformanceAuditService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 *
 * @typedef {Object} WhyChooseItem
 * @property {string} id - Unique identifier for the item
 * @property {string} icon - Emoji icon for the item
 * @property {string} title - Item title
 * @property {string} description - Item description
 *
 * @typedef {Object} ProcessStep
 * @property {string} id - Unique identifier for the step
 * @property {string} icon - Emoji icon for the step
 * @property {string} title - Step title
 * @property {string} description - Step description
 */

/**
 * Performance audit services offered
 * @type {PerformanceAuditService[]}
 */
export const performanceAuditServices = [
  {
    id: 'performance-audit',
    icon: '⚡',
    title: 'Performance Audit',
    description:
      'Identify bottlenecks and optimize your application’s speed with our comprehensive performance audit services, ensuring a fast and responsive user experience.',
  },
  {
    id: 'load-testing',
    icon: '📈',
    title: 'Load Testing',
    description:
      'Simulate high-traffic scenarios to assess your application’s performance under stress, identifying limits and ensuring scalability for peak usage.',
  },
  {
    id: 'frontend-optimization',
    icon: '🖥️',
    title: 'Frontend Optimization',
    description:
      'Enhance your application’s frontend performance by optimizing assets, reducing render times, and improving user interface responsiveness across devices.',
  },
  {
    id: 'backend-optimization',
    icon: '⚙️',
    title: 'Backend Optimization',
    description:
      'Streamline your backend processes, database queries, and server performance to ensure efficient data handling and reduced latency for your application.',
  },
  {
    id: 'performance-monitoring',
    icon: '📊',
    title: 'Performance Monitoring',
    description:
      'Implement continuous monitoring to track your application’s performance metrics, enabling proactive optimization and consistent user satisfaction.',
  },
];

/**
 * Reasons to choose JM TECH for performance audits
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    id: 'speed-efficiency',
    icon: '🚀',
    title: 'Speed & Efficiency',
    description:
      'We optimize every layer of your application to deliver lightning-fast performance and a seamless user experience.',
  },
  {
    id: 'scalable-solutions',
    icon: '📊',
    title: 'Scalable Solutions',
    description:
      'Our audits ensure your app can handle growth and peak traffic without compromising reliability or speed.',
  },
  {
    id: 'proactive-insights',
    icon: '🔍',
    title: 'Proactive Insights',
    description:
      'We provide actionable recommendations and continuous monitoring to maintain optimal performance over time.',
  },
];

/**
 * Performance audit process steps
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    id: 'performance-analysis',
    icon: '💡',
    title: '1. Performance Analysis',
    description: 'We assess your app’s current performance to identify bottlenecks and inefficiencies.',
  },
  {
    id: 'audit-planning',
    icon: '📝',
    title: '2. Audit Planning',
    description: 'Crafting a tailored plan for load testing, optimization, and monitoring.',
  },
  {
    id: 'detailed-testing',
    icon: '🔍',
    title: '3. Detailed Testing',
    description: 'We conduct load tests and analyze frontend and backend performance metrics.',
  },
  {
    id: 'optimization',
    icon: '⚙️',
    title: '4. Optimization',
    description: 'We refine assets, queries, and code to boost speed and scalability.',
  },
  {
    id: 'validation-retesting',
    icon: '✅',
    title: '5. Validation & Retesting',
    description: 'We verify improvements and retest to ensure optimal performance.',
  },
  {
    id: 'monitoring-reporting',
    icon: '🚀',
    title: '6. Monitoring & Reporting',
    description: 'Ongoing monitoring setup and detailed reports for sustained efficiency.',
  },
];
