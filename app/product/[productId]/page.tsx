import { productsdata } from "@/data";
import { ArrowLeft, MessageCircle, Phone, Star } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ productId: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  
  // Find the product safely
  const product: Product = productsdata.find((p: any) => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Found | Lucklife",
      robots: { index: false }, // Don't let Google index a broken page link
    };
  }

  // Clean and prepare values
  const pageTitle = `${product.name} | Lucklife`;
  const cleanDescription = product.description 
    ? product.description.replace(/<[^>]*>/g, '').slice(0, 155) // Strips HTML tags if any exist
    : `Discover ${product.name} at Lucklife. Premium lifestyle and wellness essentials designed for an elevated experience.`;
  
  // Resolve image source dynamically (handles static imports or straight URLs)
  const imageUrl = typeof product.image === 'string' 
    ? product.image 
    : product.image?.src || '/background.png';

  return {
    title: pageTitle,
    description: cleanDescription,
    alternates: {
      canonical: `/product/${productId}`, // Solidifies the URL hierarchy for Google crawler
    },
    openGraph: {
      title: pageTitle,
      description: cleanDescription, // Reused clean description for continuity
      url: `https://www.lucklifeproducts.com/product/${productId}`,
      siteName: "Lucklife",
      type: "website", // Or "books"/"music" depending on product, "website" is safe standard
      images: [
        {
          url: imageUrl,
          width: 1200, // 1200x630 is the professional gold standard aspect ratio for crisp cards
          height: 630,
          alt: `${product.name} - Premium Product Display`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: cleanDescription,
      images: [imageUrl],
    },
  };
}
export default async function ProductData({ params }: Props) {
  const { productId } = await params;

  // 2. Find the specific product in your array
  const product:Product = productsdata.find((p: any) => p.id === productId);
  if (!product) {
    notFound();
  }

  return (
    <div className="w-full pt-30">
      <section className="w-full flex justify-center pb-22.5">
        <div className="flex max-w-180 lg:max-w-360 w-full justify-center flex-col px-4 md:px-10 gap-33">
          <div className="flex flex-1 gap-10 flex-col lg:flex-row">
            <div className="flex-1">
              <div className="w-full aspect-square lg:aspect-auto max-w-[580px] lg:h-[738px] relative rounded-xl bg-gray-200 flex justify-center items-center">
                <Link href={"/products"} className="absolute top-5 left-5">
                  <span className="flex text-sm text-body text-gray-600 hover:text-gray-800 transition">
                    <ArrowLeft size={16} className="mr-1" /> Back to products
                  </span>
                </Link>
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center gap-10 flex-col">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-body text-green-400">
                  AVALIABLE
                </span>
                <h1 className="text-4xl txt-heading text-gray-800">
                  {product.name}
                </h1>
                <div className="flex items-center flex-row gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(4.598765)
                            ? "fill-orange-500 text-orange-500"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-(--secondary)">
                    4.9 (2130 reviews) reviews
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-base text-body">Description:</span>
                <p className="text-gray-600 max-w-120 text-lg text-body">
                  {product.description}
                </p>
                <span className="text-base text-body">Importance:</span>
                <ul className="list-disc list-inside flex flex-col gap-2 justify-center">
                    {
                      product.benefits.map((benefit,index)=>(
                        <li key={index} className="text-gray-600 text-lg text-body">
                        {" "}
                        {benefit}
                      </li>
                      ))
                    }
                  
                  
                </ul>
              </div>
              
             <div className="flex gap-4">
  {/* WhatsApp Link */}
  <Link
    href="https://wa.me/2348000000000" // Replace with your number (no + or spaces)
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex gap-2 justify-center items-center px-5 h-12 bg-green-700 rounded-xl hover:bg-green-800 transition-colors"
  >
    <MessageCircle size={20} className="text-white" />
    <span className="text-base text-body text-white">
      Message us
    </span>
  </Link>

  {/* Phone Link */}
  <Link
    href="tel:+2348000000000" // Replace with your phone number
    className="flex-1 flex gap-2 justify-center items-center px-5 h-12 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors"
  >
    <Phone size={20} className="text-gray-600" />
    <span className="text-base text-body text-gray-600">
      Call us
    </span>
  </Link>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
