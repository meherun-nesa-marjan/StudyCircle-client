import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({assignments}) => {
   
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {assignments.map((assignment) => (
          <div key={assignment._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img className='h-80' src={assignment.image} alt={assignment.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{assignment.title}</h2>
            <p>{assignment.description}</p>
            <p>Location: {assignment.division}</p>
            <div className="card-actions justify-end">
              <Link
               to={`/DonationDetails/${assignment.id}`}
              >
                <button className="btn bg-[#137257] text-white">Donate Now</button>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
};

export default AssignmentCard;