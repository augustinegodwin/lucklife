import Image from "next/image";
import Hero from "./components/Sections/hero";
import Value from "./components/Sections/value";
import Products from "./components/Sections/products";
Hero
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col gap-22.5">
        <Hero/>
        <Value/>
        <Products/>
      </div>
      
    </main>
  );
}
