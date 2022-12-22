import React from 'react';
import Footer from '../Shared/Footer';
import AboutBanner from './AboutBanner';
import AboutHome from './AboutHome';
import AboutTeam from './AboutTeam';
import AboutTeamDoctor from './AboutTeamDoctor';
const About = () => {
    return (
        <div>
          <AboutHome></AboutHome>
          <AboutBanner></AboutBanner>
          <AboutTeam></AboutTeam>
          <AboutTeamDoctor></AboutTeamDoctor>
          <Footer></Footer>
        </div>
    );
};

export default About;