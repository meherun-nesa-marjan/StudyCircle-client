import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignments, handleDelete, userEmail  }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {assignments.map((assignment) => (
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
                <button className="btn bg-[#137257] text-white">View</button>
              </Link>
              {assignment.email === userEmail ? (
                <Link to={`/AssignmentsUpdate/${assignment._id}`}>
                <button className="btn bg-[#137257] text-white">Update</button>
              </Link>
              ) : (
                <button className="btn bg-gray-400 text-white dark:bg-slate-300 dark:text-gray-950 cursor-not-allowed" disabled>
                  Not Authorized
                </button>
              )}
              
              <button
                className="btn bg-red-500 text-white hover:bg-red-700"
                onClick={() => handleDelete(assignment._id, assignment.email)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;
