import React from 'react';

const ContactFrom = ({title}) => {
    return (
      <div className="bg-gray-100">
        <div className="text-center">
          <h1 className="text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl">
            {title}
          </h1>
        </div>
      </div>
    );
};

export default ContactFrom;