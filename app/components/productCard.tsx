import Image from 'next/image'

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
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movement-plus-MYxZ1vC2K3pQ9wRs4tUvW5xYzAbCdE.png',
  },
  {
    id: '2',
    name: 'Salvia Extract Tablet',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salvia-extract-FgHiJkLmNoPqRs1tUvWxYzAbCdEfGhI.png',
  },
  {
    id: '3',
    name: 'Lucklife Toothpaste',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toothpaste-1-JkLmNoPqRsTuVwXyZaBcDeFgHiJkLmN.png',
  },
  {
    id: '4',
    name: 'Lucklife Toothpaste',
    description:
      'Embrace a complete approach to wellness with natural solutions that nourish your mind, body, and spirit.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toothpaste-2-OpQrStUvWxYzAbCdEfGhIjKlMnOpQrS.png',
  },
]
export default function productCard() {
  return (
    <div>productCard</div>
  )
}
