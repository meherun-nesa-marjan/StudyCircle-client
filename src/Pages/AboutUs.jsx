import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <section className="py-16 relative bg-bannar bg-cover bg-no-repeat bg-center text-white">
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

            <div className="container w-11/12 mx-auto px-4 text-center relative z-10">
                {/* Title */}
                <motion.h2
                    className="text-5xl font-extrabold text-white mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h2>
                
                {/* Description */}
                <motion.p
                    className="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    We are StudyCircle, a passionate team dedicated to revolutionizing how students manage their academic life. 
                    Join us to experience seamless assignment tracking, powerful collaboration tools, and a community of motivated learners.
                </motion.p>

                {/* Mission, Vision, and Values Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {/* Mission Card */}
                    <motion.div
                        className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img 
                            src="./src/assets/mission.jpg" 
                            alt="Mission" 
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Our mission is to help students achieve academic success through efficient assignment tracking, powerful collaboration tools, and seamless interaction. We empower students to manage their educational journey effectively.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img 
                            src="./src/assets/laptop.jpg" 
                            alt="Vision" 
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            We envision a future where students are empowered to navigate their academic challenges effortlessly. Our platform seeks to create a dynamic community where students collaborate, learn, and succeed together.
                        </p>
                    </motion.div>

                    {/* Values Card */}
                    <motion.div
                        className="bg-white p-8 shadow-xl rounded-lg transform hover:scale-105 transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img 
                            src="./src/assets/time.jpg" 
                            alt="Values" 
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">Our Values</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            At StudyCircle, we believe in **transparency**, **collaboration**, and **continuous improvement**. We value the growth of each individual, fostering an inclusive environment where everyone can succeed.
                        </p>
                    </motion.div>
                </div>

                {/* Additional text and Call to Action */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <h4 className="text-3xl font-semibold text-white mb-6">
                        Ready to Join the Revolution in Learning?
                    </h4>
                    <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
                        Our platform is here to assist you in every step of your academic journey. Whether it’s managing assignments or collaborating with peers, StudyCircle has got you covered.
                    </p>

                    {/* Link wrapped around the motion button */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/SignIn">
                            <button className="px-8 py-3 bg-[#137257] text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
                                Join Us Now
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
