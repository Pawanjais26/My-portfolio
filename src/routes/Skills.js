import React from "react";

import SkillsCard from "../components/SkillsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Skills() {
  return (
    <>
      <Navbar />
      <div >
          <h1 class='display-4 fw-bold lh-1 text-center my-2 pt-5 left-animation'>
            My <span class='text-purple'>Skills</span>
          </h1>
        <div className='row container mx-auto my-5 p-5' style={{ backgroundColor: "#E5D1FA" }}>
          <div className='col-12 col-md-6 col-lg-4  my-5 text-center heading2'>
            <SkillsCard
              Heading='Front-End'
              skill='HTML'
              skill2='CSS'
              skill3='Javascript'
              skill4='Bootstrap'
              skill5='React'
              skill6='JQuery'
              skill7='Sass'
            />
          </div>
          <div className='col-12 col-md-6 col-lg-4  my-5 text-center heading3'>
            <SkillsCard
              Heading='Back-end'
              skill='Node.js'
              skill2='Express'
              skill3='MongoDB'
              skill4='Mongoose'
              skill5='MySQL'
              skill6='Python'
              skill7='Mern'
            />
          </div>
          <div className='col-12 col-md-6 col-lg-4  my-5 text-center heading4'>
            <SkillsCard
              Heading='Others'
              skill='Github'
              skill2='Vs Code'
              skill3='Designing'
              skill4='Excel'
              skill5='Tally'
              skill6='Data Entry'
              skill7='Problem Solving'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
