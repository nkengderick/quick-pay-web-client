"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiHome } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Custom404 = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
            <div className="mb-8">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
                <button
                    onClick={handleGoHome}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    <FiHome className="mr-2" />
                    Go to Homepage
                </button>
            </div>

            <div className="flex justify-center mb-12">
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                    <FaFacebookF />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                    <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                    <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white mx-2">
                    <FaLinkedinIn />
                </a>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
                <p>&copy; 2024 QuickPay by King's Digital. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Custom404;
