'use client'

import { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo/logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed z-50 top-4">
      <div className="w-full max-w-360 px-4 md:px-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>
          
          <nav className="relative">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5 bg-[#e5e7eb] py-4 px-6 rounded-4xl">
              <Link href="/#" className="text-gray-700 text-body hover:text-gray-900">Home</Link>
              <Link href="#" className="text-gray-700 text-body hover:text-gray-900">Values</Link>
              <Link href="#" className="text-gray-700 text-body hover:text-gray-900">Contact</Link>
              <Link href="#" className="text-gray-700 text-body hover:text-gray-900">Products</Link>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden size-10 rounded-md bg-gray-200 justify-center items-center hover:bg-gray-300 transition-colors"
            >
              {isOpen ? (
                <X size={20} className="text-gray-600" />
              ) : (
                <Menu size={20} className="text-gray-600" />
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl py-2 flex flex-col md:hidden">
                <Link href="/#" onClick={() => setIsOpen(false)} className="px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Home</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Values</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Products</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Contact</Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;