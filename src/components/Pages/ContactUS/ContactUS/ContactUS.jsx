import React from 'react';
import ContactFrom from '../ContactFrom/ContactFrom';
import Contactinfo from '../Contactinfo/Contactinfo';
import GoogleMap from '../GoogleMap/GoogleMap';

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
        <GoogleMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9074736547177!2d90.3846032143484!3d23.750678694684026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b908bb495dd7%3A0x86ae1964522bfd37!2siZoom%20Limited!5e0!3m2!1sen!2sbd!4v1674923467425!5m2!1sen!2sbd"></GoogleMap>
      </div>
    );
};

export default ContactUS;