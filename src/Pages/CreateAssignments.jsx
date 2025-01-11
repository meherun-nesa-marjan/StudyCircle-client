import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const CreateAssignments = () => {
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    marks: "",
    photoUrl: "",
    difficulty: "",
    dueDate: startDate,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";
    if (!formData.marks || formData.marks <= 0)
      newErrors.marks = "Marks must be greater than 0.";
    if (!formData.photoUrl || !isValidURL(formData.photoUrl))
      newErrors.photoUrl = "A valid Photo URL is required.";
    if (!formData.difficulty)
      newErrors.difficulty = "Please select a difficulty level.";
    if (!formData.dueDate) newErrors.dueDate = "Due Date is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const isValidURL = (Url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]{2,}(\\/\\S*)?$",
      "i"
    );
    return pattern.test(Url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const assignmentData = {
        ...formData,
        name: user?.displayName,
        email: user?.email,
      };

      // Send data to server
      axiosSecure
        .post("/assignmentData", assignmentData)
        .then((response) => {
          console.log(response.data);
          toast.success("Assignment created successfully!");
          
          setFormData({
            title: "",
            description: "",
            marks: "",
            photoUrl: "",
            difficulty: "",
            dueDate: new Date(),
          });
          setStartDate(new Date());
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to create assignment.");
        });
    } else {
      toast.error("Please correct the errors and try again.");
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto py-10 dark:bg-gray-900 text-black dark:text-white">
        <div className="space-x-3 mb-10">
          <Link to={"/"} className="hover:text-red-500">
            Home
          </Link>
          <span>|</span>
          <Link to={"/CreateAssignments"} className="text-red-500">
            Create Assignments
          </Link>
        </div>
        <h1 className="font-bold text-4xl py-5">Create An Assignment</h1>
        <p className="text-2xl pb-2">Your Assignment Details</p>
        <hr />
        <div className="lg:w-9/12 w-full mx-auto py-6">
          <form onSubmit={handleAddAssignment}>
            {/* Title */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="title"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Assignment Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

            {/* Description */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="description"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description:
              </label>
              <textarea
                type = 'text'
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}

            {/* Marks */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="marks"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Marks:
              </label>
              <input
                type="number"
                id="marks"
                name="marks"
                value={formData.marks}
                onChange={handleInputChange}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.marks ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.marks && <p className="text-red-500 text-sm">{errors.marks}</p>}

            {/* Photo URL */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="photoUrl"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Photo URL:
              </label>
              <input
                type="URL"
                id="photoUrl"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleInputChange}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.photoUrl ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.photoUrl && (
              <p className="text-red-500 text-sm">{errors.photoUrl}</p>
            )}

            {/* Difficulty */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="difficulty"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Difficulty Level:
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleInputChange}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.difficulty ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
              >
                <option value="" disabled>
                  Select Assignment type
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            {errors.difficulty && (
              <p className="text-red-500 text-sm">{errors.difficulty}</p>
            )}

            {/* Due Date */}
            <div className="mb-4 flex items-center">
              <label
                htmlFor="dueDate"
                className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Due Date:
              </label>
              <DatePicker
                id="dueDate"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFormData({ ...formData, dueDate: date });
                }}
                className={`w-2/3 px-3 py-2 border dark:bg-gray-300 dark:text-gray-900 ${
                  errors.dueDate ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none`}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            {errors.dueDate && (
              <p className="text-red-500 text-sm">{errors.dueDate}</p>
            )}

            {/* Submit Button */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#137257] text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
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
