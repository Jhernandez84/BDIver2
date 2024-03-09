// pages/index.js or any other Next.js component file
"use client";

import React from "react";
import CalendarMonthView from "@/Components/Calendar/CalendarMonthView";
import CalendarDayView from "@/Components/Calendar/CalendarDayView";
import DBComponents from "./DBComponents/DBComponents";
import UserTable1 from "@/Components/UserTable/UserTable2";
import DBChart from "./DBComponents/DBChart";
import TableData from "@/Components/TableData/TableData";

const Dashboard = () => {
  const AppointedDates = [
    { date: "2023-12-01", qty: "1" },
    { date: "2023-12-02", qty: "6" },
    { date: "2023-12-03", qty: "8" },
    { date: "2023-12-04", qty: "7" },
    { date: "2023-12-05", qty: "2" },
    { date: "2023-12-06", qty: "4" },
    { date: "2023-12-07", qty: "9" },
    // { date: "2023-12-08", qty: "8" },
    // { date: "2023-12-09", qty: "4" },
    // { date: "2023-12-10", qty: "1" },
    // { date: "2023-12-11", qty: "4" },
    // { date: "2023-12-12", qty: "6" },
    // { date: "2023-12-13", qty: "4" },
    // { date: "2023-12-14", qty: "8" },
    // { date: "2023-12-15", qty: "7" },
    // { date: "2023-12-16", qty: "1" },
  ];

  return (
    <div
      className="grid grid-rows h-[95%] bg-white text-gray-700 dark:bg-gray-600 "
      style={{ gridTemplateRows: "45% 50%" }}
    >
      <div
        className="grid grid-cols justify-stretch mt-2"
        style={{ gridTemplateColumns: "25% 37% 37%" }}
      >
        <div className="justify-self-center dark:text-white flex-col">
          <CalendarMonthView AppointedDates={AppointedDates} />
        </div>
        <div className="justify-self-left bg-white text-gray-700 dark:bg-gray-700 rounded-lg">
          <DBChart
            ChartType="bar"
            ChartData={AppointedDates}
            ChartId="Bars"
            ChartTitle={"Citas de la semana"}
          />
        </div>
        <div className="justify-self-left bg-white text-gray-700 dark:bg-gray-700 rounded-lg ml-2">
          <DBChart
            ChartType="line"
            ChartData={AppointedDates}
            ChartId="Lines"
            ChartTitle={"Evolución citas"}
          />
        </div>
      </div>
      <div
        className="grid grid-cols-2 bg-white text-gray-700 dark:bg-gray-600"
        style={{ gridTemplateColumns: "25% 75%" }}
      >
        <div className="justify-self-center mt-2  ">
          <TableData />
        </div>
        <div className="justify-self-left flex-col mt-2 h-[100%] text-white mr-3">
          <CalendarDayView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
