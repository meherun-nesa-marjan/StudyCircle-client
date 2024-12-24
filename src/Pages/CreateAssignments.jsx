import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";



const CreateAssignments = () => {
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    
    const handleAddAssignment = (e) => {
        
        e.preventDefault();
        const email = user?.email;
        const name = user?.displayName;
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const difficulty = form.difficulty.value;
        const photoUrl = form.photoUrl.value;
        const marks = form.marks.value;
        const dueDate = form.dueDate.value;
        const assignmentData = {
            name,
            email,
            title,
            difficulty,
            description,
            photoUrl,
            marks,
            dueDate,
        }
        // send data to server
        axiosSecure.post('/assignmentData', assignmentData)
        .then((response) => {
            console.log(response.data);
            toast.success("Assignment created successfully!");
            form.reset();
          
        })
       

        
           
    };

    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
                <div className="space-x-3 mb-10">
                    <Link to={'/'} className='hover:text-red-500'>Home</Link>
                    <span>|</span>
                    <Link to={'/CreateAssignments'} className='text-red-500'>Create Assignments</Link>
                </div>
                <h1 className='font-bold text-4xl py-5'>Create An Assignment</h1>
                <p className='text-2xl pb-2'>Your Assignment Details</p>
                <hr />
                <div className="lg:w-9/12 w-full mx-auto py-6">
                    <form onSubmit={handleAddAssignment}>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="title" className="w-20 text-sm font-medium text-gray-700">
                                Assignment Title:
                            </label>

                            <input
                                type="text"
                                id="title"
                                name="title"
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
                                Create
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;