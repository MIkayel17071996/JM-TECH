/**
 * Service category data
 * @typedef {Object} ServiceCategory
 * @property {string} id - Unique identifier for the category
 * @property {string} title - Category title
 * @property {string} description - Category description
 * @property {SubService[]} subServices - List of sub-services
 *
 * @typedef {Object} SubService
 * @property {string} id - Unique identifier for the sub-service
 * @property {string} title - Sub-service title
 * @property {string} description - Sub-service description
 */
export const serviceCategories = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description:
      'We craft unique software solutions designed to meet your specific business requirements, ensuring scalability, efficiency, and seamless integration across various platforms.',
    subServices: [
      {
        id: 'mobile',
        title: 'Mobile App Development 📱',
        description:
          'Build engaging and high-performance mobile applications for iOS and Android. We leverage native capabilities or cross-platform frameworks to ensure a seamless user experience and broad audience reach.',
      },
      {
        id: 'web',
        title: 'Web Development 🌐',
        description:
          'Create powerful, responsive, and secure web applications with expertise in front-end and back-end development. From dynamic user interfaces to robust server-side systems, explore our full web solutions on our dedicated page.',
      },
      {
        id: 'ecommerce-cart',
        title: 'E-Commerce Cart 🛒',
        description:
          'Develop secure and user-friendly e-commerce platforms with robust shopping cart functionalities. We build solutions that enhance the customer journey from browsing to checkout, integrating payment gateways and inventory management.',
      },
      {
        id: 'cross-platform',
        title: 'Cross-Platform Development 📲',
        description:
          'Maximize your reach across different operating systems with a single codebase. We utilize frameworks like React Native or Flutter to develop apps that perform flawlessly on both iOS and Android, saving time and resources.',
      },
      {
        id: 'hybrid',
        title: 'Hybrid App Development 🔄',
        description:
          'Combine the strengths of web technologies with native app features. Hybrid apps offer faster development cycles and broader compatibility while delivering a near-native user experience, ideal for rapid deployment.',
      },
      {
        id: 'pwa',
        title: 'Progressive Web Apps (PWA) 🖥️',
        description:
          'Provide an app-like experience directly through a web browser. PWAs are reliable, fast, and engaging, offering offline access, push notifications, and quick loading times without requiring installation from app stores.',
      },
    ],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description:
      'We transform ideas into intuitive and impactful digital products. Our design process focuses on user experience (UX) and user interface (UI) to create solutions that are not only functional but also delightful to use.',
    subServices: [
      {
        id: 'ux-research',
        title: 'UX Research & Strategy 🔍',
        description:
          'Understand your users deeply through research, persona development, and journey mapping to define product strategy and ensure user-centric design.',
      },
      {
        id: 'ui-design',
        title: 'UI Design & Prototyping 🎨',
        description:
          'Craft beautiful and functional user interfaces, developing wireframes, mockups, and interactive prototypes for seamless user interaction.',
      },
      {
        id: 'design-system',
        title: 'Design System Development 🛠️',
        description:
          'Build scalable and consistent design systems to streamline development, maintain brand consistency, and accelerate future product iterations.',
      },
    ],
  },
  {
    id: 'software-testing-qa',
    title: 'Software Testing and Quality Assurance',
    description:
      'Ensure the reliability, performance, and security of your software with our comprehensive testing services. We meticulously verify every aspect to deliver a flawless and high-quality user experience.',
    subServices: [
      {
        id: 'automation-testing',
        title: 'Automation Testing 🤖',
        description:
          'Accelerate your testing cycles and improve accuracy by automating repetitive test cases. Our experts design and implement robust automation frameworks to streamline your QA process and reduce manual effort.',
      },
      {
        id: 'manual-testing',
        title: 'Manual Testing 🖱️',
        description:
          'Discover subtle bugs, usability issues, and user experience flaws that automated tests might miss. Our skilled QA engineers conduct thorough manual tests to ensure every detail is perfect and meets user expectations.',
      },
      {
        id: 'security-testing',
        title: 'Security Testing 🔒',
        description:
          'Protect your applications from cyber threats and vulnerabilities. We perform comprehensive security audits, penetration testing, and vulnerability assessments to safeguard your data and systems against attacks.',
      },
      {
        id: 'mobile-app-testing',
        title: 'Mobile App Testing 📲',
        description:
          'Guarantee seamless performance and user experience across various mobile devices and operating systems. We conduct rigorous testing for functionality, compatibility, and performance on iOS and Android platforms.',
      },
    ],
  },
  {
    id: 'software-audit',
    title: 'Software Audit',
    description:
      'Gain a clear understanding of your software’s health, performance, and security posture. Our comprehensive software audit services identify areas for improvement, mitigate risks, and ensure compliance.',
    subServices: [
      {
        id: 'code-review',
        title: 'Code Review & Optimization 📝',
        description:
          'Analyze existing codebase for quality, efficiency, maintainability, and best practices to identify areas for optimization and refactoring.',
      },
      {
        id: 'performance-audit',
        title: 'Performance Audit ⚡',
        description:
          'Evaluate application performance, identify bottlenecks, and recommend strategies to improve speed, scalability, and responsiveness.',
      },
      {
        id: 'security-audit',
        title: 'Security Audit 🔐',
        description:
          'Conduct in-depth security assessments to uncover vulnerabilities, ensure data protection, and recommend measures to strengthen your application’s security posture.',
      },
      {
        id: 'compliance-audit',
        title: 'Compliance Audit ✅',
        description:
          'Verify adherence to industry regulations and standards (e.g., GDPR, HIPAA) to ensure your software meets necessary legal and operational requirements.',
      },
    ],
  },
];