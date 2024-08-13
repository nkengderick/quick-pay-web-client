import Hero from '@/components/hero-card/HeroCard'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const ComingSoon = () => {
    return (
        <div>
            <Hero
                header="Coming Soon"
                description="We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient."
                primaryButtonLink="/"
                primaryButtonText="Back to Home"
                imageUrl="https://picsum.photos/500/500?random=$100"
            />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
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
        </div>
    )
}

export default ComingSoon