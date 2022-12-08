import React from 'react';
import Footer from '../Shared/Footer';
import AboutHome from './AboutHome';
import AboutService from './AboutService';

const About = () => {
    return (
        <div>
          <AboutHome></AboutHome>
          <AboutService></AboutService>
          <Footer></Footer>
        </div>
    );
};

export default About;