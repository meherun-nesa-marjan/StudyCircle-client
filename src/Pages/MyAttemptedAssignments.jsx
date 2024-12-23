import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const MyAttemptedAssignments = () => {
    const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:5000/mySubmissions?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
          setSubmissions(data);
        })
        .catch((error) => {
          console.error('Error fetching submissions:', error);
         
        });
    }
  }, [userEmail]);
    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-6">My Submitted Assignments</h1>
                {submissions.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300">Title</th>
                                    <th className="px-4 py-2 border border-gray-300">Status</th>
                                    <th className="px-4 py-2 border border-gray-300">Marks</th>
                                    <th className="px-4 py-2 border border-gray-300">Obtained Marks</th>
                                    <th className="px-4 py-2 border border-gray-300">Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissions.map((submission) => (
                                    <tr key={submission._id}>
                                        <td className="px-4 py-2 border border-gray-300">{submission.title}</td>
                                        <td className="px-4 py-2 border border-gray-300">{submission.status}</td>
                                        <td className="px-4 py-2 border border-gray-300">{submission.marks}</td>
                                        <td className="px-4 py-2 border border-gray-300">{submission.obtainedMarks || 'N/A'}</td>
                                        <td className="px-4 py-2 border border-gray-300">{submission.feedback || 'No feedback yet'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-6">You have not submitted any assignments yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyAttemptedAssignments;