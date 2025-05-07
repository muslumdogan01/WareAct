"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./sliderCard";

const ReusableSlider = ({
  iconPosition,
}: {
  iconPosition?: "top" | "bottom";
}) => {
  const data = [
    {
      title: "Suspendisse mattis non leo",
      icon: "/icons/content/blueCircle.svg",
      width: "w-[200px]",
      height: "h-[240px]",
    },
    {
      title: "Suspendisse mattis non leo",
      icon: "/icons/content/blueCircle.svg",
      width: "w-[200px]",
      height: "h-[240px]",
    },
    {
      title: "Suspendisse mattis non leo",
      icon: "/icons/content/blueCircle.svg",
      width: "w-[200px]",
      height: "h-[240px]",
    },

  ];

  return (
    <div className="w-full overflow-hidden mt-[50px] md:flex md:w-full md:justify-center md:items-center bg-[#F3F4F6]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        breakpoints={{
          768: {
            
            allowTouchMove: false,
          },
        }}
        grabCursor
      
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[calc(100vw-80px)] max-w-[300px]"
            style={{
              boxShadow: "0px 20px 80px -20px rgba(0, 0, 0, 0.1)",
            }}
            
          >
            
            <SliderCard
              title={item.title}
              icon={item.icon}
              iconPosition={iconPosition}
              width={item.width}
              height={item.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ReusableSlider;
