import React from 'react'

function Navbar() {
  return (
    <div className="w-full fixed">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <h1 className="text-xl font-bold">My App</h1>
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar