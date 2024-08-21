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
          href="/headwear/headwear-collection"
          className="text-gray-500 hover:text-gray-700"
        >
          Headwear Collection
        </Link>{" "}
        /{" "}
        <Link
          href="/collections/baseball-collection"
          className="text-gray-500 hover:text-gray-700"
        >
          Baseball Collection
        </Link>{" "}
        / <span className="text-black font-semibold">Americano Cap</span>
        <h2 className="text-4xl font-medium text-red-600 mt-4">
          AMERICANO CAP
        </h2>
      </div>
    </div>
  );
};

export default page;
