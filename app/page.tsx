import Image from "next/image";
import Hero from "./components/Sections/hero";
import Value from "./components/Sections/value";
import Products from "./components/Sections/products";
import TextimonialSection from "./components/Sections/textimonialSection";
import Gallery from "./components/Sections/gallery";
import ContactUs from "./components/Sections/contactUs";
import { Footer } from "./components/Sections/footer";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col gap-22.5">
        <Hero/>
        <Value/>
        <Products/>
        <TextimonialSection/>
        <Gallery/>
        <ContactUs/>
      </div>
      <Footer/>
    </main>
  );
}
