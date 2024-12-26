import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <Navbar />
            <main className="min-h-[calc(100vh-368px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;