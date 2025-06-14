/**
 * Automation Testing services data
 * @typedef {Object} AutomationTestingService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
 */
export const automationTestingServices = [
  {
    id: 'automation-testing',
    icon: '🤖',
    title: 'Automation Testing',
    description: 'Streamline your QA process and boost efficiency with our expert automation testing services. We design and implement robust automation frameworks, significantly reducing manual effort and accelerating release cycles.',
  },
  {
    id: 'test-automation-framework',
    icon: '🛠️',
    title: 'Test Automation Framework Development',
    description: 'Develop custom, scalable, and maintainable automation frameworks using industry-leading tools like Selenium, Cypress, and Appium, precisely tailored to meet your project’s unique requirements and long-term goals.',
  },
  {
    id: 'automated-functional-testing',
    icon: '✅',
    title: 'Automated Functional Testing',
    description: 'Ensure your application\'s functionality performs flawlessly across all features and user workflows with our comprehensive automated functional testing. We validate behavior to guarantee consistent and reliable performance.',
  },
  {
    id: 'automated-performance-testing',
    icon: '⚡',
    title: 'Automated Performance Testing',
    description: 'Validate your application\'s stability and responsiveness under various loads. We conduct automated performance, load, and stress tests using powerful tools like JMeter and Gatling, ensuring optimal performance even during peak traffic.',
  },
  {
    id: 'ci-testing',
    icon: '🔄',
    title: 'Continuous Integration Testing',
    description: 'Integrate automated tests seamlessly into your CI/CD pipelines using platforms like Jenkins, GitLab CI, and GitHub Actions. This proactive approach allows for early detection of issues, ensuring rapid, reliable, and high-quality deployments.',
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
    title: 'Efficiency & Speed',
    description: 'Our automation cuts manual effort, speeds up testing cycles, and accelerates your time-to-market with reliable results.',
  },
  {
    icon: '📈',
    title: 'Scalable Solutions',
    description: 'We build frameworks that scale with your needs, supporting growth and ensuring consistent quality across projects.',
  },
  {
    icon: '🎯',
    title: 'Precision & Reliability',
    description: 'Rigorous automated tests deliver precise, repeatable outcomes, minimizing errors and boosting confidence in your software.',
  },
];

/**
 * Automation Testing technology stack data
 * @typedef {Object} TechStackCategory
 * @property {string} category - Technology category name
 * @property {string[]} technologies - List of technologies in the category
 */
export const automationTechStack = [
  {
    category: 'Test Automation',
    technologies: ['Selenium', 'Cypress', 'Appium', 'Playwright'],
  },
  {
    category: 'Performance Testing',
    technologies: ['JMeter', 'Gatling', 'k6'],
  },
  {
    category: 'Test Management',
    technologies: ['TestRail', 'Qase', 'Zephyr'],
  },
  {
    category: 'Mobile Testing',
    technologies: ['Appium', 'Detox', 'Espresso', 'XCUITest'],
  },
  {
    category: 'CI/CD Integration',
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'],
  },
  {
    category: 'Reporting & Analytics',
    technologies: ['Allure', 'ReportPortal', 'Custom Dashboards'],
  },
];