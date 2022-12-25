import React from "react";
import image from '../../../../Images/img.PNG';
import Testimonial from "../Testimonial/Testimonial";

const Features = () => {
  return (
    <div>
      <section class=" pt-16 lg:flex lg:justify-center lg:items-center">
        <div className="container mx-auto">
          <div class="overflow-hidden bg-[#F7F9FF] py-8 md:py-8 md:px-14 px-4 lg:flex lg:w-full lg:items-center  lg:rounded-xl">
            <div class="lg:w-1/2">
              <img
                src={image}
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video"
              />
            </div>

            <div class="max-w-xl pl-0 lg:pl-4 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-3xl font-extrabold mb-7">
                <span className="theme-primary-color">How Does</span>
                <span className="theme-secondary-color"> it work?</span>
              </h2>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 footer-color">
                    The standard Lorem Ipsum
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 footer-color">
                    Lorem ipsum dolor sit amet, consectetur
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    dipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                </div>
              </div>
              <div className="flex mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#1bb57b"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 footer-color">
                    Tincidunt eget nullam non nisi est
                  </h4>
                  <p className="mt-2 dark:text-gray-400">
                    Ipsum dolor sit amet consectetur adipiscing elit. Mauris
                    vitae ultricies leo integer malesuada nunc vel risus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Features;
