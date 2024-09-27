"use client";

import React, { useEffect, useState } from "react";

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
  const bgColor = scrollY > 200 ? "bg-green-500" : "bg-white";
  
  const showMitraThreshold = 200;

  return (
    <div className={`relative h-screen transition-colors duration-500 ${bgColor}`}>
      <div 
        className="z-20 py-96 px-10 flex justify-between font-yatra text-slate-900"
        style={{ opacity: scrollY < showMitraThreshold ? 1 : 0 }}
      >
        <div className="text-6xl  lg:text-9xl md:text-8xl">Clearing the Smoke With Data</div>
      </div>

      <img
        src="/smoke.png"
        alt="Smoke"
        className="absolute inset-0 object-cover w-full h-full z-10"
        style={{
          opacity: 1 - textOpacity,
          transform: "rotate(180deg)",
          filter: "invert(1)",
        }}
      />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center font-bold"
        style={{
          opacity: scrollY > showMitraThreshold ? 1 : 0,
          transform: `translateY(${textPosition}px)`,
          zIndex: 5,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          padding: 0,
        }}
      >
        <div className="text-9xl font-yatra">पवन</div>
        <div className="font-yatra text-8xl text-green-100">MITRA</div>
      </div>
    </div>
  );
};
