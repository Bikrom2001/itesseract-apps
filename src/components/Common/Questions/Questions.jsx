import React from 'react';

const Questions = ({title, details}) => {
    return (
      <div>
        <div className="container mx-auto">
          <div className="text-center lg:w-[640px] mx-auto w-full">
            <h1 className="text-[#1bb57b] mb-3 text-2xl font-semibold">
              {title}
            </h1>
            <p className="mb-10 text-gray-400">{details}</p>
          </div>
        </div>
        <section className="">
          <div className="container flex flex-col justify-center px-4 pb-12 md:pb-12 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 cursor-pointer font-semibold text-lg py-6 focus:outline-none focus-visible:ring-violet-400">
                  Who is iTesseract best for?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">
                  Suitable for everyone! Whether you've just begun your
                  project-making adventure, are in the midst of it, or are a
                  seasoned hobbyist, when you visit iTesseract, you will not
                  depart empty-handed! For individuals who have just begun their
                  journey through school or college or are already halfway
                  through, the Starter Kit, IoT, AI, Robotics, and Programming
                  is the ideal DIY STEM robot construction kit to ensure a
                  smooth and enjoyable entry into the world of DIY.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 cursor-pointer font-semibold text-lg py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is the minimum age and prerequisite ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">
                  Minimum age recommendation for programming with our robotics
                  tools is five years. However, if you are Little Sheldon, you
                  may use it at any moment after you begin walking. To begin
                  learning and exploring, all you need is a working knowledge of
                  fundamental computer operations; that is, if you can play
                  games or use a computer, you can learn from us
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 cursor-pointer font-semibold text-lg py-6 focus:outline-none focus-visible:ring-violet-400">
                  How to Apply for Admission and Begin Learning at iTesseract
                  Robotics Lab?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">
                  All you have to do is contact our academic counselor @
                  +8801745610020 this phone number or come to our Robotics Lab @
                  iTesseract Technologies Ltd. 151/7(5th Floor), Good Luck
                  Center, Green Road, Dhaka 1205
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Questions;