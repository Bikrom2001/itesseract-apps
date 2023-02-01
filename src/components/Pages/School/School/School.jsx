import React from 'react';
import ContactFrom from '../../ContactUS/ContactFrom/ContactFrom';
import Level from '../Level/Level';
import SchoolBanner from '../SchoolBanner/SchoolBanner';
import Skill from '../Skill/Skill';

const School = () => {
    return (
      <div>
        <SchoolBanner></SchoolBanner>
        <Skill></Skill>
        <Level></Level>
        <ContactFrom title="Registration"></ContactFrom>
      </div>
    );
};

export default School;