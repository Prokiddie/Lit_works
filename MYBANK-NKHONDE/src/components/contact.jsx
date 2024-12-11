import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-xl mb-8">We’d love to hear from you. Please fill out the form below to get in touch with us.</p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          ></textarea>
          <button type="submit" className="bg-green-500 text-white py-3 px-6 rounded-full">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
