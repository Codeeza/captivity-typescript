"use client";
import ProductCarousel from "@/components/ProductPageCarousel/ProductCarousel";
import SideMenuDopDown from "@/components/ProductPageSideMenuDropDown/SideMenuDopDown";
import {
  allCollectionCategoryMapping,
  allCollectionMockProducts,
} from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CategoryPage({ params }) {
  const { category } = params;
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const { headerImage, products } = allCollectionMockProducts[category] || {};
  const categoryName = allCollectionCategoryMapping[category];

  if (!products) {
    return <p>Category not found</p>;
  }

  function handleMouseEnter(productId) {
    setHoveredProductId(productId);
  }

  function handleMouseLeave() {
    setHoveredProductId(null);
  }

  return (
    <div>
      <div className="w-full">
        <div className="relative group overflow-hidden">
          <Image
            src={headerImage}
            width={1368}
            height={262}
            alt={`${category} Header`}
            className="w-full h-[200px] sm:h-[300px] filter brightness-75"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-cyan-500 mix-blend-multiply opacity-50"></div>
          <div className="absolute top-20 sm:top-5 md:top-20 lg:top-24 w-full font-bold bg-opacity-50 text-white text-center px-4">
            <span className="text-5xl sm:flex-wrap sm:text-4xl md:text-5xl lg:text-7xl">
              <span className="text-white">{categoryName.toUpperCase()}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container m-5">
          {" "}
          <div className="flex">
            {/* Side Menu */}
            <div className="space-y-5 md:mr-10 lg:mr-10 xl:mr-10 xl:ml-20 lg:ml-20 md:ml-20">
              <aside className="w-[300px] mb-0 hidden lg:block">
                <ul className="menu border-2 p-2 text-gray-700">
                  <span className="text-xl font-bold">HEADWEAR</span>
                  <li>
                    <Link href="/headwear/newInHeadwear">New in Headwear</Link>
                  </li>
                  <li>
                    <Link href="/headwear/flatPeaks">Flat Peaks</Link>
                  </li>
                  <li>
                    <Link href="/headwear/preCurvedPeaks">
                      Pre-Curved Peaks
                    </Link>
                  </li>
                  <li>
                    <Link href="/headwear/hats">Hats</Link>
                  </li>
                  <li>
                    <Link href="/headwear/multifunctionalHeadwear">
                      Multifunctional Headwear
                    </Link>
                  </li>
                  <li>
                    <Link href="/headwear/beanies">Beanies</Link>
                  </li>
                  <li>
                    <Link href="/headwear/truckerCaps">Trucker Caps</Link>
                  </li>
                  <li>
                    <Link href="/headwear/bucketHats">Bucket Hats</Link>
                  </li>
                </ul>
              </aside>
              <aside className="w-[300px] hidden lg:block">
                <ul className="menu border-2 p-2 text-gray-700">
                  <span className="text-xl font-bold">APPAREL</span>
                  <li>
                    <Link href="/apparel/new-in-apparel">New in Apparel</Link>
                  </li>
                  <li>
                    <Link href="/apparel/men">Men</Link>
                  </li>
                  <li>
                    <Link href="/apparel/women">Women</Link>
                  </li>
                  <li>
                    <Link href="/apparel/kids">Kids</Link>
                  </li>
                  <li>
                    <Link href="/apparel/t-shirts">T - Shirts</Link>
                  </li>
                  <li>
                    <Link href="/apparel/golfers">Golfers</Link>
                  </li>
                  <li>
                    <Link href="/apparel/hoodies">Hoodies</Link>
                  </li>
                  <li>
                    <Link href="/apparel/jackets">Jackets</Link>
                  </li>
                  <li>
                    <Link href="/apparel/bottoms">Bottoms</Link>
                  </li>
                </ul>
              </aside>
              <SideMenuDopDown />
              <ProductCarousel />
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 m-5">
              <div className="mb-20">
                <span className="font-bold ml-5 text-2xl text-gray-400">
                  {categoryName}
                </span>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="card rounded-md bg-gray-200 shadow-sm hover:shadow-xl"
                  >
                    <Link href={`/product/${product.id}`}>
                      <figure>
                        <Image
                          src={
                            hoveredProductId === product.id
                              ? product.image2
                              : product.image
                          }
                          alt={product.title}
                          id={product.id}
                          onMouseEnter={() => handleMouseEnter(product.id)}
                          onMouseLeave={handleMouseLeave}
                          width={300}
                          height={200}
                        />
                      </figure>
                      <div className="card-compact p-2">
                        <h2 className="card-title text-sm text-black">
                          {product.title}
                          {product.status === "new" && (
                            <div className="absolute top-5 left-5  badge badge-secondary p-2 ml-2">
                              New
                            </div>
                          )}
                          {product.status === "soldout" && (
                            <div className="absolute top-5 left-5 badge badge-error p-4 ml-2">
                              Sold Out
                            </div>
                          )}
                        </h2>
                        <p className="text-yellow-500">
                          {"★".repeat(Math.floor(product.rating))}
                          {product.rating % 1 !== 0 && "★"}
                        </p>
                        <p>{product.price}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
