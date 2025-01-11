import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            At StudyCircle, we are passionate about helping students achieve their full potential. Our platform is designed to help you stay on top of your assignments, manage deadlines, and collaborate with your peers in an engaging, easy-to-use environment. Whether you’re in high school, college, or university, StudyCircle is here to support your learning journey.
        </p>
        <div className="flex justify-center items-center gap-10">
            <div className="w-1/3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Our mission is to provide students with the tools they need to manage their studies and academic life effectively. We aim to simplify learning by offering a platform where students can organize assignments, track progress, and connect with others.
                </p>
            </div>
            <div className="w-1/3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Our vision is to be the go-to platform for students worldwide, enabling them to learn more efficiently and stay ahead of deadlines. We envision a world where students are empowered to reach their academic goals with ease and confidence.
                </p>
            </div>
            <div className="w-1/3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    At StudyCircle, we believe in innovation, collaboration, and perseverance. Our platform is built on the values of trust, transparency, and dedication to student success. We are committed to creating an inclusive and supportive learning environment.
                </p>
            </div>
        </div>
        <div className="mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
                Join us on this journey and become part of a growing community of students who are redefining the way we learn and collaborate.
            </p>
        </div>
    </div>
</section>

        </div>
    );
};

export default About;