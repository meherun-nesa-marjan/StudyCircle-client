import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const AboutUs = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    At StudyCircle, we're dedicated to helping students excel academically by providing a platform that streamlines assignment management and fosters collaboration. Join us and experience a new way of learning!
                </p>

                {/* Swiper for rotating images or content */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    className="mb-10"
                >
                    <SwiperSlide>
                        <motion.div
                            className="bg-white p-8 shadow-xl rounded-lg"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src="https://via.placeholder.com/600x400" alt="Our Mission" className="w-full h-64 object-cover rounded-md mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our mission is to empower students by providing a simple, intuitive platform where they can manage their academic tasks, track progress, and collaborate with peers to achieve success.
                            </p>
                        </motion.div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.div
                            className="bg-white p-8 shadow-xl rounded-lg"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src="https://via.placeholder.com/600x400" alt="Our Vision" className="w-full h-64 object-cover rounded-md mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We envision a world where students are empowered with the tools to achieve their academic goals efficiently, regardless of their location or background. Together, we can shape the future of learning.
                            </p>
                        </motion.div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.div
                            className="bg-white p-8 shadow-xl rounded-lg"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src="https://via.placeholder.com/600x400" alt="Our Values" className="w-full h-64 object-cover rounded-md mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Values</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                At StudyCircle, we believe in transparency, collaboration, and continuous improvement. These values guide us as we work to create a platform that supports students in their pursuit of knowledge.
                            </p>
                        </motion.div>
                    </SwiperSlide>
                </Swiper>

                {/* Additional Text Section */}
                <motion.p
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Join us on this journey to redefine the way students approach learning, stay organized, and achieve success. With StudyCircle, you’re never alone in your academic challenges. Let’s work together to accomplish your goals!
                </motion.p>
            </div>
        </section>
    );
};

export default AboutUs;
