import React, { useState } from "react";
import { useEffect } from "react";
import { CalendarMonthlyView } from "./CalendarMonthlyView";
import { CalendarWeeklyView } from "./CalendarWeeklyView";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./styles.css";
// Este componente va a renderizar todo el calendario

const CalendarComponent = () => {
  const [calendarView, setCalendarView] = useState("month");

  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(
    currDate.toISOString().split("T")[0]
  );
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [DaysArray, setDaysArray] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [calendarType, setCalendarType] = useState("larger");

  useEffect(() => {
    renderCalendar();
  }, [currMonth]);

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const handleGoCurrentDate = () => {
    setCurrMonth(currDate.getMonth());
    setCurrYear(currDate.getFullYear());
  };

  const handleMonthChangePrev = () => {
    if (currMonth - 1 < 0) {
      setCurrYear(currYear - 1);
      setCurrMonth(11); // December is 0
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleMonthChangeNext = () => {
    if (currMonth + 1 > 11) {
      setCurrYear(currYear + 1);
      setCurrMonth(0); // January is 0
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    const lastDayOfMonth = new Date(
      currYear,
      currMonth,
      lastDateOfMonth
    ).getDay(); // getting last day of month
    const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    const days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      // creating array of previous month last days
      const date = new Date(
        currYear,
        currMonth - 1,
        lastDateOfLastMonth - i + 1
      );
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      days.push({
        day: lastDateOfLastMonth - i + 1,
        thisMonth: "no",
        currentDate: "no",
        fullDate: formattedDate,
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      // creating array of all days of current month
      const date = new Date(currYear, currMonth, i);
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      const isActive =
        i === currDate.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear();

      days.push({
        day: i,
        thisMonth: "yes",
        currentDate: isActive ? "yes" : "no",
        fullDate: formattedDate,
      });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      // creating array of next month first days
      const date = new Date(currYear, currMonth + 1, i - lastDayOfMonth + 1);
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      days.push({
        day: i - lastDayOfMonth + 1,
        thisMonth: "no",
        currentDate: "no",
        fullDate: formattedDate,
      });
    }
    setDaysArray(days);
    console.log(DaysArray);
  };

  return (
    <section className="Calendar-container-component">
      <section className="Calendar-header-and-selectors">
        <section className="calendar-render-header">
          <section className="calendar-render-header-selector">
            <div
              className="selector WeekView"
              onClick={() => {
                setCalendarType("small");
              }}
            >
              Semana
            </div>
            <div
              className="selector MonthView"
              onClick={() => {
                setCalendarType("larger");
              }}
            >
              Mes
            </div>
            <div
              className="selector YearView"
              onClick={() => {
                setCalendarType("year");
              }}
            >
              Año
            </div>
          </section>
          <section className="calendar-render-header-navigator">
            <HiArrowLeft
              className="arrow"
              onClick={() => {
                handleMonthChangePrev();
              }}
            />
            <p>{`${months[currMonth]} ${currYear}`}</p>
            <HiArrowRight
              className="arrow"
              onClick={() => {
                handleMonthChangeNext();
              }}
            />
          </section>
        </section>
      </section>
      <section className="Calendar-body-container">
        <section className="left-side-panel">
          <CalendarMonthlyView
            DaysArray={DaysArray}
            calendarType={calendarType}
          />
        </section>
        {/* Acá muestra los meses del año */}
        {/* Acá muestra los meses del año */}
        {/* Acá muestra los meses del año */}
        {/* <section className="right-side-panel"> 
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
          <CalendarMonthlyView DaysArray={DaysArray} calendarType="small" />
        </section> */}
      </section>
    </section>
  );
};

export default CalendarComponent;
