import React from 'react';
import AboutTeamDoctorCard from './AboutTeamDoctorCard';
import img1 from '../../assets/about_doctor_1.jpg';
import img2 from '../../assets/about_doctor_2.jpg';
import img3 from '../../assets/about_doctor_3.jpg';
import img4 from '../../assets/about_doctor_4.jpg';

const AboutTeamDoctor = () => {
    return (
        <div>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4' >
            <AboutTeamDoctorCard  img={img1} title="Chief surgeon" name="Bernice Ray" description="Podcasting operational change management inside of workflows to establish a framework."></AboutTeamDoctorCard>
            <AboutTeamDoctorCard  img={img2} title="Cosmetic surgeon" name="Larissa Ianson" description="Keeping your eye on the ball while performing a deep dive on the start-up mentality."></AboutTeamDoctorCard>
            <AboutTeamDoctorCard  img={img3} title="Otolaryngology" name="Marleen Denman" description="Taking seamless key performance indicators offline to maximise the long tail."></AboutTeamDoctorCard>
            <AboutTeamDoctorCard  img={img4} title="Neurosurgery" name="Jason Bolton" description="Dramatically visualize customer directed convergence without revolutionary ROI."></AboutTeamDoctorCard>
         </div>
        </div>
    );
};

export default AboutTeamDoctor;