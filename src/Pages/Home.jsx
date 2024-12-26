import React from 'react';
import FeatureSection from '../Components/FeatureSection';
import FaqSection from '../Components/FaqSection';
import Motion from '../Components/Motion';
import Bannar from '../Components/Bannar';

const Home = () => {
    return (
        <div>
          <Bannar />
            <FeatureSection />
            <FaqSection />
        </div>
    );
};

export default Home;