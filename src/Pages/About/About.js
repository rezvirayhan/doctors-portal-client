import React from 'react';
import AboutBanner from './AboutBanner';
import AboutFaq from './AboutFaq';
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
          <AboutFaq></AboutFaq>
        </div>
    );
};

export default About;