import React from 'react';
import FeatureSection from '../Components/FeatureSection';
import FaqSection from '../Components/FaqSection';
import Bannar from '../Components/Bannar';
import Assignment from '../Components/Assignment';
import About from '../Components/About';
import Blog from '../Components/Blog';



const Home = () => {
    return (
        <div>
           
            <Bannar />
            <About />
            <Assignment />
            <FeatureSection />
            <Blog />
            <FaqSection />


        </div>
    );
};

export default Home;