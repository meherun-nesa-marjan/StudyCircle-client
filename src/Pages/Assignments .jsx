import React, { useContext, useState } from 'react';
import AssignmentCard from '../Components/AssignmentCard';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const handleDelete = (_id, creatorEmail) => {
    // Check if the logged-in user is the creator of the assignment
    if (creatorEmail !== email) {
      Swal.fire({
        title: "Error!",
        text: "You can only delete assignments you created.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/assignmentData/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your assignment has been deleted.",
                icon: "success",
              });
              setAssignments((prevAssignments) =>
                prevAssignments.filter((assignment) => assignment._id !== _id)
              );
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the assignment. Please try again.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting assignment:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the assignment.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="space-x-3 mb-10">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <span>|</span>
        <Link to="/Assignments" className="text-red-500">Assignments</Link>
      </div>
      <div>
        <h1 className="font-bold text-4xl py-5">All Assignments</h1>
        <AssignmentCard
          handleDelete={handleDelete}
          assignments={assignments}
        />
      </div>
    </div>
  );
};

export default Assignments;
