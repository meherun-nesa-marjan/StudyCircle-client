import React from 'react';

const Blog = () => {
    const blogs = [
        { id: 1, title: "How to Manage Your Assignments Effectively", excerpt: "Learn the best strategies to stay on top of your assignments and never miss a deadline.", image: "https://i.ibb.co.com/RzbVm1L/man-791049-1280-1.jpg" },
        { id: 2, title: "The Power of Collaboration in Education", excerpt: "Collaborating with peers can boost your learning and enhance your academic experience. Here's why.", image: "https://i.ibb.co.com/Qm4tBYc/reading-925589-1280.jpg" },
        { id: 3, title: "Time Management Tips for Students", excerpt: "Time is the most valuable resource. Discover techniques to manage it better and excel in your studies.", image: "https://i.ibb.co.com/bJS4W8k/book-1283865-1280.jpg" }
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
                            
                                <button className="px-6 py-2 bg-[#137257] text-white text-lg font-semibold rounded-md hover:bg-green-700 transition duration-300">
                                    Read More
                                </button>
                          
                        </div>
                    ))}
                </div>

                {/* See More Button */}
             
            </div>
        </section>
    );
};

export default Blog;
