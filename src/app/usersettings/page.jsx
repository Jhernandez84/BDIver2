"use client";

import React from "react";
import DBChart from "../dashboard/DBComponents/DBChart";
import CalendarDayView from "@/Components/Calendar/CalendarDayView";

const TestCharts = () => {
  return (
    <>
      <div className="justify-self-center p-4 m-4 text-white">
        <CalendarDayView />
      </div>
      <div className="justify-self-center p-4 m-4">
        {/* <DBChart ChartType="area" /> */}
      </div>
    </>
  );
};

export default TestCharts;
