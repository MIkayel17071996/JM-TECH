import { useState, useCallback } from 'react';

/**
 * Custom hook for managing section navigation state and interactions
 * @returns {Object} Object containing activeSection, handleSectionChange, and handleKeyDown
 */
const useSectionNavigation = () => {
  const [activeSection, setActiveSection] = useState('');

  /**
   * Handles section activation for service cards
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleSectionChange = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  /**
   * Handles keyboard events for accessibility
   * @param {React.KeyboardEvent} event - The keyboard event
   * @param {string} sectionId - The ID of the section to activate
   */
  const handleKeyDown = useCallback(
    (event, sectionId) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleSectionChange(sectionId);
      }
    },
    [handleSectionChange],
  );

  return { activeSection, handleSectionChange, handleKeyDown };
};

export default useSectionNavigation;