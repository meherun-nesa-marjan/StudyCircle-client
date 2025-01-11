import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AssignmentsUpdate = () => {
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();
    const [assignment, setAssignment] = useState({});
    const [errors, setErrors] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.get(`/assignmentData/${id}`)
            .then((response) => {
                setAssignment(response.data);
            })
            .catch((error) => {
                console.error("Error fetching assignment data:", error);
            });
    }, [id]);

    const validateForm = (data) => {
        const newErrors = {};
        if (!data.title) newErrors.title = "Title is required.";
        if (!data.description) newErrors.description = "Description is required.";
        if (!data.marks || data.marks <= 0) newErrors.marks = "Marks must be a positive number.";
        if (!data.photoUrl) newErrors.photoUrl = "Photo URL is required.";
        if (!data.difficulty) newErrors.difficulty = "Difficulty level must be selected.";
        if (!data.dueDate) newErrors.dueDate = "Due date is required.";
        return newErrors;
    };
    const isValidURL = (url) => {
        const pattern = new RegExp(
            "^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]{2,}(\\/\\S*)?$",
            "i"
        );
        return pattern.test(url);
    };

    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const difficulty = form.difficulty.value;
        const photoUrl = form.photoUrl.value;
        if (!isValidURL(photoUrl)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                photoUrl: "A valid Photo URL is required.",
            }));
            return;
        }
        const marks = parseInt(form.marks.value, 10);
        const dueDate = startDate.toISOString();
        const updatedAssignment = {
            name: user?.displayName,
            email: user?.email,
            title,
            description,
            difficulty,
            photoUrl,
            marks,
            dueDate,
        };

        const validationErrors = validateForm(updatedAssignment);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update this assignment?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .put(`/assignmentData/${id}`, updatedAssignment)
                    .then((response) => {
                        if (response.data.modifiedCount > 0) {
                            Swal.fire("Updated!", "Your Assignment has been updated.", "success");
                            navigate("/Assignments");
                        } else {
                            Swal.fire("No Changes", "No changes were made to the Assignment.", "info");
                        }
                    })
                    .catch((error) => {
                        console.error("Error updating assignment:", error);
                        Swal.fire("Error", "Could not update the assignment. Please try again.", "error");
                    });
            }
        });
    };

    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
                <div className="space-x-3 mb-10">
                    <Link to={'/'} className='hover:text-red-500'>Home</Link>
                    <span>|</span>
                    <Link to={'/Assignments'} className='hover:text-red-500'>Assignments</Link>
                    <span>|</span>
                    <Link to='#' className='text-red-500'>Update Assignments</Link>
                </div>
                <h1 className='font-bold text-4xl py-5'>Update Your Assignment</h1>
                <div className="lg:w-9/12 w-full mx-auto py-6">
                    <form onSubmit={handleUpdateAssignment}>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="title" className="text-sm font-medium text-gray-700">Assignment Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                defaultValue={assignment.title}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="description" className="text-sm font-medium text-gray-700">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={assignment.description}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="marks" className="text-sm font-medium text-gray-700">Marks:</label>
                            <input
                                type="number"
                                id="marks"
                                name="marks"
                                defaultValue={assignment.marks}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.marks && <p className="text-red-500 text-sm">{errors.marks}</p>}
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="photoUrl" className="text-sm font-medium text-gray-700">Photo URL:</label>
                            <input
                                type="URL"
                                id="photoUrl"
                                name="photoUrl"
                                defaultValue={assignment.photoUrl}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.photoUrl && <p className="text-red-500 text-sm">{errors.photoUrl}</p>}
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="difficulty" className="text-sm font-medium text-gray-700">Difficulty Level:</label>
                            <select
                                id="difficulty"
                                name="difficulty"
                                defaultValue={assignment.difficulty}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select Difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                            {errors.difficulty && <p className="text-red-500 text-sm">{errors.difficulty}</p>}
                        </div>
                        <div className="mb-4 flex flex-col">
                            <label htmlFor="dueDate" className="text-sm font-medium text-gray-700">Due Date:</label>
                            <DatePicker
                                id="dueDate"
                                name="dueDate"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                            {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#137257] text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsUpdate;
