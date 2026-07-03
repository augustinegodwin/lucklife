import Image from 'next/image';
// import heroImage from '../../assets/images/heroBg.avif'
import Button from "../button";

export default function Hero() {
  return (
    <section className="w-full bg-[#FCFCFC] flex justify-center">
      <div className="gap-20 flex max-w-360 w-full  flex-col pt-50 pb-[10]">
        <div className="flex max-w-180 lg:max-w-full w-full lg:justify-between flex-col lg:flex-row px-4 md:px-10 gap-6 items-start lg:items-center mx-auto">
          {/* Left Column - Headline */}
          <div>
            <h1 className="txt-heading text-[40px] md:text-[64px]">
              Promoting health,<br />
              Preserving culture,<br />
              Benefiting lifes.
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="flex h-full flex-col justify-end gap-6 max-w-md">
            {/* Social Proof / Rating Badge */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-amber-500">
                {/* Standard SVG Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-900">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-body text-gray-400">Trusted by over 10,000+ professionals</p>
            </div>

            {/* High-Converting Copy */}
            <p className="text-gray-600 text-lg leading-relaxed text-body">
              Invest in your vitality. Discover a premium selection of Lucklife wellness formulas, herbal teas, and immune-boosting liquids engineered to restore your body’s natural energy and balance.
            </p>

            {/* Action-Oriented CTA Button */}
            <div className="pt-2">
              <Button action="/products" value="View or Products" />
            </div>
          </div>
        </div>
        <div className="w-full p-[10px]">
          <div className=" hero-img w-full border border-gray-100 h-125 rounded-[30px]">
            <Image              
              src={'/baackground.png'}
              alt="Hero Image"
              sizes="100vw"
              width={100}
              height={100}
              className="w-full  h-full object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
