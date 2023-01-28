import React from 'react';
import './ContactFrom.css';

const ContactFrom = ({title}) => {
    return (
      <div className="bg-gray-100 pb-10">
        <div className="text-center">
          <h1 className="text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl">
            {title}
          </h1>
        </div>
        <section className="p-6  dark:text-gray-50">
          <form className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-6 place-items-center gap-6 ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-12">
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full input-from-contorl p-3 rounded-md bg-white text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md input-from-contorl  text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="phone"
                    type="text"
                    placeholder="Your Number"
                    className="w-full p-3 rounded-md input-from-contorl text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-md input-from-contorl text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <textarea
                    id="bio"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-md input-from-contorl text-gray-900"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <div className="flex items-center gap-3">
                    <span>
                      <input type="checkbox" name="teramAndCondition" id="" />
                    </span>
                    <p className="text-gray-400">
                      I agree to the terms of data processing.{" "}
                      <a
                        className="text-[#1bb57b] font-medium"
                        href="https://google.com"
                      >
                        Terms and Conditions
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="text-center">
                    <button
                      type="button"
                      className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#1bb57b] dark:text-white"
                    >
                      Send A Message
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default ContactFrom;