"use client"
import React, { useState } from 'react';
import { contactUsData } from '@/data';

const ContactUsForm = () => {
    const [formData, setFormData] = useState(
        contactUsData.fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {} as Record<string, string>)
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
            <h3 className="text-lg font-semibold mb-6">{contactUsData.title}</h3>
            <p className="mb-6">{contactUsData.description}</p>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {contactUsData.fields.map((field, index) => (
                        <div key={index} className={field.type === 'textarea' ? "col-span-2" : ""}>
                            <label htmlFor={field.name} className="block mb-2">{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
                                    rows={4}
                                    required={field.required}
                                ></textarea>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
                                    required={field.required}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 rounded hover:bg-yellow-600 transition duration-300"
                >
                    {contactUsData.submitButtonText}
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;
