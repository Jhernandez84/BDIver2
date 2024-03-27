// pages/index.js or any other Next.js component file
"use client";

import React from "react";
import SimpleCard from "@/Components/SimpleCard/SimpleCard";
import UserTable1 from "@/Components/UserTable/UserTable2";
import UserTable from "@/Components/UserTable/UserTable";
import DBChart from "../../Components/Charts/ChartComponent";
import TableData from "@/Components/TableData/TableData";
import CardChartComponent from "@/Components/CardsCharts/CardChartComponent";
import CalendarAndSummary from "@/Components/CdrAndSummary/CalendarAndSummary";
import UserCardsComp from "@/Components/Users/UserCards/UserCardsComp";

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
    { date: "2023-12-08", qty: "8" },
    { date: "2023-12-09", qty: "4" },
    { date: "2023-12-10", qty: "1" },
    { date: "2023-12-11", qty: "4" },
    { date: "2023-12-12", qty: "6" },
    { date: "2023-12-13", qty: "4" },
    { date: "2023-12-14", qty: "8" },
    { date: "2023-12-15", qty: "7" },
    { date: "2023-12-16", qty: "1" },
  ];

  return (
    <div className="dashboard-container">
      <section className="dashboard-left-containers">
        <div className="dashboard-left-col-containers">
          <div>
            <SimpleCard Header={"Próximos cumpleaños"} MaxRrows={"3"} />
          </div>
          <div>
            <SimpleCard Header={"Líderes"} MaxRrows={"7"} />
          </div>
        </div>
        <section className="dashboard-right-col-containers">
          <div className="dashboard-chart-containers">
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
          <div className="dashboard-chart-containers">
            <div>
              <CardChartComponent
                id={3}
                CardChartData={"45"}
                header={"Inscrip. Entrega2"}
                text={"15"}
                text2={"13-09-1984"}
              />
            </div>
            <div>
              <CardChartComponent
                id={4}
                CardChartData={"65"}
                header={"Inscrip. L&R"}
                text={"950"}
                text2={"22-10-2024"}
              />
            </div>
          </div>
          <div>
            <DBChart
              ChartData={AppointedDates}
              ChartType={"bar"}
              ChartId={"Cosa"}
              ChartTitle={"Gráfico Inscripciones"}
            />
          </div>
        </section>
      </section>
      <section className="dashboard-right-container">
        <CalendarAndSummary />
      </section>
    </div>
  );
};

export default Dashboard;
