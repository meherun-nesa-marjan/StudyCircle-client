import React, { useContext, useEffect, useState } from 'react';
import AssignmentCard from '../Components/AssignmentCard';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';

const Assignments = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [assignments, setAssignments] = useState([]);
    const [filter, setFilter] = useState(''); 



    useEffect(() => {
        axios.get(`http://localhost:5000/assignments?difficulty=${filter}`)
            .then(response => {
                setAssignments(response.data);
            })
            .catch(error => {
                console.error('Error fetching assignments:', error);
            });
    }, [filter, axios]);


    const handleDelete = (_id, creatorEmail) => {
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
                axiosSecure
                    .delete(`/assignmentData/${_id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
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
                <div className="mb-6 flex gap-5">
                
                    <select
                      
                        onChange={(e) =>setFilter(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-zinc-600"
                    >
                        <option value=""disabled selected>Search By Difficulties</option>
                        <option value=''>All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
               <div className="pt-36">
               <AssignmentCard
                    handleDelete={handleDelete}
                    assignments={assignments}
                    userEmail={email}

                />
               </div>
            </div>
        </div>
    );
};

export default Assignments;
