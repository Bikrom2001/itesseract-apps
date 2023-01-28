import React from 'react';
import Questions from '../../../Common/Questions/Questions';
import Testimonial from '../../../Common/Testimonial/Testimonial';
import AboutUs from '../AboutUs/AboutUs';
import FreeClass from '../FreeClass/FreeClass';

const AboutMain = () => {
    return (
      <div>
        <AboutUs></AboutUs>
        <FreeClass></FreeClass>
        <Testimonial></Testimonial>
        <Questions
          title="Answering your common questions"
          details=" Our learning materials include a wide range of educational,
            professional, and skill-based courses. We cover all school and
            college grade levels, as well as university courses"
        ></Questions>
      </div>
    );
};

export default AboutMain;