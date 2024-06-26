"use client";

import React from "react";
import DBChart from "../../Components/Charts/ChartComponent";
import CalendarDayView from "@/Components/Calendar/CalendarDayView";
import MainSettingsComponent from "@/Components/MainSettings/MainSettings";

const TestCharts = () => {
  return (
    <>
      <div className="justify-self-center p-4 m-4 text-white">
        <section>
          <h1>main settings menu</h1>
        </section>
      </div>
      <div className="justify-self-center p-4 m-4">
        <MainSettingsComponent />
      </div>
    </>
  );
};

export default TestCharts;
