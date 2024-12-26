import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from "react-toastify";
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AssignmentDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [assignment, setAssignment] = useState ([])
  const [googleDocsLink, setGoogleDocsLink] = useState('');
  const [note, setNote] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);






    useEffect(() => {
              axiosSecure.get(`/assignmentData/${id}`)
                  .then((response) => {
                      console.log(response.data)
                      setAssignment(response.data);
                    
                  })
                  .catch((error) => {
                      console.error("Error fetching assignment data:", error);
                  });
      
      }, [id]);
  



  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      assignmentId: assignment._id,
      examineeName: user?.displayName,
      marks: assignment.marks,
      title: assignment.title,
      obtainedMarks: '',
      userEmail: user?.email,
      googleDocsLink,
      note,
      status: 'pending',
      submittedAt: new Date(),
    };
    console.log(submission)

    axiosSecure
      .post('/submitAssignment', submission)
      .then((response) => {
        if (response.data.insertedId) {
          toast.success("Submit successfully!");
          setIsModalOpen(false);
          navigate('/Assignments');
        }
      })
      .catch((error) => {
        console.error("Error submitting assignment:", error);
        toast.error("Failed to submit the assignment. Please try again.");
      });
  };



  return (
    <div>
      {/* Breadcrumb navigation */}
      <div className="w-11/12 mx-auto py-10">
        <div className="space-x-3 mb-10">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <span>|</span>
          <Link to="/Assignments" className="hover:text-red-500">
            Assignments
          </Link>
          <span>|</span>
          <Link to="#" className="text-red-500">
            Assignment Details
          </Link>
        </div>

        {/* Assignment Details Card */}
        <div className="card bg-base-100 shadow-xl dark:bg-gray-700 dark:text-white">
          <figure>
            <img className="p-6" src={assignment.photoUrl} alt={assignment.title} />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold mb-4">Title: {assignment.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Description: </strong>
              {assignment.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Difficulty: </strong>
              {assignment.difficulty}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Marks: </strong>
              {assignment.marks}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Due Date: </strong>
              {new Date(assignment.dueDate).toDateString()}
            </p>

            {/* Modal Trigger */}
            <div className="card-actions justify-end">
              <button
                className="bg-[#754738] text-white px-6 py-2 rounded hover:bg-[#D9B8A7]"
                onClick={() => document.getElementById('my_modal_5').showModal()}
              >
                Take Assignment
              </button>

              {/* Modal */}
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h2 className="text-2xl font-bold mb-4">Submit Assignment</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="googleDocsLink" className="block text-sm font-medium text-gray-700">
                        Google Docs Link:
                      </label>
                      <input
                        type="url"
                        id="googleDocsLink"
                        value={googleDocsLink}
                        onChange={(e) => setGoogleDocsLink(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                        Quick Note:
                      </label>
                      <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                        required
                      />
                    </div>
                    <div className="modal-action">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
