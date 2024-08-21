"use client";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="text-sm text-gray-500">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/apparel/women"
          className="text-gray-500 hover:text-gray-700"
        >
          Women
        </Link>{" "}
        / <span className="text-black font-semibold">Promo T-Shirt</span>
        <h2 className="text-4xl font-medium text-red-600 mt-4">PROMO T-SHIRT</h2>
      </div>
    </div>
  );
};

export default page;

