type Product = {
  id: string;
  name: string;
  category: string;
  /** * Use StaticImageData for direct imports from your assets folder.
   * If you ever switch to string URLs from a database, use: string | StaticImageData 
   */
  image: StaticImageData; 
  description: string;
  benefits: string[];
  key_ingredients: string;
}