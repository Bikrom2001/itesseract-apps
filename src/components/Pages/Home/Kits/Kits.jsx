import React from "react";
import Title from "../../../Common/Title/Title";
import Services from "../Services/Services";

const Kits = () => {
  const datas = [
    {
      id: "01",
      img: "https://images.pexels.com/photos/9028881/pexels-photo-9028881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "IPlay A Tool For University",
      details:
        "Learn the fundamentals of engineering, Robotics, data processing & data science and the Internet of Things and fourth industrial 4.0 skills to get a head start on a career in technology.",
    },
    {
      id: "02",
      img: "https://images.pexels.com/photos/8566467/pexels-photo-8566467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "IPlay A Tool For University",
      details:
        "Learn the fundamentals of engineering, Robotics, data processing & data science and the Internet of Things and fourth industrial 4.0 skills to get a head start on a career in technology.",
    },
    {
      id: "03",
      img: "https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "IPlay A Tool For University",
      details:
        "Learn the fundamentals of engineering, Robotics, data processing & data science and the Internet of Things and fourth industrial 4.0 skills to get a head start on a career in technology.",
    },
  ];

  return (
    <section class="background-color">
      <div class="container px-6 py-10 mx-auto">
        <Title
          title="AI & robotics"
          text="educational kits"
          details="course modules, teacher training, and books for academic institutes are all included."
        ></Title>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {datas?.map((data) => (
            <>
              <div class="flex flex-col items-center  text-center bg-gray-100 rounded-xl">
                <img
                  class="object-cover rounded-tr-xl rounded-tl-xl w-full h-64"
                  src={data.img}
                  alt="avatar"
                ></img>
                <div className="p-6">
                  <h1 class="text-2xl font-semibold text-black capitalize">
                    {data.title}
                  </h1>

                  <p class="text-gray-500 text-sm mt-2">{data.details}</p>
                  <button className="theme-primary-color-bg px-5 py-1 mt-2 text-white rounded-md">
                    View
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Services></Services>
    </section>
  );
};

export default Kits;
