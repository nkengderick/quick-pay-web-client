import React, { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed with email:', email);
    };

    return (
        <div className="bg-gradient-to-r from-darkblue to-darkcyan p-6 rounded-lg shadow-md text-center max-w-md mx-auto md:max-w-full">
            <h3 className="text-xl font-bold text-gold mb-2">SUBSCRIBE OUR NEWSLETTER</h3>
            <p className="text-sm text-lightgray mb-4">Get latest News and Updates</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-2">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={handleChange}
                    className="w-full md:w-2/3 p-3 rounded-full border border-gray-300 focus:outline-none focus:border-gold text-black"
                    required
                />
                <button
                    type="submit"
                    className="bg-gold text-white font-semibold p-3 rounded-full w-full md:w-auto mt-2 md:mt-0 md:ml-2"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
