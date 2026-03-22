import { productsdata } from "@/data"
import SectionHeader from "../components/sectionHeader"
import Products from "../components/Sections/products"
import ProductCard from "../components/productCard"

export default function ProductsPage() {
  return (
    <div className="w-full pt-40">
        <section className='w-full flex justify-center pb-22.5'>
                <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
                    <SectionHeader label='PRODUCTS'  title='Precision natural medicine for a healthier you' description='Discover high-quality herbal supplements and natural drugs meticulously selected to support your holistic wellness journey today.'/>
                    <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                      {productsdata.map((product:any) => (
                          <ProductCard key={product.id} product={product} />
                      ))}
                      </div>
        </div>
    </section>
    </div>
  )
}
