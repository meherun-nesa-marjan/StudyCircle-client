import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogs = [
        {
            id: 1, title: "How to Manage Your Assignments Effectively",
            excerpt: "Learn the best strategies to stay on top of your assignments and never miss a deadline.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "Managing assignments efficiently is crucial to academic success. In this blog, we’ll cover essential strategies such as setting clear priorities, breaking tasks into smaller chunks, and using tools like planners and reminders to stay organized. Learn how to avoid procrastination and keep track of deadlines to achieve your academic goals."
        },
        {
            id: 2, title: "The Power of Collaboration in Education",
            excerpt: "Collaborating with peers can boost your learning and enhance your academic experience. Here's why.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "Collaborative learning can be more effective than studying alone. It enhances problem-solving skills, promotes critical thinking, and boosts creativity. In this post, we explore the importance of group study sessions, how to collaborate effectively, and how teamwork helps deepen understanding and retention of knowledge."
        },
        {
            id: 3, title: "Time Management Tips for Students",
            excerpt: "Time is the most valuable resource. Discover techniques to manage it better and excel in your studies.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "Time management is key to success in both academics and personal life. This blog outlines the Pomodoro technique, time-blocking, and task prioritization. We also discuss the importance of creating a realistic schedule, avoiding distractions, and finding balance between studying and leisure activities."
        },
        {
            id: 4, title: "Maximizing Study Sessions for Better Retention",
            excerpt: "Learn how to make the most out of your study time and retain more information effectively.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "In this post, we dive into effective study techniques such as spaced repetition, active recall, and interleaved learning. We will explain how to optimize your study sessions to not only cover all the material but also ensure better retention. Additionally, we cover the importance of breaks and a healthy study environment."
        },
        {
            id: 5, title: "Building a Productive Study Routine",
            excerpt: "Creating a daily study routine can improve your focus and consistency. Here's how to start.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "A structured study routine helps build good habits and reduces stress. Learn how to set achievable goals, maintain consistency, and keep track of your progress. This blog also covers the importance of flexibility, taking care of your mental health, and adjusting your routine as needed for better results."
        },
        {
            id: 6, title: "Understanding Different Learning Styles",
            excerpt: "Not all students learn the same way. Explore the different learning styles and find what works best for you.",
            image: "https://i.ibb.co/qMs97Gq3/book.jpg",
            details: "Everyone learns differently. Understanding your learning style can help you maximize your study potential. In this post, we discuss visual, auditory, reading/writing, and kinesthetic learning styles, as well as tips and strategies for tailoring your study methods to your preferred style."
        },
    ];

    return (
        <section className="py-10 w-11/12 mx-auto dark:bg-gray-800 text-center">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    Our Latest Blog Posts
                </h2>

                {/* Blog Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <img className="w-full h-64 object-cover rounded-lg mb-6" src={blog.image} alt={blog.title} />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{blog.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.excerpt}</p>

                            <Link to={`/BlogDetails/${blog.id}`} className="px-6 py-2 bg-[#137257] text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300">
                                Read More
                            </Link>

                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <Link to={'/Blogs'}>
                    <button className="px-6 py-2 mt-10 bg-[#137257] text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300">
                        Read More Blogs
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Blog;
