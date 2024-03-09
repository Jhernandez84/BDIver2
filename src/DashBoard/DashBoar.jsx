// pages/index.js or any other Next.js component file

import React from "react";
import CalendarPicker from "@/Components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left column (30% width) */}
      <div className="w-1/3 bg-gray-200 h-100% p-4 rounded-bl-lg">
        {/* First row (50% height) - Vertical NavBar Icons with Item Count */}
        <div className="flex h-1/2 flex-col mb-4">
          <div className="flex flex-row mb-4">
            {/* Vertical NavBar Icons */}
            <div className="flex mb-2">
              {/* Include your vertical navigation bar icons here */}
              <span className="text-2xl">📊</span>
              <span className="text-2xl">📈</span>
              <span className="text-2xl">Detalle a mostrar</span>
              {/* Add more icons as needed */}
            </div>
            {/* Item Count */}
            <div className="flex mb-2">
              <p className="text-lg font-semibold">"( 5 )"</p>
              {/* You can dynamically update the item count */}
            </div>
          </div>
        </div>

        {/* Second row (50% height) - Calendar Space */}
        <div>
          {/* Include your calendar component or space here */}
          <div className="h-1/2 bg-white p-4">
            {/* Calendar component or space */}
            <p>Calendar Space</p>
            <CalendarPicker />
            {/* Add your calendar component or space content here */}
          </div>
        </div>
      </div>

      {/* Right column (70% width) */}
      <div className="w-2/3 bg-gray-300 h-full p-4">
        {/* First row (50% height) */}
        <div className="flex mb-4">
          {/* First column (33% width) */}
          <div className="w-1/3 p-4 bg-white">
            {/* Content for the first column of the first row */}
          </div>

          {/* Second column (33% width) */}
          <div className="w-1/3 p-4 bg-white ml-4">
            {/* Content for the second column of the first row */}
          </div>

          {/* Third column (33% width) */}
          <div className="w-1/3 p-4 bg-white ml-4">
            {/* Content for the third column of the first row */}
          </div>
        </div>

        {/* Second row (50% height) */}
        <div className="flex">
          {/* First column (50% width) */}
          <div className="w-1/2 p-4 bg-white">
            {/* Content for the first column of the second row */}
          </div>

          {/* Second column (50% width) */}
          <div className="w-1/2 p-4 bg-white ml-4">
            {/* Content for the second column of the second row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
