import Image from "next/image"; // If using Next.js for optimized image handling
import "@/styles/globals.css";

const JBMobileView = () => {
  return (
    <>
      <Header />

      <SectionOne />
      <SearchSection />

      <JBMenuSection />
      <JBMenuSectionC />
      <JBMenuSectionB />
      <HorizontalMenu />
      <BottomSpace />
    </>
  );
};

export default JBMobileView;

const Header = () => {
  return (
    <>
      <div className="bg-black text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Hamburger Menu */}
          <button className="flex items-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Logo in the middle */}
          <div className="flex-grow flex justify-center">
            <Image
              src="/captivity-logo-white.png"
              alt="Company Logo"
              width={100}
              height={50}
            />
          </div>

          {/* Login button on the right */}
          <div className="flex items-center">
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

import { FaShoppingCart } from "react-icons/fa"; // Using react-icons for the trolley icon

const SectionOne = () => {
  return (
    <section className="bg-white w-full p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Categories Link */}
        <h3 className="text-black font-bold">Categories</h3>

        {/* Trolley Icon */}
        <a href="#">
          <FaShoppingCart className="text-black w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

const SearchSection = () => {
  return (
    <section className="bg-gray-100 w-full p-4">
      <div className="container mx-auto flex items-center space-x-2">
        {/* Long White Button */}
        <button className="flex-grow bg-white text-black p-2 rounded-l border border-gray-300 text-left">
          Search for Products
        </button>

        {/* Red SEARCH Button */}
        <button className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700">
          SEARCH
        </button>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <a href={"#"}>
      <section className="bg-white w-full p-4">
        <div className="container mx-auto flex items-center space-x-4 h-full">
          {/* Small Picture */}
          <img
            src="/captivity-logo-white.png"
            alt="Small Picture"
            className="w-12 h-12 rounded"
          />

          {/* Name in Bold Black */}
          <span className="text-black font-bold">
            John Doe {/* Replace with the actual name */}
          </span>
        </div>
      </section>
    </a>
  );
};

import { items } from "@/data/menuConfig";

const JBMenuSection = () => {
  return (
    <div className="bg-blue-800 p-8">
      <h1 className="text-white text-2xl font-bold flex justify-center">
        Apparel Collection
      </h1>
      {items.map((item) => (
        <JBInfoBlock
          key={item.id}
          image={item.image}
          name={item.name}
          mylink={item.mylink}
        />
      ))}
    </div>
  );
};

function JBInfoBlock({ image, name, mylink }) {
  return (
    <a href={mylink}>
      <section className="bg-white  hover:bg-gray-300 w-full p-4 my-2">
        <div className="container mx-auto flex items-center space-x-4 h-full">
          {/* Small Picture */}
          <img
            src={`/images/${image}`}
            alt={name}
            className="w-12 h-12 rounded"
          />

          {/* Name in Bold Black */}
          <span className="text-black font-bold">{name}</span>
        </div>
      </section>
    </a>
  );
}

import { FaHome, FaThLarge, FaHeart, FaUser } from "react-icons/fa"; // Importing icons from react-icons

const HorizontalMenu = () => {
  return (
    <div className="flex justify-center">
      <nav className=" bg-white w-2/3 p-4 mx-auto fixed bottom-0  shadow-md">
        <div className="container mx-auto flex justify-around items-center">
          {/* Home */}
          <div className="flex flex-col items-center">
            <FaHome className="text-black w-6 h-6" />
            <a href="#">
              <span className="text-black font-bold">Home</span>
            </a>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center">
            <FaThLarge className="text-black w-6 h-6" />
            <a href="#">
              <span className="text-black font-bold">Categories</span>
            </a>
          </div>

          {/* Favorites */}
          <div className="flex flex-col items-center">
            <FaHeart className="text-black w-6 h-6" />
            <a href="#">
              <span className="text-black font-bold">Favorites</span>
            </a>
          </div>

          {/* Account */}
          <div className="flex flex-col items-center">
            <FaUser className="text-black w-6 h-6" />
            <a href="#">
              <span className="text-black font-bold">Account</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

import { itemsB } from "@/data/menuConfig";
const JBMenuSectionB = () => {
  return (
    <div className="bg-white p-8">
      <div className="bg-black hover:bg-gray-900">
        {
          <JBInfoBlockB
            key={itemsB[0].id}
            image={itemsB[0].image}
            name={itemsB[0].name}
            mylink={itemsB[0].mylink}
          />
        }
      </div>

      <div className="bg-gray-700 hover:bg-gray-900">
        {
          <JBInfoBlockB
            key={itemsB[1].id}
            image={itemsB[1].image}
            name={itemsB[1].name}
            mylink={itemsB[1].mylink}
          />
        }
      </div>

      <div className="bg-blue-600 hover:bg-blue-900">
        {
          <JBInfoBlockB
            key={itemsB[2].id}
            image={itemsB[2].image}
            name={itemsB[2].name}
            mylink={itemsB[2].mylink}
          />
        }
      </div>

      <div className="bg-red-500 hover:bg-red-800">
        {
          <JBInfoBlockB
            key={itemsB[3].id}
            image={itemsB[3].image}
            name={itemsB[3].name}
            mylink={itemsB[3].mylink}
          />
        }
      </div>

      <div className="bg-yellow-200 hover:bg-yellow-500">
        {
          <JBInfoBlockB
            key={itemsB[4].id}
            image={itemsB[4].image}
            name={itemsB[4].name}
            mylink={itemsB[4].mylink}
          />
        }
      </div>

      <div className="bg-green-400 hover:bg-green-600">
        {
          <JBInfoBlockB
            key={itemsB[5].id}
            image={itemsB[5].image}
            name={itemsB[5].name}
            mylink={itemsB[5].mylink}
          />
        }
      </div>

      <div className="bg-purple-500 hover:bg-purple-800">
        {
          <JBInfoBlockB
            key={itemsB[6].id}
            image={itemsB[6].image}
            name={itemsB[6].name}
            mylink={itemsB[6].mylink}
          />
        }
      </div>

      <div className="bg-red-800 hover:bg-red-950">
        {
          <JBInfoBlockB
            key={itemsB[7].id}
            image={itemsB[7].image}
            name={itemsB[7].name}
            mylink={itemsB[7].mylink}
          />
        }
      </div>
    </div>
  );
};

function JBInfoBlockB({ image, name, mylink }) {
  console.log();

  return (
    <section className="text-white w-full p-4 my-2">
      <div className="">
        <a href={mylink}>
          <div className="container mx-auto flex items-center space-x-4 h-full">
            {/* Small Picture */}
            <img
              src={`/images/${image}`}
              alt={name}
              className="w-12 h-12 rounded"
            />

            {/* Name in Bold Black */}
            <span className="text-white font-bold">{name}</span>
          </div>
        </a>
      </div>
    </section>
  );
}

import { itemsC } from "@/data/menuConfig";
function JBMenuSectionC() {
  return (
    <div className="bg-green-700 p-8">
      <h1 className="text-white text-2xl font-bold flex justify-center">
        Headwear Collection
      </h1>
      {itemsC.map((item) => (
        <JBInfoBlockC
          key={item.id}
          image={item.image}
          name={item.name}
          mylink={item.mylink}
        />
      ))}
    </div>
  );
}

function JBInfoBlockC({ image, name, mylink }) {
  return (
    <a href={mylink}>
      <section className="bg-white  hover:bg-gray-300 w-full p-4 my-2">
        <div className="container mx-auto flex items-center space-x-4 h-full">
          {/* Small Picture */}
          <img
            src={`/images/${image}`}
            alt={name}
            className="w-12 h-12 rounded"
          />

          {/* Name in Bold Black */}
          <span className="text-black font-bold">{name}</span>
        </div>
      </section>
    </a>
  );
}

function BottomSpace() {
  return <div className="h-16"></div>;
}
