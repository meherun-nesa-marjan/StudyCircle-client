import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, signInWithGoogle, UpdateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must contain at least 6 characters, an uppercase letter, and a lowercase letter."
            );
            return;
        }
        setError("");

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                UpdateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        toast.success("Registration successful!");
                        navigate("/");
                    })
                    .catch((updateError) => {
                        setError("Error updating profile: " + updateError.message);
                        toast.error("Error updating profile.");
                    });
            })
            .catch((authError) => {
                setError("Registration failed: " + authError.message);
                toast.error("Registration failed: " + authError.message);
            });
    };

    const handleRegistrationWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("User registered with Google:", result.user);
                toast.success("Google registration successful!");
                navigate("/");
            })
            .catch((error) => {
                setError("Google registration failed: " + error.message);
                toast.error("Google registration failed: " + error.message);
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
                    <Link to={'/SignUp'} className='text-red-500'>Register</Link>
                </div>
                <h1 className='font-bold text-4xl py-5'>Create Account</h1>
                <p className='text-2xl pb-2'>Your Personal Details</p>
                <hr />
                <div className="lg:w-9/12 w-full mx-auto py-6">
                    <form onSubmit={handleRegistration}>
                        <div className="mb-4 flex items-center">
                            <label htmlFor="name" className="w-20 text-sm font-medium text-gray-700">
                                Your Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
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
                            <label htmlFor="email" className="w-20 text-sm font-medium text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-sky-600 focus:shadow-md focus:border-blue-500"
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
                                onClick={handleRegistrationWithGoogle}
                                type="button"
                                className="flex items-center justify-center"
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
