import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";



const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || "/"
    const [passwordVisible, setPasswordVisible] = useState(false);
   
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        signInUser(email, password)
            .then(() => {
                e.target.reset();
                toast.success("Login successful!");
                
              
               navigate(from, { replace: true })


            })
            .catch((error) => {
                toast.error("Login failed. Check your credentials.");
            });
    };

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Login successful with Google!");
                navigate(from, { replace: true })



            })
            .catch((error) => {
                console.error("Google login error:", error.message);
                toast.error("Google login failed. Please try again.");
            });
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <div className="w-11/12 mx-auto py-10">
                <div className="space-x-3 mb-10">
                    <Link to={'/'} className='hover:text-red-500'>Home</Link>
                    <span>|</span>
                    <Link to={'/SignIn'} className='text-red-500'>Sign In</Link>
                </div>


                <div className=" w-full mx-auto py-6 grid lg:grid-cols-2 grid-cols-1 gap-5 ">

                    <form onSubmit={handleLogin} className="border border-slate-600 p-10">
                        <h1 className='font-bold text-4xl dark:text-white py-5'>Sign In Here</h1>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="email" className="dark:text-white w-20 text-sm font-medium text-gray-700">
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
                            <label htmlFor="password" className="dark:text-white w-20 text-sm font-medium text-gray-700">
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
                                className="bg-[#137257] text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex gap-2 items-center"
                            >
                              <FaUserAlt />  Sign In
                            </button>
                            <button
                                onClick={handleLoginWithGoogle}
                                type="button"
                                className="items-center border-2 px-4 py-2 rounded-md border-[#137257] justify-center"
                            >
                                <p>Or login with: <FcGoogle size={24} /></p>
                            </button>

                        </div>

                    </form>
                    <div className="border border-slate-600 p-10">
                        <h1 className='font-bold text-4xl py-5'>  Don't have an account?</h1>
                        <p className="font-bold py-2">
                            Register Account
                        </p>
                        <p>
                        "Join a community of learners and achievers. Share your goals, work together, and grow."
                        </p>
                        <Link to="/SignUp" className="text-[#137257] font-bold hover:underline">
                            Register
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;