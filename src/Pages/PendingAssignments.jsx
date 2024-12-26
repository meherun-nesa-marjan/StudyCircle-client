
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const PendingAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/pendingAssignments?email=${user.email}`)
      .then(res => setPendingAssignments(res.data))
  }, [user.email]);

  const handleMarkAssignment = (assignment) => {
    navigate(`/evaluateAssignment/${assignment._id}`, { state: { assignment } });
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="space-x-3 mb-10">
        <Link to={'/'} className='hover:text-red-500'>Home</Link>
        <span>|</span>
        <Link to={'/PendingAssignments'} className='text-red-500'>Pending Assignments</Link>
        
      </div>
      <h2 className="text-3xl font-bold mb-6">Pending Assignments</h2>
      <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border text-center border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Examinee</th>
            <th className="border px-4 py-2">Marks</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingAssignments.map((assignment) => (
            <tr key={assignment._id}>
              <td className="border px-4 py-2">{assignment.title}</td>
              <td className="border px-4 py-2">{assignment.examineeName}</td>
              <td className="border px-4 py-2">{assignment.marks}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleMarkAssignment(assignment)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-slate-600"
                >
                  Give Marks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PendingAssignments;
