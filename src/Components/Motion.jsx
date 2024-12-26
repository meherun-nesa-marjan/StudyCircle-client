import React from 'react';
import { motion } from 'framer-motion';
const Motion = () => {
   // Animation Variants for Banner
   const bannerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Animation Variants for Cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div className="home-page">
      {/* Animated Banner */}
      <motion.div
        className="banner bg-blue-600 text-white text-center py-10"
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <h1 className="text-4xl font-bold">Welcome to the Assignment Portal</h1>
        <p className="text-xl mt-4">Your one-stop solution for assignment submissions and evaluations.</p>
      </motion.div>

      {/* Feature Section */}
      <div className="features grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {['Easy Submission', 'Detailed Feedback', 'Progress Tracking'].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card bg-white shadow-md rounded-lg p-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h2 className="text-2xl font-semibold mb-3">{feature}</h2>
            <p>Explore the {feature.toLowerCase()} feature in our app and improve your experience!</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Motion;