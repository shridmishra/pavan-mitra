"use client";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export const CityCard = () => {
  const cards = data.map((card, index) => (
    <Card
      key={index}
      cityName={card.cityName}
      AQI={card.AQI}
      src={card.src}
      content={card.content}
      index={index}
    />
  ));

  return (
    <div className="w-full min-h-screen py-8 px-4 bg-black dark:bg-neutral-900">
      <h2 className="text-2xl md:text-4xl font-bold text-center font-mono text-white dark:text-neutral-200 mb-1">
        Get to know your cities AQI.
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of city exploration is that you boast about it.
              </span>{" "}
              Keep a journal, quickly jot down your experiences, and take amazing
              notes. Our city guide is here to capture every detail.
            </p>
            <Image
              src="/delhi.png" // Ensure this path is correct
              alt="City View"
              height={200} // Reduced height
              width={400} // Reduced width
              className="w-full h-auto mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    cityName: "Delhi",
    AQI: "120",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
  {
    cityName: "Mumbai",
    AQI: "150",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
  {
    cityName: "Bangalore",
    AQI: "80",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
  {
    cityName: "Kolkata",
    AQI: "200",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
  {
    cityName: "Chennai",
    AQI: "95",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
  {
    cityName: "Hyderabad",
    AQI: "110",
    src: "/delhi.png", // Ensure this path is correct
    content: <DummyContent />,
  },
];
