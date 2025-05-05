import Content from "@/components/content/page";
import Hero from "@/components/hero/page";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col relative z-40 ">
      <Hero />
      <Content/>
    </div>
  );
}
