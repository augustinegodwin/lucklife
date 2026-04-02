// app/sitemap.ts
import { productsdata } from '@/data';
import { MetadataRoute } from 'next';
// Simulated data fetchers (replace with DB/API calls)
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.lucklifeproducts.com';
  return [
    // Static routes
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },

    // Dynamic product routes
    ...(productsdata?.map((product:any) => ({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    })) ?? []),

  ];
}