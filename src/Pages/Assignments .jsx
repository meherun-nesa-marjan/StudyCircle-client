import React from 'react';
import AssignmentCard from '../Components/AssignmentCard';
import { Link, useLoaderData } from 'react-router-dom';

const Assignments = () => {
    const assignments = useLoaderData()
    return (
        <div className='w-11/12 mx-auto py-10"'>
            <div className="space-x-3 mb-10">
                <Link to={'/'} className='hover:text-red-500'>Home</Link>
                <span>|</span>
                <Link to={'/Assignments'} className='text-red-500'>Assignments</Link>
            </div>
            <div className="">
            <h1 className='font-bold text-4xl py-5'>All Assignment</h1>
                <AssignmentCard key={assignments._id} assignments={assignments} />
            </div>
        </div>
    );
};

export default Assignments;
