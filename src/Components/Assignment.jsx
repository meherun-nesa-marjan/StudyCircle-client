import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { Link } from 'react-router-dom';  

const Assignment = () => {
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();  
    useEffect(() => {
        axios.get('https://my-new-assignment-11.vercel.app/assignments')
            .then(response => {
                setAssignments(response.data);
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    }, []);

   
    const handleSeeMoreClick = () => {
        navigate('/all-assignments'); 
    };

    return (
      <div className="">
          <div className="my-8 w-11/12 mx-auto ">
           <div className="text-center mb-5">
           <h2 className="text-2xl font-bold">Assignments</h2>
           <p className='text-2xl '>we believe that learning is more than just reading textbooks.</p>
           </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              
                {assignments.slice(0, 6).map((assignment) => (
                    <div key={assignment._id} className="card bg-base-100 shadow-xl dark:bg-gray-700">
                        <figure>
                            <img className="h-80 w-full object-cover" src={assignment.photoUrl} alt={assignment.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{assignment.title}</h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{assignment.description}</p>
                            <p className="text-gray-500 text-xs dark:text-gray-300">Difficulty: {assignment.difficulty}</p>
                            <p className="text-gray-500 text-xs dark:text-gray-300">Marks: {assignment.marks}</p>
                            <div className="card-actions">
                                <Link to={`/AssignmentDetails/${assignment._id}`}>
                                    <button className="px-8 py-3 bg-[#137257] text-white rounded-md hover:bg-green-400 transition duration-300">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {assignments.length > 8 && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleSeeMoreClick}
                        className="px-6 py-2 bg-[#137257] text-white rounded-md hover:bg-green-400 transition duration-300"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
      </div>
    );
};

export default Assignment;
