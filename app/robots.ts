export default function robots() {
    const baseUrl = 'https://www.lucklifeproducts.com';
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
