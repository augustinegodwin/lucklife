import React from 'react'

export default function GalleryGrid() {
  return (
    <div className="grid w-full grid-cols-2 md:grid-cols-4 h-[300px] lg:h-137.5 grid-rows-4 md:grid-rows-2 gap-3 lg:gap-5">
        <div className="bg-gray-200 rounded-[20px] md:col-span-2 row-span-2"></div>
        <div className="bg-gray-200 rounded-[20px] row-span-2 md:col-span-1 md:row-span-1"></div>
        <div className="bg-gray-200 rounded-[20px] col-span-1 md:row-span-1 row-span-2"></div>
        <div className="bg-gray-200 rounded-[20px] col-span-1 md:row-span-1 row-span-2"></div>
        <div className="bg-gray-200 rounded-[20px] col-span-1 row-span-1"></div>
    </div>
  )
}
