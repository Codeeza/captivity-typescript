import { mockProducts as mockData } from "@/lib/mockProducts"; // Renaming to mockData for clarity
import DetailPage from "../components/DetailPage";
import { Product } from "@/types/productTypes"; // Importing the Product type

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Extracting all products
  const allProducts: Product[] = Object.values(mockData).flatMap(
    (category) => category.products
  );

  // Finding the product by ID
  const product = allProducts.find((p: Product) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <DetailPage product={product} />;
}

// Use Next.js dynamic routing to pass params to the component
export async function generateStaticParams() {
  // Generate a list of possible values for `id`
  return Object.values(mockData).flatMap((category) =>
    category.products.map((product) => ({ id: product.id }))
  );
}
