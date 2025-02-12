import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { UseTheme } from '../Hooks/UseTheme';
import { IoSunny, IoMoon } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    const { changeTheme, mode } = UseTheme();
    const { user, signOutUser } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/AboutUs', element: 'About' },
        { path: '/Contact', element: 'Contact' },
        { path: '/Assignments', element: 'Assignments' },
        ...(user ? [{ path: '/PendingAssignments', element: 'Pending Assignments' }] : []),
    ];

    return (
        <div className={`navbar sticky top-0 z-50 bg-[#B1E3D5] dark:bg-gray-900 transition-shadow duration-300 ${isScrolled ? 'backdrop-blur-md bg-opacity-60 bg-[#B1E3D5] shadow-md' : ''}`}>
            <div className="navbar lg:w-11/12 mx-auto py-4 dark:bg-gray-900 text-black dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow">
                            {navItems.map(({ path, element }) => (
                                <NavLink key={path} to={path} className={({ isActive }) => `text-black mx-4 text-xl ${isActive ? "font-bold" : ""}`}>
                                    {element}
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                    <Link to="/" className="lg:text-2xl font-bold text-green-950">StudyCircle</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink key={path} to={path} className={({ isActive }) => `text-green-950 mx-4 text-xl ${isActive ? "font-bold" : ""} dark:text-white`}>
                                {element}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end">
                    <button onClick={changeTheme} aria-label="Toggle Theme" className="btn btn-ghost">
                        {mode === "light" ? <IoSunny /> : <IoMoon />}
                    </button>
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <div className="dropdown dropdown-bottom">
                                <div tabIndex={0}>
                                    <img
                                        src={user.photoURL || "/default-avatar.png"}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full"
                                    />
                                </div>
                                <ul tabIndex={0} className="dropdown-content dark:bg-gray-900 menu bg-base-100 rounded-box right-0 z-[99] w-56 p-2 shadow">
                                    <li><Link to="/CreateAssignments">Create Assignments</Link></li>
                                    <li><Link to="/MyAttemptedAssignments">My Attempted Assignments</Link></li>
                                </ul>
                            </div>
                            <Tooltip id="user-tooltip" className="bg-gray-700 text-white p-2 rounded" />
                            <button onClick={handleSignOut} className="btn bg-[#137257] text-white">Logout</button>
                        </div>
                    ) : (
                        <div className="flex space-x-3 items-center">
                            <Link to="/SignIn">Sign In</Link>
                            <span>|</span>
                            <Link to="/SignUp">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
