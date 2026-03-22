export function Footer() {
  return (
    <footer className="bg-white w-full pt-16 md:pt-24">
      <div className="max-w-180 lg:max-w-360 px-4 md:px-10 w-full  mx-auto">
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
              <h4 className="font-medium! txt-heading text-black text-base mb-4">
                Pages
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm text-body flow hover:text-black transition"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
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
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-sm text-body flow hover:text-black transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
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
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  </a>
                </li>
               
                <li>
                  <a
                    href="#"
                    className="text-gray-600 text-body flow text-sm hover:text-black transition"
                  >
                    Support@gmail.com
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
          <h1 className="text-[30vw] font-[1000] text-gray-200! txt-heading">
            lucklife
          </h1>
        </div>
      </div>
    </footer>
  );
}
