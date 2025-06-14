/**
 * E-Commerce Service
 * @typedef {Object} EcommerceService
 * @property {string} id - Unique identifier for the service
 * @property {string} icon - Emoji icon representing the service
 * @property {string} title - Title of the e-commerce service
 * @property {string} description - Description of the e-commerce service
 *
 * @type {EcommerceService[]}
 */
export const ecommerceServices = [
  {
    id: 'ecommerce-cart',
    icon: '🛒',
    title: 'E-Commerce Cart Development',
    description:
      'Build secure and user-friendly e-commerce platforms with robust shopping cart features. We enhance the customer journey from browsing to checkout, integrating payment gateways and inventory management for a seamless experience.',
  },
  {
    id: 'payment-gateway',
    icon: '💳',
    title: 'Payment Gateway Integration',
    description:
      'Seamlessly integrate secure payment gateways like Stripe, PayPal, and Square, ensuring a smooth, trustworthy checkout process that builds customer confidence.',
  },
  {
    id: 'inventory-management',
    icon: '📦',
    title: 'Inventory Management',
    description:
      'Implement efficient inventory systems to track stock, manage product variants, and automate restocking, streamlining operations for your e-commerce platform.',
  },
  {
    id: 'checkout-optimization',
    icon: '🚀',
    title: 'Checkout Optimization',
    description:
      'Optimize checkout with intuitive UI/UX, one-click purchasing, and streamlined forms to minimize cart abandonment and maximize conversions.',
  },
  {
    id: 'security-compliance',
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Ensure your platform is secure and PCI-DSS compliant with robust encryption and data protection, safeguarding customer data and transactions.',
  },
  {
    id: 'mobile-commerce',
    icon: '📱',
    title: 'Mobile Commerce Optimization',
    description:
      'Create mobile-first e-commerce experiences with responsive design, fast-loading pages, and mobile payment integrations like Apple Pay and Google Pay to capture the growing mobile shopping audience.',
  },
];

/**
 * Technology Stack Category
 * @typedef {Object} TechCategory
 * @property {string} category - Name of the technology category
 * @property {string[]} technologies - Array of technologies used
 *
 * @type {TechCategory[]}
 */
export const ecommerceTechStack = [
  { category: 'Platforms', technologies: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce'] },
  { category: 'Frontend', technologies: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { category: 'Backend', technologies: ['Node.js', 'PHP (Laravel)', 'Python (Django)', 'Ruby on Rails'] },
  { category: 'Payment Gateways', technologies: ['Stripe', 'PayPal', 'Square', 'Braintree'] },
  { category: 'Databases', technologies: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps', technologies: ['AWS', 'Docker', 'CI/CD'] },
];

/**
 * Why Choose Section Item
 * @typedef {Object} WhyChooseItem
 * @property {string} icon - Emoji icon representing the value
 * @property {string} title - Title of the benefit
 * @property {string} description - Description of the benefit
 *
 * @type {WhyChooseItem[]}
 */
export const whyChooseItems = [
  {
    icon: '🚀',
    title: 'Innovative Solutions',
    description:
      'We leverage cutting-edge technologies to build modern, scalable e-commerce platforms tailored to your business goals.',
  },
  {
    icon: '🤝',
    title: 'Customer-Centric Design',
    description:
      'Our platforms prioritize intuitive UX and seamless checkout, boosting customer satisfaction and retention.',
  },
  {
    icon: '🔒',
    title: 'Security & Reliability',
    description:
      'We ensure robust security and compliance, protecting your business and customers with reliable solutions.',
  },
];

/**
 * Development Process Step
 * @typedef {Object} ProcessStep
 * @property {string} icon - Emoji icon representing the process step
 * @property {string} title - Title of the process step
 * @property {string} description - Description of the process step
 *
 * @type {ProcessStep[]}
 */
export const processSteps = [
  {
    icon: '💡',
    title: '1. Discovery & Strategy',
    description: 'Understanding your business goals, target audience, and e-commerce requirements.',
  },
  {
    icon: '🎨',
    title: '2. UI/UX Design',
    description: 'Designing intuitive interfaces and engaging shopping experiences.',
  },
  {
    icon: '👨‍💻',
    title: '3. Development & Integration',
    description: 'Building robust platforms with integrated payment and inventory systems.',
  },
  {
    icon: '✅',
    title: '4. Testing & QA',
    description: 'Ensuring flawless performance, security, and compatibility across devices.',
  },
  {
    icon: '🚀',
    title: '5. Deployment & Launch',
    description: 'Launching your platform with optimized configurations.',
  },
  {
    icon: '📈',
    title: '6. Support & Optimization',
    description: 'Providing ongoing updates, analytics, and performance enhancements.',
  },
];
