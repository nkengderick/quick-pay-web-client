import React from 'react';
import { FaHome, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { contactInfo } from '@/data';

const ContactUSInfo = () => {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-yellow-500 p-8 rounded-lg shadow-md text-white">
            <h3 className="text-lg font-semibold mb-6">How Can We Help?</h3>
            <p className="mb-6">
                {contactInfo.helpText}
            </p>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <FaHome className="text-2xl mr-4" />
                    <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-center">
                    <FaPhone className="text-2xl mr-4" />
                    <span>{contactInfo.phone}</span>
                </li>
                <li className="flex items-center">
                    <FaEnvelope className="text-2xl mr-4" />
                    <span>{contactInfo.email}</span>
                </li>
                <li className="flex items-center">
                    <FaClock className="text-2xl mr-4" />
                    <span>{contactInfo.workingHours}</span>
                </li>
            </ul>
        </div>
    );
};

export default ContactUSInfo;
