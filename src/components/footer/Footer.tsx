"use client"
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Subscribe from '../subscribe-card/Subscribe';
import { contactInfo } from '@/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 lg:px-20">
          {/* Subscribe Form */}
          <div className="col-span-1 md:col-span-2">
            <Subscribe />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                <FiMail className="mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">{contactInfo.email}</a>
              </li>
              <li className="flex items-center mb-2">
                <FiPhone className="mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Platforms */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {contactInfo.socialMedia.map((social, index) => (
                <a key={index} href={social.url} className="text-gray-400 hover:text-white" aria-label={social.platform}>
                  {social.platform === "Facebook" && <FaFacebookF />}
                  {social.platform === "Twitter" && <FaTwitter />}
                  {social.platform === "Instagram" && <FaInstagram />}
                  {social.platform === "LinkedIn" && <FaLinkedinIn />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <p>&copy; 2024 QuickPay. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
            <p className="mt-4 md:mt-0 text-center md:text-right">
              Powered by <a href="#" className="hover:text-white">King's Digital</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
