// types/productTypes.ts
// Declare the ProductVariant interface first
export interface ProductVariant {
  type: string;
  name: string;
  hex?: string;
  image: string;
  size?: string;
  stock: number;
  price: string;
  code: string;
}

// Now declare the Product interface
export interface Product {
  id: string;
  materials?: string;
  stock: string;
  code: string;
  name: string;
  description?: string;
  fit?: string;
  variants: ProductVariant[];
  thumbnails?: ProductVariant[];
  colors?: string[];
  gender?: string; // Add these fields if necessary
  title?: string;
  rating?: number;
  price: string; // The price will be stored as a string
  status?: string;
  image?: string;
  // Add other fields as needed
}

