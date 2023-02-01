import React from 'react';

const SchoolBanner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/xSy3mwr/Robot.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl font-bold">
              Take a trip to the wonderful world of programming
            </h1>
            <p className="mb-5">
              Certificate Programs for Children Ages 5 and Up. The top online
              courses are at your fingertips, so you can study from the comfort
              of your home or at our Lab.more than 99% of students rate this
              course content and results as Super
            </p>
            <button className="px-8 py-3 font-semibold rounded dark:bg-[#1bb57b] dark:text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    );
};

export default SchoolBanner;