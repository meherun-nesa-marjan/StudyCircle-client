import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
                <div className="space-x-3 mb-10">
                    <Link to={'/'} className='hover:text-red-500'>Home</Link>
                    <span>|</span>
                    <Link to={'/SignUp'} className='text-red-500'>Register</Link>
                </div>
                <h1 className='font-bold text-4xl py-5'>Create Account</h1>
                <p className='text-2xl pb-2'>Your Personal Details</p>
                <hr />
                <div className="lg:w-9/12 w-full mx-auto py-6">
                    <form className="">
                        <div className="mb-4 flex items-center">
                            <label htmlFor="firstName" className="w-20 text-sm font-medium text-gray-700">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-2/3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="lastName" className="w-20 text-sm font-medium text-gray-700">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-2/3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
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
                                className="w-2/3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="email" className="w-20 text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-2/3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="password" className="w-20 text-sm font-medium text-gray-700">
                                Password:
                            </label>


                            <div className="relative w-2/3">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex gap-2 items-center"
                            >
                                <FaUserAlt />  Create
                            </button>
                            <button
                                type="button"
                                className=""
                            >
                                <p>Or register with: <FcGoogle size={24} /></p>
                            </button>

                        </div>
                        <p className="mt-4 text-center">
                            Already have an account?{" "}
                            <Link to="/SignIn" className="text-[#754738] font-bold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;