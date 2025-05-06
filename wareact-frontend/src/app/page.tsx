import Content from "@/components/content/page";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col relative lg:-mt-44   bg-[#F3F4F6]">
      <div className="w-full hidden lg:flex bg-[#065AF1]  justify-center items-baseline  min-h-[590px]   relative">
        <section className="flex justify-center items-center pt-52 relative z-50">
          <div className="w-full max-w-[1016px] relative">
            <div className="absolute top-[-15px] left-[-100px]">
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
      <Content />
    </div>
  );
}
