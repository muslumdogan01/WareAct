import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" w-full hidden lg:flex bg-[#065AF1]  justify-center items-baseline  min-h-[590px]   relative">
      <div className="absolute -top-70 lg:block hidden  -right-30 z-40 overflow-hidden   w-[422px] xl:h-[571px]">
        <Image
          src="/icons/content/square.svg"
          alt="square"
          fill
          className="object-contain"
        />
      </div>
      <section className="flex justify-center items-center pt-52 relative z-50">
        <div className="w-full max-w-[1016px] relative">
          <div className="absolute top-[-28px] left-[-105px]">
            <Image
              src="/icons/content/dots.svg"
              width={250}
              height={75}
              alt="dots"
            />
          </div>
          <Image
            src="/images/content/dashboard.png"
            alt="Dashboard preview"
            width={1016}
            height={674}
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-0 right-0 xl:right-[-105px]">
            <Image
              src="/icons/content/rightDots.svg"
              width={250}
              height={75}
              alt="dots"
              className="h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
