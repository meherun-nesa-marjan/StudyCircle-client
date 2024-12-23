import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ assignments, handleDelete }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {assignments.map((assignment) => (
        <div key={assignment._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img className="h-80 w-full object-cover" src={assignment.photoUrl} alt={assignment.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{assignment.title}</h2>
            <p className="text-gray-700 text-sm">{assignment.description}</p>
            <p className="text-gray-500 text-xs">Difficulty: {assignment.difficulty}</p>
            <p className="text-gray-500 text-xs">Marks: {assignment.marks}</p>
            <div className="card-actions">
              <Link to={`/DonationDetails/${assignment.id}`}>
                <button className="btn bg-[#137257] text-white">View</button>
              </Link>
              <Link to={`/DonationDetails/${assignment.id}`}>
                <button className="btn bg-[#137257] text-white">Update</button>
              </Link>
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
