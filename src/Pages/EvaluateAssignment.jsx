import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const EvaluateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const { state } = useLocation();
  const { assignment } = state;
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecure
      .put(`/markAssignment/${assignment._id}`, { obtainedMarks, feedback })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          toast.success('Assignment marked successfully!');
          navigate('/pendingAssignments');
        }
      })
      .catch((error) => {
        console.error('Error marking assignment:', error);
        toast.error('Failed to mark assignment.');
      });

  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="space-x-3 mb-10">
        <Link to={'/'} className='hover:text-red-500'>Home</Link>
        <span>|</span>
        <Link to={'/PendingAssignments'} className='hover:text-red-500'>Pending Assiments</Link>
        <span>|</span>
        <a className='text-red-500'>Evaluate Assignment</a>
      </div>
      <h2 className="text-3xl font-bold mb-6">Evaluate Assignment</h2>
      <div className="card bg-white shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{assignment.title}</h3>
        <p className="mb-2">
          <strong>Examinee:</strong> {assignment.examineeName}
        </p>
        <p className="mb-2">
          <strong>Google Docs Link:</strong>{' '}
          <a
            href={assignment.googleDocsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open Document
          </a>
        </p>
        <p className="mb-4">
          <strong>Note:</strong> {assignment.note}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="obtainedMarks" className="block text-sm font-medium text-gray-700">
              Marks
            </label>
            <input
              type="number"
              id="obtainedMarks"
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Marks
          </button>
        </form>
      </div>
    </div>
  );
};

export default EvaluateAssignment;
