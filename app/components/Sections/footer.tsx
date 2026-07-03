import { Camera, MessageCircle } from "lucide-react";

import lucklife from "../../assets/images/LuckLife@2x.png"
import Image from "next/image";
function Footer() {
  return (
    <footer className="bg-white w-full pt-16 md:pt-24">
  <div className="max-w-180 lg:max-w-360 px-4 md:px-10 w-full mx-auto">
    {/* Top Section: Logo, Quote, and Navigation */}
    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-20">
      {/* Left Section */}
      <div className="flex-1">
       
        <p className="text-base md:text-lg text-gray-700 max-w-xs text-body mb-8">
          "Promoting health, Preserving culture Benefiting lifes.
        </p>
        <a 
          href="tel:+2348000000000" // Swap with your number
          className="inline-block bg-black text-body text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition"
        >
          Purchase now
        </a>
      </div>

      {/* Right Section: Navigation */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <h4 className="font-medium! txt-heading text-black text-base mb-4">
            Pages
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="/#" className="text-gray-600 text-body flow text-sm hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-gray-600 text-sm text-body flow hover:text-black transition">
                Products
              </a>
            </li>
            <li>
              <a href="/404" className="text-gray-600 text-body flow text-sm hover:text-black transition">
                404
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-medium! txt-heading text-black text-base mb-4">
            Social Links
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="https://www.instagram.com" className="text-gray-600 text-body flow text-sm hover:text-black transition">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" className="text-gray-600 text-sm text-body flow hover:text-black transition">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/your-number" className="text-gray-600 text-body flow text-sm hover:text-black transition">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-medium! txt-heading text-black text-base mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <span className="text-gray-600 text-body flow text-sm">
                Kubwa, Abuja, Nigeria
              </span>
            </li>
            <li>
              <a href="mailto:lucklife@gmail.com" className="text-gray-600 text-body flow text-sm hover:text-black transition">
                lucklife@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-200 my-12"></div>

    {/* Large Responsive Text */}
    <div className="overflow-hidden w-full">
      <Image src={lucklife} alt="BeeGee" className="w-fill h-auto "/>
    </div>
  </div>
</footer>
  );
}
export default Footer