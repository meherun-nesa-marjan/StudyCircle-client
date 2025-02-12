import React from 'react';
import { useParams } from 'react-router-dom';
const BlogDetails = () => {
    const blogs = [
        { id: 1, title: "How to Manage Your Assignments Effectively", 
          excerpt: "Learn the best strategies to stay on top of your assignments and never miss a deadline.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Managing assignments efficiently is crucial to academic success. In this blog, we’ll cover essential strategies such as setting clear priorities, breaking tasks into smaller chunks, and using tools like planners and reminders to stay organized. Learn how to avoid procrastination and keep track of deadlines to achieve your academic goals." 
        },
        { id: 2, title: "The Power of Collaboration in Education", 
          excerpt: "Collaborating with peers can boost your learning and enhance your academic experience. Here's why.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Collaborative learning can be more effective than studying alone. It enhances problem-solving skills, promotes critical thinking, and boosts creativity. In this post, we explore the importance of group study sessions, how to collaborate effectively, and how teamwork helps deepen understanding and retention of knowledge."
        },
        { id: 3, title: "Time Management Tips for Students", 
          excerpt: "Time is the most valuable resource. Discover techniques to manage it better and excel in your studies.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Time management is key to success in both academics and personal life. This blog outlines the Pomodoro technique, time-blocking, and task prioritization. We also discuss the importance of creating a realistic schedule, avoiding distractions, and finding balance between studying and leisure activities."
        },
        { id: 4, title: "Maximizing Study Sessions for Better Retention", 
          excerpt: "Learn how to make the most out of your study time and retain more information effectively.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "In this post, we dive into effective study techniques such as spaced repetition, active recall, and interleaved learning. We will explain how to optimize your study sessions to not only cover all the material but also ensure better retention. Additionally, we cover the importance of breaks and a healthy study environment."
        },
        { id: 5, title: "Building a Productive Study Routine", 
          excerpt: "Creating a daily study routine can improve your focus and consistency. Here's how to start.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "A structured study routine helps build good habits and reduces stress. Learn how to set achievable goals, maintain consistency, and keep track of your progress. This blog also covers the importance of flexibility, taking care of your mental health, and adjusting your routine as needed for better results."
        },
        { id: 6, title: "Understanding Different Learning Styles", 
          excerpt: "Not all students learn the same way. Explore the different learning styles and find what works best for you.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Everyone learns differently. Understanding your learning style can help you maximize your study potential. In this post, we discuss visual, auditory, reading/writing, and kinesthetic learning styles, as well as tips and strategies for tailoring your study methods to your preferred style."
        },
        { id: 7, title: "How to Avoid Procrastination", 
          excerpt: "Procrastination can hurt your grades. Discover actionable steps to avoid it and stay on track.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Procrastination is a common challenge, but it can be managed. This blog offers practical advice on how to overcome procrastination, including setting smaller, achievable goals, using accountability partners, and managing distractions. We’ll also explore how to build self-discipline and stay motivated even when tasks seem daunting."
        },
        { id: 8, title: "Effective Note-taking Strategies", 
          excerpt: "Good notes can make a huge difference in how well you retain information. Learn the best strategies for effective note-taking.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Taking notes efficiently can help you better process and remember the material. This blog covers various note-taking methods such as the Cornell method, mind mapping, and bullet journaling. We also discuss how to organize your notes, the benefits of digital vs. handwritten notes, and tips on reviewing your notes for long-term retention."
        },
        { id: 9, title: "Balancing Study and Personal Life", 
          excerpt: "It’s important to maintain a balance between studies and personal life. Learn how to find the right equilibrium.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Striking a balance between studying and personal life is vital for mental health and overall well-being. This post highlights strategies for managing your time effectively to ensure that you have time for social activities, hobbies, exercise, and relaxation. Learn how to set boundaries, manage expectations, and avoid burnout."
        },
        { id: 10, title: "How to Ace Your Exams with Confidence", 
          excerpt: "Preparing for exams can be stressful, but with the right strategies, you can excel with confidence.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Exam preparation doesn’t have to be overwhelming. This blog offers actionable tips for exam success, including creating a study schedule, practicing past papers, staying calm under pressure, and using memory-enhancing techniques like visualization and mnemonics. Learn how to stay positive and mentally prepared on exam day."
        },
        { id: 11, title: "The Role of Technology in Education", 
          excerpt: "Technology has transformed education. Learn how to use digital tools to enhance your learning experience.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "From online courses to educational apps and interactive tools, technology has revolutionized how we learn. In this blog, we explore the benefits and challenges of using technology in education, how it supports personalized learning, and how to choose the right digital tools to boost productivity and understanding."
        },
        { id: 12, title: "Staying Motivated During Your Studies", 
          excerpt: "Staying motivated can be challenging. Find tips and strategies to keep your enthusiasm high throughout the semester.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Maintaining motivation can be tough, especially during long study sessions. This blog offers practical tips to stay motivated, including setting meaningful goals, celebrating small wins, surrounding yourself with a supportive community, and using rewards to reinforce positive study habits."
        },
        { id: 13, title: "How to Set SMART Goals for Your Education", 
          excerpt: "Setting specific, measurable, achievable, relevant, and time-bound goals can help you stay focused on your educational journey.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Setting SMART goals gives you a clear path and purpose. In this post, we break down how to set specific, measurable, achievable, relevant, and time-bound goals that align with your educational aspirations. We’ll cover examples of academic goals and explain how to track your progress over time."
        },
        { id: 14, title: "Dealing with Academic Stress", 
          excerpt: "Academic stress is common among students, but managing it is key to staying healthy and performing well. Here's how to cope.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Academic stress is a part of student life, but it can be managed with the right techniques. This blog shares stress-management strategies such as practicing mindfulness, seeking support from peers and mentors, exercising, and maintaining a healthy sleep routine. Learn how to turn stress into motivation rather than letting it overwhelm you."
        },
        { id: 15, title: "Mastering Online Learning", 
          excerpt: "Online learning offers flexibility but also presents challenges. Learn how to stay on top of your online courses.", 
          image: "https://i.ibb.co/qMs97Gq3/book.jpg", 
          details: "Online learning can be both convenient and challenging. In this blog, we discuss how to stay organized, manage distractions, and effectively engage with online material. We also share tips on how to maintain motivation, participate in virtual discussions, and make the most of online resources for a successful learning experience."
        }
    ];
    
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-6" />
            <p className="text-lg mb-4">{blog.details}</p>
        </div>
    );
};

export default BlogDetails;