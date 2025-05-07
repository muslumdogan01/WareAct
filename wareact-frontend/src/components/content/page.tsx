import React from "react";
import ReusableSlider from "./cards/page";
import DeliveryInfo from "./deliveryInfo/page";

const Content = () => {
  return (
    <div className="w-full h-full flex flex-col  bg-[#F3F4F6] lg:pt-[360px] px-4 lg:px-0  relative">
      <div className="md:flex md:w-full md:justify-center md:items-center ">
        <ReusableSlider iconPosition="top" />
      </div>
      <DeliveryInfo/>
    </div>
  );
};

export default Content;
