import React from 'react';
import './MangTeam.css';

const MangTeam = () => {

     const teamMembers = [
       {
         id: "01",
         name: "Abdul Hamid",
         img: `https://i.ibb.co/crxbtj2/abdulhamid.png`,
         title: "CEO",
       },
       {
         id: "02",
         name: "Amit Ghosh",
         img: "https://i.ibb.co/q0Cj1Bf/amit.png",
         title: "Founder & CTO",
       },
       {
         id: "03",
         name: "Uday",
         img: "https://i.ibb.co/C2GCnxh/uday.png",
         title: "Lead, Innovation & Operations",
       },
       {
         id: "04",
         name: "Kashafaddouza Chowdhury",
         img: "https://i.ibb.co/44QBhzc/sujon.png",
         title: "Lead, Finance & Admin",
       },
     ];

    return (
      <div className="mangment_Boarder_bg">
        <div className="py-24">
          <div className="text-center ">
            <h1 className="text-[#3d53eb] font-semibold mb-4 md:text-4xl text-3xl">
              Management Team
            </h1>
            <p className="text-gray-400">iTesseract management team</p>
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
                            className="rounded-lg shadow-lg w-full object-cover"
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

export default MangTeam;