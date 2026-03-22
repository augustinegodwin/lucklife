import Image from "next/image";
import Logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="w-full fixed z-10 top-4">
      <div className="w-full max-w-[1440px] mx-auto px-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <Image src={Logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <nav className="flex space-x-5 bg-[#e5e7eb60] py-4 px-6 backdrop-blur-2xl rounded-4xl">
            <a
              href="/"
              className="text-gray-700 text-body flow hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 text-body flow hover:text-gray-900"
            >
              Values
            </a>
            <a
              href="#"
              className="text-gray-700 text-body flow hover:text-gray-900"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-700 text-body flow hover:text-gray-900"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-700 text-body flow hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
