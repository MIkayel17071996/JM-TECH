import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (showSuccessModal) {
      setShowSuccessModal(false);
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const message = "Thank you for contacting JM TECH. Your message has been successfully received, and our team will respond promptly.";
      setSuccessMessage(message);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <title>Contact | JM TECH</title>
      <div className="page py-20 px-4 font-sans antialiased bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto w-full relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 text-center tracking-tight leading-tight">
            Reach Out !
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 text-center leading-relaxed max-w-2xl mx-auto">
            Have a question, feedback, or partnership opportunity? Our team is ready to connect.
            Please fill out the form below and we'll respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-white/5 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-lg">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-white mb-2 sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-white mb-2 sr-only">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                aria-label="Email Address"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-white mb-2 sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="How can we assist you today?"
                aria-label="Your Message"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-y"
              />
            </div>

            <p className="text-xs text-gray-300 mt-2 text-center">
              By clicking «Send» you confirm that you understand and agree to our{' '}
              <Link to="/privacy-policy" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-gradient-to-r from-green-600 to-lime-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-lime-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 self-center tracking-wide min-w-[180px] shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {showSuccessModal && (
          <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-2xl shadow-xl text-center max-w-md mx-4 transform scale-95 animate-scaleIn border border-white/30">
              <svg className="w-16 h-16 text-green-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Message Successfully Submitted</h3>
              <p className="text-gray-100 mb-8 text-base leading-relaxed font-medium">{successMessage}</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-lime-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactUs;