import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Jessica</h2>
          <p>
            Jessica is a certified health coach dedicated to helping individuals achieve their wellness goals through personalized coaching and support.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#about" className="hover:underline">About Me</a></li>
            <li className="mb-2"><a href="#services" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Phone:</strong> +1 234 567 890</p>
          <p className="mb-2"><strong>Email:</strong> jessica.healthcoach@example.com</p>
          <p className="mb-2"><strong>Address:</strong> 123 Wellness Street, Healthy City, HC 12345</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-gray-300 hover:text-white"><FaFacebookF size={20} /></a>
            <a href="https://www.twitter.com" className="text-gray-300 hover:text-white"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com" className="text-gray-300 hover:text-white"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Jessicas Health Coaching. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
