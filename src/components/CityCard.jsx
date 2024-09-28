"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CityCard() {
  const router = useRouter(); // Initialize useRouter for navigation

  const handleCardClick = (cityName) => {
    router.push(`/${cityName}`); // Redirect to localhost/{cityName}
  };

  const cards = data.map((card, index) => (
    <Card
      key={index}
      card={card}
      index={index}
      onClick={() => handleCardClick(card.cityName)} // Direct redirection on click
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-poppins">
        Get to know your cities AQI.
      </h2>
      <Carousel items={cards} /> {/* Carousel of cards */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="relative p-8 md:p-14 rounded-3xl mb-4 max-h-62 overflow-hidden font-poppins"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} // Set your background image here
          >
            <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md"></div>
            <div className="relative z-10 p-8">
              <p className="text-neutral-100 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-100">
                  Discover more about each city.
                </span>{" "}
                <br />
                Explore the AQI and learn more about various cities. From bustling
                metropolises to serene towns, get all the information you need to
                stay informed.
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    title: "Delhi AQI",
    src: "/delhi.png",
    aqi: 180,
    cityDetails: "The current AQI in Delhi is 180, which is considered unhealthy.",
    connect: "Stay indoors and avoid outdoor activities to minimize health risks.",
    cityName: "delhi", // City name used for routing
    content: <DummyContent cityName="delhi" />,
  },
  {
    title: "Mumbai AQI",
    src: "/mumbai.jpg",
    aqi: 120,
    cityDetails: "The current AQI in Mumbai is 120, which is considered unhealthy for sensitive groups.",
    connect: "Consider reducing prolonged outdoor exertion and check air quality updates regularly.",
    cityName: "mumbai", // City name used for routing
    content: <DummyContent cityName="mumbai" />,
  },
  {
    title: "Kanpur AQI",
    src: "/kanpur.jpeg",
    aqi: 90,
    cityDetails: "The current AQI in Kanpur is 90, which is considered acceptable.",
    connect: "Air quality is generally good, but remain aware of any changes in conditions.",
    cityName: "kanpur", // City name used for routing
    content: <DummyContent cityName="kanpur" />,
  },
  {
    title: "Chennai AQI",
    src: "/chennai.jpg",
    aqi: 150,
    cityDetails: "The current AQI in Chennai is 150, which is considered unhealthy.",
    connect: "Try to limit time spent outdoors and use air purifiers if necessary.",
    cityName: "chennai", // City name used for routing
    content: <DummyContent cityName="chennai" />,
  },


];
