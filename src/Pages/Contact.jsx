import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Contact With Us</h2>
            <form className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                    <input className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" type="text" id="name" placeholder="Your Name" />
                </div>
              
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Send us Message</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#137257] to-[#66C6AB] text-white py-3 rounded-lg font-bold text-lg shadow-md" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
