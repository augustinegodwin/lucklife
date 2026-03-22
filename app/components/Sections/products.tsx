import ProductCard from "../productCard"
import SectionHeader from "../sectionHeader"
interface Product {
  id: string
  name: string
  description: string
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Movement Plus',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.Embrace a complete approach to wellness with natural solutions.',
    image: 'https://framerusercontent.com/images/ISQ6TXtqJcBDntNlh85y8ttwOUM.png?width=600&height=600',
  },
  {
    id: '2',
    name: 'Salvia Extract Tablet',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.Embrace a complete approach to wellness with natural solutions.',
    image: 'https://framerusercontent.com/images/ISQ6TXtqJcBDntNlh85y8ttwOUM.png?width=600&height=600',
  },
  {
    id: '3',
    name: 'Lucklife Toothpaste',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.Embrace a complete approach to wellness with natural solutions.',
    image: 'https://framerusercontent.com/images/ISQ6TXtqJcBDntNlh85y8ttwOUM.png?width=600&height=600',
  },
  {
    id: '4',
    name: 'Lucklife Toothpaste',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.Embrace a complete approach to wellness with natural solutions.',
    image: 'https://framerusercontent.com/images/ISQ6TXtqJcBDntNlh85y8ttwOUM.png?width=600&height=600',
  },
]
export default function Products() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
            <SectionHeader label='PRODUCTS' buttonValue="View all products" title='Precision natural medicine for a healthier you' description='Discover high-quality herbal supplements and natural drugs meticulously selected to support your holistic wellness journey today.'/>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  )
}
