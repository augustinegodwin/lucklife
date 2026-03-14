export function Footer() {
  return (
    <footer className="bg-white w-full px-6 md:px-12 lg:px-16 pt-16 md:pt-24">
      <div className="max-w-360 w-full mx-auto">
        {/* Top Section: Logo, Quote, and Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-20">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6 flex flex-row gap-2">
                <div className="size-10 rounded-2xl bg-gray-200"></div>
                <div className="size-10 rounded-2xl bg-gray-200"></div>
                <div className="size-10 rounded-2xl bg-gray-200"></div>
            </div>
            <p className="text-base md:text-lg text-gray-700 max-w-xs text-body  mb-8">
              "The Aura Lamp changed how my living room feels. Simple, stylish.
            </p>
            <button className="bg-black text-body text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition">
              Purchase now
            </button>
          </div>

          {/* Right Section: Navigation */}
          <div className="flex-1 grid grid-cols-3 gap-12">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold txt-heading text-black text-sm mb-4">
                Our Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-black text-sm mb-4">
                Our Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    Featured
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold text-black text-sm mb-4">Learn</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-black transition"
                  >
                    Blog
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
          <h1 className="text-[32vw] font-[1000] text-gray-200! txt-heading">
            lucklife
          </h1>
        </div>
      </div>
    </footer>
  );
}
