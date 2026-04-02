import Image from "next/image";
import Button from "./button";
import productImage from "../assets/images/product.png";
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="bg-gray-200 rounded-[25px] overflow-hidden  transition-shadow duration-300"
    >
      <div className="p-5 sm:p-7.5 flex  flex-col-reverse h-full">
        <div className="flex-1 flex flex-col gap-5">
          <div>
            <h3 className="text-2xl txt-heading font-serif font-medium! text-black mb-4">
              {product.name}
            </h3>
            <p className="text-gray-600 text-body text-[17px] mb-4 leading-relaxed">
              {product.description.slice(0, 150) + "..."}
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <Button
              value="Learn More"
              action={`/product/${product.id}`}
              //   variant="outline"
              //   className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-2 rounded-full font-semibold"
            />
          </div>
        </div>

        <div className="flex flex-1 w-full  flex-col  items-center">
          <div className="flex-1 flex items-center justify-center size-full">
            <div className="relative aspect-square  size-full">
              <Image
                src={product.image}
                alt={product.name}
                className="object-contain size-full sm:scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
