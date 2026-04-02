import Image from "next/image";
import Image1 from "../assets/images/image-1.jpeg";
import Image2 from "../assets/images/image-2.jpeg";
import Image3 from "../assets/images/image-3.jpeg";
import Image4 from "../assets/images/image-4.jpeg";

export default function GalleryGrid() {
  return (
    <div className="grid w-full grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-150 gap-4 lg:gap-5">
      <div className="bg-gray-200 rounded-[20px] overflow-hidden lg:col-span-2 lg:row-span-2">
        <Image alt="Gallery image 1" className="size-full object-cover " src={Image1} />
      </div>
      <div className="bg-gray-200 overflow-hidden rounded-[20px] col-span-1 row-span-1">
        <Image alt="Gallery image 2" className="size-full object-cover " src={Image2} />
      </div>
      <div className="bg-gray-200 overflow-hidden rounded-[20px] col-span-1 row-span-1 ">
        <Image alt="Gallery image 3" className="size-full object-cover " src={Image3} />
      </div>
      <div className="bg-gray-200 overflow-hidden rounded-[20px] col-span-1 md:row-span-1">
        <Image alt="Gallery image 4" className="size-full object-cover " src={Image4} />
      </div>
      <div className="bg-gray-200 overflow-hidden  rounded-[20px] col-span-1 row-span-1">
        <Image alt="Gallery image 1" className="size-full object-cover " src={Image1} />
      </div>
      <div className="bg-gray-200 overflow-hidden  lg:hidden rounded-[20px] col-span-1 row-span-1">
        <Image alt="Gallery image 1" className="size-full object-cover " src={Image1} />
      </div>
    </div>
  );
}
