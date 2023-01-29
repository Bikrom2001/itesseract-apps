import React from 'react';
import { Link } from 'react-router-dom';

const IHero = () => {
    return (
      <section class="bg-white">
        <div class="container px-6 py-6 mx-auto">
          <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p class="text-xl text-[#1bb57b] uppercase  font-bold">iHero</p>
              <Link
                to="/"
                class="block mt-3 text-2xl font-semibold text-gray-700 hover:underline "
              >
                Tools for become IoT Hero
              </Link>

              <p class="mt-3 text-sm text-gray-500 text-justify  md:text-base">
                iHero is an experimental wonder box for learning about the
                internet of things and fundamental data science. All-in-one kit
                includes four sensors, two motors, a propeller, an AC to DC
                converter, and an iHero board. This wonderful STEM box may be
                used to create smart homes, smart agriculture, and weather
                monitoring projects.
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold rounded dark:bg-[#1bb57b] dark:text-white"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="px-8 py-3 ml-6 font-semibold border rounded dark:border-[#1bb57b] dark:text-[#1bb57b]"
                >
                  Explore Now
                </button>
              </div>
            </div>
            <img
              class=" w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="https://i.ibb.co/ynwCNd4/mockup.png"
              alt="ihero-box"
            />
          </div>
        </div>
      </section>
    );
};

export default IHero;