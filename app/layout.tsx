import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/CopyRight/CopyRight";

export const metadata = {
  title: "Captivity-Headwear And Apparel",
  description: "Headwear and Apparel",
};

export default function RootLayout({ children }) {
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
