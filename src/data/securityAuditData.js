/**
 * Security Audit data
 * @typedef {Object} SecurityAuditService
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
 * Security audit services offered
 * @type {SecurityAuditService[]}
 */
export const securityAuditServices = [
  {
    id: 'security-audit',
    icon: '🔒',
    title: 'Security Audit',
    description:
      'Conduct comprehensive security audits to identify vulnerabilities and ensure your application meets the highest standards of protection and compliance.',
  },
  {
    id: 'vulnerability-assessment',
    icon: '🔍',
    title: 'Vulnerability Assessment',
    description:
      'Perform detailed assessments to detect and prioritize potential security risks, providing actionable insights to strengthen your application’s defenses.',
  },
  {
    id: 'penetration-testing',
    icon: '🛡️',
    title: 'Penetration Testing',
    description:
      'Simulate real-world cyber attacks to test your application’s resilience, identifying weaknesses and ensuring robust security measures are in place.',
  },
  {
    id: 'compliance-audit',
    icon: '📜',
    title: 'Compliance Audit',
    description:
      'Ensure your application adheres to industry standards and regulations like GDPR, HIPAA, or PCI-DSS through thorough compliance audits.',
  },
  {
    id: 'secure-code-review',
    icon: '💻',
    title: 'Secure Code Review',
    description:
      'Analyze your codebase for security flaws, ensuring secure coding practices are followed to protect against exploits and vulnerabilities.',
  },
];

/**
 * Reasons to choose JM TECH for security audits
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🛡️',
    title: 'Comprehensive Protection',
    description:
      'We cover all aspects of your application, from code to infrastructure, to ensure robust security against threats.',
  },
  {
    icon: '📊',
    title: 'Regulatory Compliance',
    description:
      'Our audits align with standards like GDPR, HIPAA, and PCI-DSS, ensuring your app meets legal and industry requirements.',
  },
  {
    icon: '🔍',
    title: 'Actionable Insights',
    description:
      'We provide clear, prioritized recommendations to address vulnerabilities and enhance your security posture.',
  },
];

/**
 * Security audit process steps
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Scope Definition',
    description: 'We analyze your application to define audit scope and objectives.',
  },
  {
    icon: '🔍',
    title: '2. Vulnerability Scanning',
    description: 'Using advanced tools, we scan for security weaknesses in your systems.',
  },
  {
    icon: '🛡️',
    title: '3. Penetration Testing',
    description: 'We simulate attacks to test defenses and identify exploitable vulnerabilities.',
  },
  {
    icon: '📜',
    title: '4. Compliance & Code Review',
    description: 'We audit for regulatory compliance and analyze code for security flaws.',
  },
  {
    icon: '✅',
    title: '5. Remediation Guidance',
    description: 'We provide actionable recommendations to address identified issues.',
  },
  {
    icon: '🚀',
    title: '6. Validation & Reporting',
    description: 'We verify fixes and deliver detailed reports for ongoing security.',
  },
];