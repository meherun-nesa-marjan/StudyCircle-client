import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';

const FeatureSection = () => {
    return (
        <div>
            <div class="py-16 bg-[#B1E3D5] dark:bg-gray-900  dark:text-white">
                <div class="max-w-7xl mx-auto text-center">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-8">Why Choose Study Circle?</h2>
                    <h2 className='text-xl lg:text-2xl font-bold'>Our Feature</h2>
                    <p className='text-xl mb-5'>This application is your ultimate solution for managing assignments effectively.</p>
                   
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                            <p className='place-items-center mb-2'><FaHandshake className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4">Secure Authentication</h3>
                            <p>Log in with confidence using JWT-based authentication and Google Sign-In.</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                        <p className='place-items-center mb-2'><GrUserManager className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4">Effortless Assignment Management</h3>
                            <p>Filter by difficulty, search assignments, and track submission status in real time.</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                        <p className='place-items-center mb-2'><GrUserManager className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4"> Assignment Submission Status</h3>
                            <p>Allow students to view their submission status</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                        <p className='place-items-center mb-2'><GrUserManager className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4">Dark Mode Support</h3>
                            <p>Add a toggle for light/dark mode to enhance user experience.</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                        <p className='place-items-center mb-2'><GrUserManager className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4">Dark Mode Support</h3>
                            <p>Add a toggle for light/dark mode to enhance user experience.</p>
                        </div>
                        <div class="p-6 bg-white dark:bg-gray-700  dark:text-white shadow-md rounded-lg">
                        <p className='place-items-center mb-2'><GrUserManager className='font-bold text-4xl' /></p>
                            <h3 class="text-xl font-semibold mb-4">Feedback Analytics</h3>
                            <p> Generate insights from teacher feedback, highlighting areas for improvement.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeatureSection;