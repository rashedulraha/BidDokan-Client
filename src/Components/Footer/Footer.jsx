import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">SmartDeals</h2>
            <p className="mb-6">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  Groceries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-blue-800">
          {/* Contact & Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-300" />
                <span>support@Smartdeals.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-300" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-blue-300" />
                <span>123 Commerce Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-blue-800 text-center">
          <p>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
