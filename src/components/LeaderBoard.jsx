import React from "react";
import { SubmitPhoto } from "./SubmitPhoto";
import { FaTree } from "react-icons/fa"; // Import tree icon from react-icons

export const LeaderBoard = () => {
  // Sort the names by the number of trees planted, most on top
  const names = [
    { name: "Sneha Verma", treesPlanted: 40 },
    { name: "Karan Singh", treesPlanted: 35 },
    { name: "Priya Desai", treesPlanted: 30 },
    { name: "Anil Kumar", treesPlanted: 28 },
    { name: "Amit Sharma", treesPlanted: 25 },
    { name: "Deepika Mehta", treesPlanted: 22 },
    { name: "Neha Gupta", treesPlanted: 20 },
    { name: "Ravi Patel", treesPlanted: 15 },
  ];

  return (
    <div className="flex flex-col items-center w-full p-10 bg-gray-800 text-white font-poppins">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-white  sm:flex">
        <div className="mr-3 ">Become A</div>
        <div className="text-green-400 ">Pawan Mitra</div>
      </h1>

      <div className="flex flex-col lg:flex-row w-full justify-between">
        {/* Leaderboard */}
        <div className="w-full lg:w-1/3 text-lg font-medium rounded-lg bg-gray-700 border border-gray-600 p-5 mb-6 lg:mb-0">
          <h2 className="block w-full px-4 py-3 text-white bg-slate-800 border-b border-gray-900 rounded-t-lg text-center text-2xl dark:bg-gray-800 dark:border-gray-600">
            Leader Board
          </h2>

          {names.map((person, index) => (
            <div
              key={index}
              className="flex justify-between items-center block w-full px-4 py-3 border-b border-gray-600 cursor-pointer hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600"
            >
              <span>{person.name}</span>
              <span className="flex items-center">
                {person.treesPlanted} <FaTree className="ml-2 text-green-500" />
              </span>
            </div>
          ))}
        </div>

        {/* Submit Photo Section */}
        <div className="w-full lg:w-2/3 lg:ml-10">
          <SubmitPhoto />
        </div>
      </div>
    </div>
  );
};
