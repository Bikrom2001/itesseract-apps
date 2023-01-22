import React from "react";
import "./AdBoard.css";

const AdBoard = () => {

  const teamMembers = [
    {
      id: "01",
      name: "Sazzad Hossain, Ph.D.",
      img: `https://i.ibb.co/rw8YvVV/sazzad-sir.jpg`,
      title: "Chief Advisor",
    },
    {
      id: "02",
      name: "Professor Vincent Chang, PhD",
      img: "https://i.ibb.co/m5YYBNM/Professor-Vincent-Chang.jpg",
      title: "Vice Chancellor",
    },
    {
      id: "03",
      name: "Dr. Lafifa Jamal",
      img: "https://i.ibb.co/Wv8M1r9/Dr-Lafifa-Jamal.jpg",
      title: "Professor",
    },
    {
      id: "04",
      name: "Prof. DR. DIP NANDI",
      img: "https://i.ibb.co/KsTjYYB/director-dip.png",
      title: "Professor",
    },
  ];


  return (
    <div className="Ad_Boarder_bg">
      <div className="py-24">
        <div className="text-center ">
          <h1 className="text-[#3d53eb] font-semibold mb-4 md:text-4xl text-3xl">
            Advisory Board
          </h1>
          <p className="text-gray-400">
            iTesseract Squad is a multifaceted professional team.
          </p>
        </div>
        <div className="py-10">
          <section class="">
            <div class="container px-6 mx-auto">
              <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-4">
                {teamMembers?.map((teamMember, i) => (
                  <>
                    <div class="space-y-3">
                      <div className="cursor-pointer">
                        <img
                          className="rounded-lg hover:-translate-y-2 duration-200 ease-in-out shadow-lg w-full object-cover"
                          src={teamMember.img}
                          alt=""
                        />
                        <div className="text-center">
                          <h1 className="text-2xl font-bold mt-1">
                            {teamMember?.name}
                          </h1>
                          <p className="text-gray-400">{teamMember?.title}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdBoard;
