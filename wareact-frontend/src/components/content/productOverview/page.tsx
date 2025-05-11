import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <section className="w-full  bg-[url('/images/content/productBg.png')] border-t border-black bg-no-repeat bg-cover hidden lg:block">
      <div className="max-w-[1300px] mx-auto overflow-hidden flex flex-col lg:flex-row  items-center pt-[122px]">
        {/* Görsel */}
        <div className="-ml-129 flex-shrink-0">
          <Image
            src="/images/content/product1.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full  text-center space-x-[24px]  lg:text-left flex">
          <div className="min-w-[215px]">
            <h2 className="text-3xl text-right font-semibold">
              A more <br className="hidden lg:block" /> innovative <br />{" "}
              experience
            </h2>
            <p className="text-base text-right text-gray-600 leading-relaxed">
              Possimus cicuta non <br /> depromo tamquam cornu <br /> abbas unus
              cinis verbum <br />
              tamdiu damnatio.
            </p>

          </div>
          <div className="w-full ">
          <Image
            src="/icons/content/productsLine.svg"
            width={60}
            height={22}
            alt="Dashboard Preview"
         
          />
        </div>
        </div>
        <div className="-mr-32 flex-shrink-0">
          
          <Image
            src="/images/content/product2.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
