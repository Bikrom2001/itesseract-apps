import React from "react";
import Title from "../../../Common/Title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="pt-14 pb-4">
      <div className="container mx-auto">
        <div class="overflow-hidden bg-[#d9e1fa] py-8 md:py-8 md:px-14 px-4 lg:w-full lg:rounded-xl">
          <Title
            title="Lorem"
            text="ipsum"
            details="course modules, teacher training, and books for institutes are all included."
          ></Title>
          <div className="">
            <>
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1080: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialCard
                    img={`https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    text={`"Thank you very much for your help. This is exactly what I was looking
          for. You will not regret it. It really saves me time and effort. Skill
          is what our business lacked".`}
                    author={`Leroy Jenkins`}
                    company={`CTO of Company Co.`}
                  ></TestimonialCard>
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    text={`"Thank you very much for your help. This is exactly what I was looking
          for. You will not regret it. It really saves me time and effort. Skill
          is what our business lacked".`}
                    company={`arsindesigner`}
                    author={`Avatar Name`}
                    img={`https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                  ></TestimonialCard>
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    text={`"Thank you very much for your help. This is exactly what I was looking
          for. You will not regret it. It really saves me time and effort. Skill
          is what our business lacked".`}
                    author={`Leroy Jenkins`}
                    company={`CTO of Company Co.`}
                    img={`https://images.pexels.com/photos/4474047/pexels-photo-4474047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                  ></TestimonialCard>
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    text={`"Thank you very much for your help. This is exactly what I was looking
          for. You will not regret it. It really saves me time and effort. Skill
          is what our business lacked".`}
                    author={`Leroy Jenkins`}
                    company={`CTO of Company Co.`}
                    img={`https://images.pexels.com/photos/5997189/pexels-photo-5997189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                  ></TestimonialCard>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
