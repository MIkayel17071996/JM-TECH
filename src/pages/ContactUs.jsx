import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

function ContactUs() {
  // Using the Form ID from the example that you confirmed works.
  const [state, handleSubmit] = useForm("xpwrygzr");

  // If the form submitted successfully, show the success modal.
  if (state.succeeded) {
    return (
      <div className="page py-20 px-4 font-sans antialiased bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-2xl shadow-xl text-center max-w-md mx-4 border border-white/30">
          <svg className="w-16 h-16 text-green-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Message Successfully Submitted</h3>
          <p className="text-gray-100 mb-8 text-base leading-relaxed font-medium">
            Thank you for contacting JM TECH. Your message has been received!
          </p>
          <button
            onClick={() => window.location.reload()} // Reload to show the form again
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-lime-600"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  // This is your original form with the working logic and working ID.
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
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 mt-1" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 mt-1" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="How can we assist you today?"
                className="p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-y"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 mt-1" />
            </div>

            <p className="text-xs text-gray-300 mt-2 text-center">
              By clicking «Send» you confirm that you understand and agree to our{' '}
              <Link to="/privacy-policy" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">
                Privacy Policy
              </Link>.
            </p>

            <button
              type="submit"
              disabled={state.submitting}
              className={`px-8 py-3 bg-gradient-to-r from-green-600 to-lime-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-lime-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 self-center tracking-wide min-w-[180px] shadow-md hover:shadow-lg ${state.submitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;