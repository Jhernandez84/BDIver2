import React, { useState } from "react";
import { CalendarMonthlyView } from "./CalendarMonthlyView";
import { CalendarWeeklyView } from "./CalendarWeeklyView";

import "./styles.css";
// Este componente va a renderizar todo el calendario

const CalendarComponent = () => {
  const [calendarView, setCalendarView] = useState("month");

  return (
    <section className="Calendar-container-component">
      <section className="Calendar-header-and-selectors">
        headers 


      </section>

      <section className="Calendar-body-container">
        <section className="left-side-panel">
          <CalendarMonthlyView />
        </section>
        <section className="right-side-panel">
          {/* <CalendarMonthlyView /> */}
        </section>
      </section>
    </section>
  );
};

export default CalendarComponent;
