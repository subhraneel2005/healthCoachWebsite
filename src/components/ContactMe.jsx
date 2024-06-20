import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-100 py-12 px-6 text-gray-800">
      <h1 className="text-5xl font-bold mb-8">Contact Me</h1>
      <div className="w-full md:w-1/2 flex flex-col items-center bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch with Jessica</h2>
        <div className="flex items-center mb-4 w-full">
          <FaPhoneAlt className="text-green-500 text-2xl mr-4" />
          <p className="text-lg">+1 234 567 890</p>
        </div>
        <div className="flex items-center mb-4 w-full">
          <FaEnvelope className="text-green-500 text-2xl mr-4" />
          <p className="text-lg">jessica.healthcoach@example.com</p>
        </div>
        <div className="flex items-center mb-4 w-full">
          <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
          <p className="text-lg">123 Wellness Street, Healthy City, HC 12345</p>
        </div>
        <form className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-3 border border-gray-900 bg-transparent rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-3 border border-gray-900 bg-transparent rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-3 border border-gray-900 bg-transparent rounded-lg h-32"
          />
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
