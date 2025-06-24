import React, { memo } from 'react';

/**
 * ServiceCard component
 * Displays a single web service with an icon, title, and description.
 * Supports active state and interactive hover effects.
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the service
 * @param {string} props.icon - Emoji icon for the service
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {boolean} props.isActive - Whether the card is active
 * @param {function} [props.onClick] - Optional callback for click events, receives the service id
 * @param {string} [props.aria-label] - Optional ARIA label for accessibility (defaults to "Details about {title}")
 * @returns {JSX.Element} The rendered component
 */
const ServiceCard = ({
  id,
  icon,
  title,
  description,
  isActive,
  onClick,
  'aria-label': ariaLabel = `Details about ${title}`,
}) => {
  /**
   * Handles click and keyboard events to trigger the onClick callback
   * @param {React.MouseEvent | React.KeyboardEvent} event - The event object
   */
  const handleInteraction = (event) => {
    if (onClick && (event.type === 'click' || event.key === 'Enter' || event.key === ' ')) {
      onClick(id);
    }
  };

  return (
    <div
      className={`group relative bg-transparent border border-yellow-500/20 p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300 flex flex-col max-w-xs sm:max-w-sm ${
        isActive ? 'border-yellow-500 ring-2 ring-yellow-300' : ''
      }`}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"
        aria-hidden="true"
      ></div>
      <h3
        className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 flex items-center"
        style={{ wordBreak: 'break-word' }}
      >
        <span className="text-xl sm:text-2xl mr-1">{icon}</span> {title}
      </h3>
      <p
        className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow"
        style={{ wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}
      >
        {description}
      </p>
    </div>
  );
};

export default memo(ServiceCard);