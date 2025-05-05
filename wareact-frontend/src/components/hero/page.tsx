import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="w-full justify-between items-center flex flex-col lg:flex-row px-8  mt-9">
       

          <h1 className="text-4xl md:text-[56px] hidden lg:block text-left font-semibold leading-[1.22] text-black">
            3PL Warehouse <br /> Management Software <br /> for Next Level Logistics
          </h1>
      
        <h1 className="text-4xl md:text-[56px] block lg:hidden text-center font-semibold leading-[1.22] text-black">
          Precision-Driven 3PL Software for Next-Level Logistics
        </h1>
        <div className="flex flex-col lg:items-start justify-center items-center">
          <p className="text-center lg:text-left mt-[10px] text-sm leading-[1.22] font-normal">
            Built for 3PL warehouses, our software <br /> automates everything
            from inventory tracking <br /> to billing—helping you deliver
            faster, smarter, <br />
            and more accurate fulfillment.
          </p>
          <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] block lg:hidden mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
            Book a Demo
          </button>
          <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] hidden lg:block mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
