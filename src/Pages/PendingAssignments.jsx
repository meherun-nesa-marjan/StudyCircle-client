



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/pendingAssignments?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPendingAssignments(data))
      .catch((error) => console.error(error));
  }, [user.email]);

  const handleMarkAssignment = (assignment) => {
    navigate(`/evaluateAssignment/${assignment._id}`, { state: { assignment } });
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Pending Assignments</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
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
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Give Marks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingAssignments;
