// Add "use client" directive at the top
"use client";

import "./globals.css";
import CustomContainer from "@/components/CustomContainer/CustomContainer";
import HowToRegister from "@/components/Register/HowToRegister";
import BestSeller from "@/components/BestSeller/BestSeller";
import ProductSection from "@/components/ProductSection/ProductSection";
import CarouselPlugin from "@/components/Carousel/CarouselPlugin";
import Carousel from "@/components/SmallCarousel/SmallCarousel";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Define the initMap function on the window object
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    // Attach the initMap function to the window object
    window.initMap = initMap;
  }, []);

  return (
    <>
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap`}
          async
          defer
        ></script>
      </Head>

      <div>
        <main>
          <CarouselPlugin />
          <Carousel />
          <ProductSection />
          <BestSeller />
          <CustomContainer />
          <HowToRegister />
        </main>

        <div id="map" style={{ height: "400px", width: "100%" }}></div>
      </div>
    </>
  );
};

export default Home;
