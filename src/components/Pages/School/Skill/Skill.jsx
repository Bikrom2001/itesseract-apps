import React from "react";
import './Skill.css';
import mit from '../../../../Images/icons/mit-scratch.png';
import mitApp from '../../../../Images/icons/mit-app-inventor.png';
import web from '../../../../Images/icons/web-dev (1).svg';
import python from '../../../../Images/icons/python.svg';
import Arduino from "../../../../Images/icons/arduino.svg";
import Robotics from "../../../../Images/icons/skillicon2.png";
import science from "../../../../Images/icons/skillicon3.png";
import artificial from "../../../../Images/icons/skillicon1.png";

const Skill = () => {


  return (
    <div>
      <section className="py-14">
        <div className="container mx-auto">
          <div className="text-center lg:w-[710px] mx-auto w-full">
            <h1 className="text-[#1bb57b] mb-5 text-4xl font-semibold">
              Skills you will get
            </h1>
            <p className="mb-1 text-gray-500">
              All you need to get started studying is the right frame of mind.
              As a student at iTesseract, you'll be guided by outstanding
              instructors and a well-established curriculum to master in
              computer science.
            </p>
          </div>
        </div>
      </section>
      <section class="pb-14">
        <div class="container px-6 mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="border">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img src={mit} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      MIT Scratch
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border">
                <div className="flex items-center justify-center">
                  <div className="py-16 text-center">
                    <img src={mitApp} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      MIT App Inventor
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border">
                <div className="flex items-center justify-center">
                  <div className="py-16 text-center mx-auto">
                    <img width="120px" src={web} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Web Development
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img width="83px" src={python} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Python
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-t-0">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img width="83px" src={Arduino} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Arduino
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-t-0">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img width="62px" src={Robotics} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Robotics & IoT
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-t-0">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img width="83px" src={science} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Data Science
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border border-t-0">
                <div className="flex items-center justify-center">
                  <div className="py-16">
                    <img width="83px" src={artificial} alt="icons" />
                    <h1 className="mt-1 text-center font-bold text-xl">
                      Artificial Intelligence
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
