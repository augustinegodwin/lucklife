import Image from "next/image";
import Button from "./button";
import productImage from "../assets/images/product.png"
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}
const product: Product = {
  id: "1",
  name: "Movement Plus",
  description:
    "Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.Embrace a complete approach to wellness with natural solutions.",
  image:
    "https://framerusercontent.com/images/ISQ6TXtqJcBDntNlh85y8ttwOUM.png?width=600&height=600",
};
const products: Product[] = [
  {
    id: "1",
    name: "Movement Plus",
    description:
      "Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movement-plus-MYxZ1vC2K3pQ9wRs4tUvW5xYzAbCdE.png",
  },
  {
    id: "2",
    name: "Salvia Extract Tablet",
    description:
      "Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salvia-extract-FgHiJkLmNoPqRs1tUvWxYzAbCdEfGhI.png",
  },
  {
    id: "3",
    name: "Lucklife Toothpaste",
    description:
      "Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toothpaste-1-JkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN.png",
  },
  {
    id: "4",
    name: "Lucklife Toothpaste",
    description:
      "Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toothpaste-2-OpQrStUvWxYzAbCdEfGhIjKlMnOpQrS.png",
  },
];
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="bg-gray-200 rounded-[25px] overflow-hidden  transition-shadow duration-300"
    >
      <div className="p-7.5 flex flex-row h-full">
        <div className="flex-1 flex flex-col gap-20">
          <div>
            <h3 className="text-2xl txt-heading font-serif font-bold text-black mb-4">
            {product.name}
          </h3>
          <p className="text-gray-600 flow text-body text-[17px] mb-4 leading-relaxed">
            {product.description}
          </p>
          </div>
          <div className="flex w-full md:w-auto">
            <Button
              value="Learn More"
              //   variant="outline"
              //   className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-2 rounded-full font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row items-center">
          <div className="flex-1 flex items-center justify-center size-full">
            <div className="relative size-full">
              <Image
                src={productImage}
                alt={product.name}
                fill
                className="object-contain scale-[1.5]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
