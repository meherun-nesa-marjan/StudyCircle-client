import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="py-16 dark:bg-gray-900 w-11/12 mx-auto">
            <div className="">

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <div className="">
                    <img src="https://i.ibb.co.com/JjYT10wQ/2.jpg" alt="" />
                </div>
                <div className=" px-4">
                    {/* Heading */}
                    <div className="">
                        <h2 className="text-4xl font-bold text-[#137257] dark:text-white mb-6">
                            About Us
                        </h2>
                    </div>

                    {/* Description Text */}

                    <p className='py-5'>
                        At StudyCircle, we are dedicated to empowering students in their academic journey. Our mission is to create a seamless and organized platform where students can manage assignments, collaborate effectively, and stay on top of their educational goals. By combining innovative tools and a supportive community, we help students excel academically while fostering a balanced and stress-free approach to learning.
                        We envision a world where every student has the tools they need to succeed. With the growing demands of academics, students often struggle to stay organized and motivated. Our vision is to bridge that gap by providing a platform that not only helps students manage their assignments, but also allows them to collaborate, learn from each other, and thrive as part of a motivated community.

                        We want to create an environment where students can feel empowered, supported, and focused on their studies, enabling them to take charge of their learning journey.


                    </p>

                    {/* See More Button */}
                    <Link to="/AboutUs">
                        <button className="px-8 py-3 bg-[#137257] text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
                            See More
                        </button>
                    </Link>
                </div>
            </div>

        </section>


    );
};

export default About;