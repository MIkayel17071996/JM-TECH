import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <title>Contact | JM TECH</title>
      <div className="page mt-20 mb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Optional image */}
          {/* <img src="/contact-illustration.png" alt="Contact" className="mx-auto mb-8 w-40 h-auto" /> */}

          <h2 className="text-4xl font-bold text-white mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Have a question, feedback, or partnership opportunity? We'd love to hear from you.
            Please fill out the form below and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-200 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[#FBBF24] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#10B981] transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-200 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[#FBBF24] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#10B981] transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-200 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Let us know how we can help you"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[#FBBF24] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#10B981] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="increment-button mt-6 self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
