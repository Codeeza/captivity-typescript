"use client";
import { useState, useEffect } from "react";
import JBMobileView from "@/components/JBComponents/JBMobileView";
import JBDesktop from "@/components/JBComponents/JBDesktop";

function JBCategoriesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <JBMobileView /> : <JBDesktop />}</div>;
}

export default JBCategoriesPage;
