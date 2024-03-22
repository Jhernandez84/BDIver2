"use client";
import React from "react";
import CalendarMonthView from "./CalendarMonthView";
import CalendarSummary from "./CalendarSummary";

const CalendarAndSummary = () => {
  return (
    <section className="Cdr-View-Container">
      <CalendarMonthView />
      <p>Selected date</p>
      <CalendarSummary />
    </section>
  );
};

export default CalendarAndSummary;
