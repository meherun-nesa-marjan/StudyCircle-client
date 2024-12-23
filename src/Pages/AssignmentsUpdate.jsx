import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from '../Providers/AuthProvider';


const AssignmentsUpdate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const assignment = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { 
        _id,
        title,
        difficulty,
        description,
        photoUrl,
        marks,
        dueDate, } = assignment;

        const handleUpdateAssignment = (e) => {
            const email = user?.email;
            const name = user?.displayName;
            e.preventDefault();
            const form = e.target;
            const title = form.title.value;
            const description = form.description.value;
            const difficulty = form.difficulty.value;
            const photoUrl = form.photoUrl.value;
            const marks = form.marks.value;
            const dueDate = form.dueDate.value;
        
            const updatedAssignment = {
                name,
                email,
                title,
                difficulty,
                description,
                photoUrl,
                marks,
                dueDate,
            };
        console.log(updatedAssignment)
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
                fetch(`http://localhost:5000/assignmentData/${_id}`, {
                  method: "PUT", 
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(updatedAssignment),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.modifiedCount > 0) {
                      Swal.fire("Updated!", "Your Assignment has been updated.", "success");
                      navigate("/Assignments");
                     
        
                    } else {
                      Swal.fire("No Changes", "No changes were made to the Assignment.", "info");
                    }
                    
                  })
                  
                  .catch((error) => {
                    console.error("Error updating assignent:", error);
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
                    <Link to={'/Assignments'} className='hover:text-red-500'>Assiments</Link>
                    <span>|</span>
                    <Link to={'/UpdateAssignment'} className='text-red-500'>Update Assignments</Link>
                </div>
                <h1 className='font-bold text-4xl py-5'>Update Your Assignment</h1>
                <p className='text-2xl pb-2'> Assignment Details</p>
                <hr />
                <div className="lg:w-9/12 w-full mx-auto py-6">
                    <form
                        onSubmit={handleUpdateAssignment} >
                        <div className="mb-4 flex items-center">
                            <label htmlFor="title" className="w-20 text-sm font-medium text-gray-700">
                                Assignment Title:
                            </label>

                            <input
                                type="text"
                                id="title"
                                name="title"
                                defaultValue={title}
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />

                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="description" className="w-20 text-sm font-medium text-gray-700">
                                Description:
                            </label>

                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                defaultValue={description}
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />

                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="marks" className="w-20 text-sm font-medium text-gray-700">
                                Marks:
                            </label>

                            <input
                                type="number"
                                id="marks"
                                name="marks"
                                defaultValue={marks}
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />

                        </div>



                        <div className="mb-4 flex items-center">
                            <label htmlFor="photoUrl" className="w-20 text-sm font-medium text-gray-700">
                                Photo URL:
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                id="photoUrl"
                                defaultValue={photoUrl}
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="difficulty" className="w-20 text-sm font-medium text-gray-700">
                                Difficulty Level:
                            </label>
                            <select
                                id="difficulty"
                                name="difficulty"
                                defaultValue={difficulty}
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            >
                                <option value='' disabled selected>
                                    Select Assignment type
                                </option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="dueDate" className="w-20 text-sm font-medium text-gray-700">
                                Due Date:
                            </label>


                            <DatePicker
                                showIcon
                                id="dueDate"
                                name="dueDate"
                                defaultValue={dueDate}
                                className="w-2/3 items-center border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                required />
                        </div>


                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex gap-2 items-center"
                            >
                               UpDate
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsUpdate;