// components/AQIDataDisplay.js
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AQIDataDisplay = ({ currentAQI, futureAQI, city }) => {
  const labels = futureAQI.map(day => day.date);
  const aqiData = futureAQI.map(day => day.aqi);
  const pm25Data = futureAQI.map(day => day.pm25);
  const pm10Data = futureAQI.map(day => day.pm10);

  const aqiChartData = {
    labels,
    datasets: [
      {
        label: 'Predicted AQI',
        data: aqiData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Predicted PM2.5',
        data: pm25Data,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Predicted PM10',
        data: pm10Data,
        borderColor: 'rgba(255, 205, 86, 1)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels,
    datasets: [
      {
        label: 'Predicted AQI',
        data: aqiData,
        backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Predicted PM2.5',
        data: pm25Data,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Predicted PM10',
        data: pm10Data,
        backgroundColor: 'rgba(255, 205, 86, 1)',
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 text-white font-poppins">
      <h1 className="text-4xl font-bold text-center mb-6">Air Quality in {city}</h1>

      {/* Current AQI Data */}
      <div className="mb-6 p-6 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Current AQI</h2>
        {currentAQI ? (
          <div className="text-lg">
            <p>Date: <span className="font-semibold">{currentAQI.date}</span></p>
            <p>AQI: <span className="font-semibold">{currentAQI.aqi}</span></p>
            <p>PM2.5: <span className="font-semibold">{currentAQI.pm25} µg/m³</span></p>
            <p>PM10: <span className="font-semibold">{currentAQI.pm10} µg/m³</span></p>
            <p>Dominant Pollutant: <span className="font-semibold">{currentAQI.dominantPol}</span></p>
          </div>
        ) : (
          <p>Error fetching current data for {city}</p>
        )}
      </div>

      {/* Chart for Future Predictions */}
      <div className="  justify-around  mb-6 lg:flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Predicted AQI & PM Levels (Line Chart)</h2>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md ">
            <Line
              data={aqiChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: { color: 'white', font: { size: 16 } },
                  },
                },
              }}
              height={400}
            />
          </div>
        </div>

        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-4">Predicted AQI & PM Levels (Bar Chart)</h2>
          <div className="bg-gray-800 rounded-lg p-4 shadow-md">
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: { color: 'white', font: { size: 16 } },
                  },
                },
              }}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Warning Levels */}
      <div className="p-6 rounded-lg bg-gray-800 shadow-lg mb-6">
        <h2 className="text-3xl font-semibold mb-4">Warning Levels</h2>
        <p className={`text-2xl mb-2 ${currentAQI.aqi <= 50 ? 'text-green-500' : currentAQI.aqi <= 100 ? 'text-yellow-500' : 'text-red-500'}`}>
          {currentAQI.aqi <= 50 ? 'Good' : currentAQI.aqi <= 100 ? 'Moderate' : 'Unhealthy'}
        </p>
        <h3 className="text-xl font-semibold mb-2">Measures to Improve AQI:</h3>
        <ul className="list-disc pl-5 mb-2">
          <li className="text-md">Limit outdoor activities when AQI is high.</li>
          <li className="text-md">Use air purifiers indoors.</li>
          <li className="text-md">Avoid using vehicles; opt for public transport.</li>
          <li className="text-md">Plant trees and maintain green spaces.</li>
        </ul>
        <p className="text-md">Health Effects: High AQI can lead to respiratory problems, irritation of the eyes, nose, and throat, and can affect heart health.</p>
      </div>

      {/* Footer Area */}
      <footer className="bg-gray-900 p-4 rounded-lg shadow-lg mt-6">
        <p className="text-xs text-gray-400 text-center mt-2">© 2024 Air Quality Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AQIDataDisplay;
