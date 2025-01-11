import React from 'react';
import FeatureSection from '../Components/FeatureSection';
import FaqSection from '../Components/FaqSection';
import Bannar from '../Components/Bannar';
import Assignment from '../Components/Assignment';
import About from '../Components/About';



const Home = () => {
    return (
        <div>
            <Bannar />
            <About />
            <Assignment />
            <FeatureSection />
            <FaqSection />


        </div>
    );
};

export default Home;