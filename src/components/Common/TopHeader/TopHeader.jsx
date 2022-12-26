import React from "react";
import "../../css/Root.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div>
      <div className="theme-primary-color-bg py-2">
        <div className="container px-6 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaFacebook
                className="cursor-pointer"
                size="18"
                color="#ffffff"
              ></FaFacebook>
              <FaTwitter
                className="cursor-pointer"
                size="18"
                color="#ffffff"
              ></FaTwitter>
              <FaLinkedin
                className="cursor-pointer"
                size="18"
                color="#ffffff"
              ></FaLinkedin>
            </div>
            <div className="flex items-center flex-wrap gap-3">
              <p className="text-font hidden md:block text-white">Book for demo class!</p>
              <button className="theme-secondary-color-bg px-3 py-1 text-sm rounded-full">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
