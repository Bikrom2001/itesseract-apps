import React from "react";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Images/main-logo.svg";

const Footers = () => {
  return (
    <section>
      <footer className="p-6 bg-[#ADFFE0] dark:text-gray-100">
        <div className="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              aria-label=" iTesser-act"
              title=" iTesser-act"
              className="inline-flex items-center"
            >
              <img className="w-48" src={logo} alt="logo" />
            </Link>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
              <Link to="">
                <div className="flex items-center gap-2">
                  <FaLocationArrow size="18" color="#0B7077"></FaLocationArrow>
                  <p className="text-font footer-color2 font-semibold">
                    Address :{" "}
                  </p>
                </div>
              </Link>
              <p className="text-font text-sm footer-color2 font-semibold">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
              </p>
              <Link to="">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt color="#0B7077" size="18"></FaPhoneAlt>
                  <p className="text-font footer-color2 font-semibold">
                    0125662256554
                  </p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 footer-color2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-font footer-color2 font-semibold">
                    Response hours: 24/7
                  </p>
                </div>
              </Link>
              <Link to="">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 footer-color2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="text-font footer-color2 font-semibold">
                    Email: info@itesseract.com
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium footer-color">Categories</h2>
            <div className="flex flex-col space-y-2 footer-color2 text-sm font-semibold">
              <Link to="">Counseling</Link>
              <Link to="">Health and fitness</Link>
              <Link to="">Individual development</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium footer-color">Links</h2>
            <div className="flex flex-col space-y-2 text-sm footer-color2 font-semibold">
              <Link to="/about">About us</Link>
              <Link to="/blog">blog</Link>
              <Link to="">Frequently Asked Questions</Link>
              <Link to="">Terms and Conditions</Link>
              <Link to="">contact us</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium footer-color">
              Stay up to date with the latest courses
            </h2>
            <div className="">
              <fieldset className=" dark:text-gray-100">
                <div className="flex">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className=" p-4 text-right border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-700 dark:text-black dark:bg-white focus:ring-violet-400"
                  />
                  <button
                    type="button"
                    className=" px-4 p-4 sm:text-sm rounded-r-md footer-color-bg cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center py-4 text-sm theme-primary-color-bg">
        <span className="text-white font-medium text-lg">
          Copyright @ 2022 iTesseract Technologies Ltd
        </span>
      </div>
    </section>
  );
};

export default Footers;
