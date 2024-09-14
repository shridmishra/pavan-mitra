"use client";

import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textOpacity = Math.min(1, scrollY / 300);
  const textPosition = Math.min(scrollY / 1.5, 150);

  

  return (
    <div className="relative h-screen bg-slate-900">
      <img
        src="/smoke.png"
        alt="Smoke"
        className="absolute inset-0 object-cover w-full h-full z-10"
        style={{
          opacity: 1 - textOpacity,
          transform: "rotate(180deg)",
        }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textPosition}px)`,
          zIndex: 5,
          fontFamily: "'Poppins', sans-serif",
          textShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          padding: 0, // Ensure no padding
        }}
      >
        <div className="">
            <div className="text-9xl">
          PAVAN
          <h1 className="text-xl mt-5 font-extralight">Clearing The Smoke With Data.</h1>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

