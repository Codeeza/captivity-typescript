// lib/mockProducts.ts
import { Product } from "@/types/productTypes";

export const mockProducts: { [key: string]: { products: Product[] } } = {
  category1: {
    products: [
      {
        id: "1",
        materials: "Cotton",
        stock: "50",
        code: "P001",
        name: "Product 1",
        description: "Description for product 1",
        fit: "Regular",
        variants: [
          {
            type: "Size",
            name: "M",
            hex: "#FFFFFF",
            stock: 10,
            price: "29.99", // Change this to string
            image: "path/to/image",
            code: "P001-M",
            size: "M",
          },
        ],
        thumbnails: [],
        colors: ["Red", "Blue"],
        price: "29.99", // Change this to string as well
      },
      // Add more products...
    ],
  },
  // Add more categories...
};

// Extracting all products
const allProducts: Product[] = Object.values(mockProducts).flatMap((category) =>
  category.products.map(product => ({
    id: product.id,
    materials: product.materials,
    stock: product.stock,
    code: product.code,
    name: product.name,
    description: product.description,
    fit: product.fit,
    variants: product.variants,
    thumbnails: product.thumbnails,
    colors: product.colors,
    price: product.price, // Ensure this is a string
  }))
);

export { allProducts };
