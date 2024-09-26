"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CityCard() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
  };

  const cards = data.map((card, index) => (
    <Card 
      key={index} 
      card={card} 
      index={index} 
      onClick={handleCardClick} 
    />
  ));

  const selectedCard = data[selectedIndex] || {};

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-poppins">
        Get to know your cities AQI.
      </h2>
      <Carousel items={cards} />
      {selectedIndex !== null && (
        <div className="mt-10 p-6 bg-neutral-800 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
          <p className="text-base mb-4">
            <strong>AQI:</strong> {selectedCard.aqi || 'Data not available'}
          </p>
          <p className="text-base">
            <strong>City Details:</strong> {selectedCard.cityDetails || 'Details not available'}
          </p>
          <p className="text-base mt-4">
            <strong>Connect:</strong> {selectedCard.connect || 'Connect information not available'}
          </p>
          <Image
            src={selectedCard.src}
            alt="City image"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      )}
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
            className="relative p-8 md:p-14 rounded-3xl mb-4 max-h-62 overflow-hidden "
            style={{ backgroundImage: 'url(/delhi.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} // Set your background image here
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
    cityName: "delhi",
    content: <DummyContent cityName="delhi" />,
  },
  {
    title: "Mumbai AQI",
    src: "/mumbai.jpg",
    aqi: 120,
    cityDetails: "The current AQI in Mumbai is 120, which is considered unhealthy for sensitive groups.",
    connect: "Consider reducing prolonged outdoor exertion and check air quality updates regularly.",
    content: <DummyContent cityName="mumbai" />,
  },
  {
    title: "Kanpur AQI",
    src: "/kanpur.jpeg",
    aqi: 90,
    cityDetails: "The current AQI in Bengaluru is 90, which is considered acceptable.",
    connect: "Air quality is generally good, but remain aware of any changes in conditions.",
    content: <DummyContent cityName="bengaluru" />,
  },
  {
    title: "Chennai AQI",
    src: "/chennai.jpg",
    aqi: 150,
    cityDetails: "The current AQI in Chennai is 150, which is considered unhealthy.",
    connect: "Try to limit time spent outdoors and use air purifiers if necessary.",
    content: <DummyContent cityName="chennai" />,
  },
  {
    title: "Kolkata AQI",
    src: "/delhi.png",
    aqi: 160,
    cityDetails: "The current AQI in Kolkata is 160, which is considered unhealthy.",
    connect: "Avoid strenuous activities and ensure you have a clean air environment at home.",
    content: <DummyContent cityName="kolkata" />,
  },
  {
    title: "Hyderabad AQI",
    src: "/delhi.png",
    aqi: 110,
    cityDetails: "The current AQI in Hyderabad is 110, which is considered unhealthy for sensitive groups.",
    connect: "Be cautious if you have respiratory issues and try to stay indoors during peak pollution hours.",
    content: <DummyContent cityName="hyderabad" />,
  },
  

];
