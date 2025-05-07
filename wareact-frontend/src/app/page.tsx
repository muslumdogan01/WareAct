import Content from "@/components/content/page";
import Dashboard from "@/components/dashboard/page";
import Hero from "@/components/header/hero/page";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col  lg:-mt-44 ">
      <Hero />
      <Dashboard />
      <Content />
    </div>
  );
}
