import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/CopyRight/CopyRight";
import { ReactNode } from "react"; // Import ReactNode

export const metadata = {
  title: "Captivity-Headwear And Apparel",
  description: "Headwear and Apparel",
};

// Define the type for the props, including children
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg">
        <div>
          <Navbar />
          <Categories />
          {children}
          <Footer />
          <CopyRight />
        </div>
      </body>
    </html>
  );
}
