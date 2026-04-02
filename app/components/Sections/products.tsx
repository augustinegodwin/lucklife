import { productsdata } from "@/data";
import ProductCard from "../productCard";
import SectionHeader from "../sectionHeader";
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Products() {
  return (
    <section className="w-full flex justify-center pb-22.5">
      <div className="flex max-w-180 lg:max-w-360 w-full items-center flex-col px-4 md:px-10 gap-33">
        <SectionHeader
          label="PRODUCTS"
          buttonValue="View all products"
          title="Precision natural medicine for a healthier you"
          description="Discover high-quality herbal supplements and natural drugs meticulously selected to support your holistic wellness journey today."
          action="/products"
        />
        <div className="w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {productsdata.slice(0, 6).map((product:Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
