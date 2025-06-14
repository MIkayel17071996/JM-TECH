/**
 * ErrorBoundary component
 * Catches JavaScript errors in child components and displays a fallback UI.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The rendered component or fallback UI
 */
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20 text-white bg-[#0D0D0D] min-h-screen flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Something Went Wrong</h2>
          <p className="text-gray-300 mb-6">Please try refreshing the page or contact support.</p>
          <a
            href="/contact"
            className="text-yellow-400 hover:text-yellow-500 underline"
            aria-label="Contact Support"
          >
            Contact Support
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;