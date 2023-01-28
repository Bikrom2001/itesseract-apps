import React from 'react';

const Testimonial = () => {
    return (
      <div>
        <section className="py-16">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-col items-center w-full  space-y-4 rounded-md lg:h-full  text-black">
              <img
                src="https://i.ibb.co/BCrGn0g/sazzad-sir.jpg"
                alt=""
                className="w-20 h-20 rounded-full dark:bg-gray-500"
              />
              <div className="text-center text-lg dark:text-gray-400">
                <p className="text-black font-semibold ">
                  Prof.Sazzad Hossain, PH.D
                </p>
                <p className="font-medium text-gray-600 text-base">
                  Chief Advisor
                </p>
              </div>
              <blockquote className="max-w-2xl text-base italic text-gray-500 font-medium text-center">
                <em>
                  "This is an excellent platform for learning robotics and
                  coding. After completing an online coding class, my children
                  are doing quite well. With the help of robots, my daughter is
                  now capable of resolving little issues".
                </em>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Testimonial;