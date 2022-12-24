import React from "react";

const Banner = () => {
  return (
    <section class="bg-[#F9F9F9]">
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-5  xl:gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div class="flex flex-col items-center justify-center">
            <div className="text-center md:text-left">
              <h1 class="font-size footer-color capitalize">
                Take a trip to the wonderful world of programming
              </h1>

              <p class="footer-color  text-justify mt-6 dark:text-gray-300">
                Certificate Programs for Children Ages 5 and Up. The top online
                courses are at your fingertips, so you can study
              </p>
            </div>
          </div>

          <div class="flex flex-col items-center text-center">
            <div
              aria-hidden="true"
              className="mt-10 lg:mt-0 cursor-pointer relative"
            >
              <img
                src="https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
              <div className="overlay">
                <div className="absolute bottom-14 left-5">
                  <p className="text-left theme-secondary-color hover:text-white font-bold text-2xl">
                    For <br /> University Student
                  </p>
                  <button
                    className="theme-secondary-color-bg px-7 hover:bg-white py-1 mt-3 rounded-full"
                    type="button"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center xl:mt-10 text-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0 relative">
              <img
                src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="roobt"
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
              <div className="overlay">
                <div className="absolute bottom-14 left-5">
                  <p className="text-left theme-secondary-color hover:text-white font-bold text-2xl">
                    For <br /> Highschool
                  </p>
                  <button
                    className="theme-secondary-color-bg px-7 hover:bg-white py-1 mt-3 rounded-full"
                    type="button"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center text-center">
            <div aria-hidden="true" className="mt-10 lg:mt-0 relative ">
              <img
                src="https://images.pexels.com/photos/7862494/pexels-photo-7862494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="mx-auto rounded-lg shadow-lg bg-gray-900/40"
              />
              <div className="overlay">
                <div className="absolute bottom-14 left-5">
                  <p className="text-left theme-secondary-color hover:text-white font-bold text-2xl">
                    For <br /> Middleschool
                  </p>
                  <button
                    className="theme-secondary-color-bg px-7 hover:bg-white py-1 mt-3 rounded-full"
                    type="button"
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
