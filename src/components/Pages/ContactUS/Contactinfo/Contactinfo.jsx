import React from "react";
import "./Contactinfo.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contactinfo = ({ title, details, address, phone, email }) => {
  return (
    <div className="bg-gray-100">
      <div className="text-center pt-12">
        <h1 className="text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl">
          {title}
        </h1>
        <p className="text-gray-400">{details}</p>
      </div>
      <section class="">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div class="max-w-2xl px-10 py-10 bg-white rounded-lg shadow-md ">
                <div className="flex items-center gap-5">
                  <FaMapMarkerAlt size="50px" color="#1bb57b"></FaMapMarkerAlt>
                  <p className="text-gray-500 font-medium">{address}</p>
                </div>
              </div>
            </div>

            <div>
              <div class="max-w-2xl px-10 py-10 bg-white rounded-lg shadow-md ">
                <div className="flex items-center gap-5">
                  <FaPhoneAlt size="50px" color="#1bb57b"></FaPhoneAlt>
                  <p className="text-gray-500 font-medium">{phone}</p>
                </div>
              </div>
            </div>

            <div>
              <div class="max-w-2xl px-10 py-10 bg-white rounded-lg shadow-md ">
                <div className="flex items-center gap-5">
                  <HiOutlineMail size="50px" color="#1bb57b"></HiOutlineMail>
                  <p className="text-gray-500 font-medium">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactinfo;
