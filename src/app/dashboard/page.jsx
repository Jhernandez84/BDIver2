// pages/index.js or any other Next.js component file
"use client";

import React from "react";
import CalendarMonthView from "@/Components/Calendar/CalendarMonthView";
import CalendarDayView from "@/Components/Calendar/CalendarDayView";
import DBComponents from "./DBComponents/DBComponents";
import UserTable1 from "@/Components/UserTable/UserTable2";
import DBChart from "./DBComponents/DBChart";
import TableData from "@/Components/TableData/TableData";
import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";
import "./styles.css";

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
    <div className="dashboard-container ">
      {/* text-gray-700 dark:bg-gray-600  */}
      <section className="dashboard-chart-containers">
        <div className="dashboard-chart-containers-cols">
          <div>
            <CardChartComponent
              id={1}
              CardChartData={"25"}
              header={"IverRegiones"}
              text={"50"}
              text2={"Var % en últimos 3 días"}
            />
          </div>
          <div>
            <CardChartComponent
              id={2}
              CardChartData={"15"}
              header={"Jóvenes"}
              text={"950"}
              text2={"var var var"}
            />
          </div>
        </div>
        <div className="dashboard-chart-containers-cols">
          <div>
            <CardChartComponent
              id={3}
              CardChartData={"45"}
              header={"Misiones"}
              text={"15"}
              text2={"var var var"}
            />
          </div>
          <div>
            <CardChartComponent
              id={4}
              CardChartData={"65"}
              header={"Jóvenes"}
              text={"950"}
              text2={"var var var"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
