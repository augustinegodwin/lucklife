import Link from "next/link";
import Button from "../button";

export default function Hero() {
  return (
    <section className="w-full bg-[#FCFCFC] flex justify-center">
      <div className="gap-20 flex max-w-360 w-full  flex-col pt-50 pb-[10]">
        <div className="flex max-w-180 lg:max-w-full w-full lg:justify-between flex-col lg:flex-row px-4 md:px-10 gap-6 items-start lg:items-center mx-auto">
          {/* Left Column - Headline */}
          <div>
            <h1 className="txt-heading text-[40px] md:text-[64px]">
              Promoting health, <br />
              Preserving culture <br />
              Benefiting lifes.
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="flex h-full flex-col justify-end gap-10 max-w-100">
            <p className="flow text-gray-500 text-body text-lg leading-relaxed ">
              Connect with top companies and explore roles suited to your skills
              and career goals.
            </p>
            <Button value="Explore Products" />
          </div>
        </div>
        <div className="w-full p-[10px]">
          <div className="bg-cover hero-img w-full h-125 rounded-[30px]"></div>
        </div>
      </div>
    </section>
  );
}
