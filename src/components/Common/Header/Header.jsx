import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import logo from '../../../Images/main-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 bg-white mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-14">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label=" iTesser-act"
          title=" iTesser-act"
          className="inline-flex items-center"
        >
          <img className="w-48" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/home"
              aria-label="Home"
              title="Home"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="About"
              title="About"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              aria-label="Product"
              title="Product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <p> Product </p>
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              aria-label="Team"
              title="Team"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              aria-label="Courses "
              title="Courses "
              className="font-medium dropdown dropdown-hover tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Courses &raquo;
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-300 rounded-sm w-52"
              >
                <li>
                  <Link to="/school">School</Link>
                </li>
                <li>
                  <Link to="/">University</Link>
                </li>
                <li>
                  <Link to="/">Certification</Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              aria-label="Blog "
              title="Blog "
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-label="Contact "
              title="Contact us "
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label=" iTesser-act"
                      title=" iTesser-act"
                      className="inline-flex items-center"
                    >
                      <img className="w-48" src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 text-center">
                    <li>
                      <Link
                        to="/about"
                        aria-label="About"
                        title="About"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/product"
                        aria-label="Product"
                        title="Product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        <p> Product </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/team"
                        aria-label="Team"
                        title="Team"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        aria-label="Courses "
                        title="Courses "
                        className="font-medium dropdown dropdown-bottom tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Courses &raquo;
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
                        >
                          <li>
                            <Link to="/school">School</Link>
                          </li>
                          <li>
                            <Link to="/">University</Link>
                          </li>
                          <li>
                            <Link to="/">Certification</Link>
                          </li>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Blog "
                        title="Blog "
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        aria-label="contact"
                        title="Contact us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
