import React from 'react';
import ContactFrom from '../ContactFrom/ContactFrom';
import Contactinfo from '../Contactinfo/Contactinfo';

const ContactUS = () => {
    return (
      <div>
        <Contactinfo
          title="Contact Us"
          details="Contact us for more information"
          address="151/7(5th Floor), Good Luck Center, Green Road, Dhaka 1205."
          phone="+8801550704720"
          email="contact@itesseract.co"
        ></Contactinfo>
        <ContactFrom title="Our experts will help you"></ContactFrom>
      </div>
    );
};

export default ContactUS;