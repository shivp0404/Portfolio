import React, { useState } from 'react';
import axios from 'axios'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Get form values from formData state
    const { name, email, message } = formData;
  
    try {
      const response = await fetch('http://localhost:5000/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }), // Send only relevant data
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        }); // Clear form after successful submission
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form.');
    }
  };
  
  

  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <h2 className="text-4xl font-extrabold  text-center mb-12">Contact Me</h2>
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          {isSubmitted && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6 text-center">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg  font-semibold text-gray-200">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 w-full text-gray-700 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg  font-semibold text-gray-200">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 w-full p-4 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg  font-semibold text-gray-200">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 w-full p-4 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
