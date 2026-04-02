import Image from "next/image";
import Logo from "../assets/logo/logo.png";
import Link from "next/link";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full fixed z-10 top-4">
      <div className="w-full max-w-360 px-4 md:px-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>
          <nav>
           <div className="hidden md:flex space-x-5 bg-[#e5e7eb60] py-4 px-6 backdrop-blur-2xl rounded-4xl">
             <a
              href="/#"
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
           </div>
           <div className="flex md:hidden size-10 rounded-md bg-gray-200 justify-center items-center">
            <Menu
              size={20}
              className="text-gray-600"
            />
           </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
