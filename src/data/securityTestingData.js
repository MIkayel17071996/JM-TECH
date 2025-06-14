/**
 * Security Testing data
 * @typedef {Object} SecurityService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon for the service
 * @property {string} title - Service title
 * @property {string} description - Service description
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
 * Security testing services offered
 * @type {SecurityService[]}
 */
export const securityTestingServices = [
  {
    id: 'security-testing',
    icon: '🔒',
    title: 'Security Testing',
    description:
      'Protect your applications with our comprehensive security testing services. We identify vulnerabilities and ensure robust defenses to safeguard your data and user trust.',
  },
  {
    id: 'penetration-testing',
    icon: '🛡️',
    title: 'Penetration Testing',
    description:
      'Simulate real-world attacks to uncover weaknesses in your application. Our penetration testing services help fortify your systems against potential threats.',
  },
  {
    id: 'vulnerability-assessment',
    icon: '🔍',
    title: 'Vulnerability Assessment',
    description:
      'Conduct thorough assessments to detect and prioritize security vulnerabilities, providing actionable insights to enhance your application’s security posture.',
  },
  {
    id: 'security-audit',
    icon: '📜',
    title: 'Security Audit',
    description:
      'Perform detailed audits of your application’s security measures to ensure compliance with industry standards and best practices, minimizing risks.',
  },
  {
    id: 'secure-code-review',
    icon: '💻',
    title: 'Secure Code Review',
    description:
      'Analyze your codebase to identify security flaws and ensure secure coding practices, delivering applications that are resilient to exploits and attacks.',
  },
];

/**
 * Reasons to choose JM TECH for security testing
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🛡️',
    title: 'Proactive Threat Detection',
    description:
      'We identify and address vulnerabilities before they can be exploited, ensuring robust protection for your applications and data.',
  },
  {
    icon: '📊',
    title: 'Compliance & Standards',
    description:
      'Our testing aligns with industry standards like OWASP, PCI-DSS, and ISO 27001, ensuring compliance and security best practices.',
  },
  {
    icon: '🔐',
    title: 'Comprehensive Security',
    description:
      'From code to infrastructure, we deliver end-to-end testing to safeguard your digital assets against evolving threats.',
  },
];

/**
 * Security testing process steps
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Threat Modeling',
    description: 'We analyze your application to identify potential threats and define testing scope.',
  },
  {
    icon: '🔍',
    title: '2. Vulnerability Scanning',
    description: 'Using advanced tools, we scan for weaknesses in your systems and code.',
  },
  {
    icon: '🛡️',
    title: '3. Penetration Testing',
    description: 'We simulate real-world attacks to test defenses and uncover exploits.',
  },
  {
    icon: '📜',
    title: '4. Audit & Analysis',
    description: 'Detailed audits assess compliance and security, with clear reports provided.',
  },
  {
    icon: '✅',
    title: '5. Remediation Support',
    description: 'We guide you through fixing issues with actionable recommendations.',
  },
  {
    icon: '🚀',
    title: '6. Validation & Reporting',
    description: 'We verify fixes and deliver comprehensive reports for ongoing security.',
  },
];