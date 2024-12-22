import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const name = user?.displayName;
    const handleSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };
    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/Assignments', element: 'Assignments' },
        { path: '/products', element: 'Products' },

    ];
    return (
        <div className="navbar lg:w-11/12 mx-auto my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `text-black mx-4 text-xl ${isActive ? "font-bold" : ""}`
                                }>
                                {element}
                            </NavLink>

                        ))}

                    </ul>
                </div>
                <Link to={'/'} className="lg:text-2xl font-bold">StudyCircle</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(({ path, element }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `text-black mx-4 text-xl ${isActive ? "font-bold" : ""}`
                            }>
                            {element}
                        </NavLink>

                    ))}

                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        {user.photoURL && (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0}>

                                    <a
                                        data-tooltip-id="my-tooltip-inline"
                                        data-tooltip-content={name || "No name available"}
                                    >
                                        <img
                                            src={user.photoURL || "/default-avatar.png"}
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full"
                                            onError={(e) => (e.target.src = "/default-avatar.png")}
                                        />
                                    </a>


                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>

                        )}
                        <Tooltip
                            id="my-tooltip-inline"
                            style={{
                                backgroundColor: "transparent",
                                color: "black",
                               
                                
                            }}
                           
                        />
                        <button
                            onClick={handleSignOut}
                            className="btn bg-[#754738] text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="space-x-3">
                        <Link to={'/SignIn'}>Sign In</Link>
                        <span>|</span>
                        <Link to={'/SignUp'}>Register</Link>
                    </div>

                )}

            </div>
        </div>
    );
};

export default Navbar;