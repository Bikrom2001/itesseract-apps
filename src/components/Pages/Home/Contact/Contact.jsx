import React from "react";

const Contact = () => {
  return (
    <section class="bg-white lg:flex lg:justify-center lg:items-center">
      <div className="container px-6 mx-auto space-y-6 lg:px-8 lg:space-y-8">
        <div class="overflow-hidden bg-[#F6F9FF] py-10 md:py-20 md:px-14 px-4 lg:flex lg:w-full lg:items-center  lg:rounded-xl">
          <div class="lg:w-1/2">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl">
                Develop Analytical Thinking in{" "}
                <br className="hidden md:block" /> Your Child By
                <span className="theme-primary-color"> Coding</span>
              </h2>
              <p className="mt-4">
                online and offline coding classes for children and adolescents{" "}
                <br className="hidden md:block" />
                ages 5 to 14
              </p>
            </div>
          </div>

          <div class="max-w-xl px-0 md:px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <fieldset className="w-full space-y-1 dark:text-black">
              <div className="flex shadow-lg">
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Phone Number"
                  className="flex flex-1 p-5 sm:text-sm focus:ring-inset dark:border-gray-700 rounded-l-md dark:text-black dark:bg-white focus:ring-violet-400"
                />
                <button
                  type="button"
                  className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md theme-primary-color-bg text-white"
                >
                  Book Demo Class
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
