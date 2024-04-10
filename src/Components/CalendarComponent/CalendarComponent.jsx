"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { CalendarMonthlyView } from "./CalendarMonthlyView";
import { CalendarWeeklyView } from "./CalendarWeeklyView";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./styles.css";
// Este componente va a renderizar todo el calendario

const CalendarComponent = () => {
  // const [calendarView, setCalendarView] = useState("month");

  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(
    currDate.toISOString().split("T")[0]
  );
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [DaysArray, setDaysArray] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [calendarType, setCalendarType] = useState("month");

  useEffect(() => {
    renderCalendar();
  }, [currMonth]);

  useEffect(() => {
    console.log(calendarType);
  }, [calendarType]);

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

  const renderCalendar = (targetYear, targetMonth) => {
    const firstDayOfMonth = new Date(targetYear, targetMonth, 1).getDay(); // getting first day of month
    const lastDateOfMonth = new Date(targetYear, targetMonth + 1, 0).getDate(); // getting last date of month
    const lastDayOfMonth = new Date(
      targetYear,
      targetMonth,
      lastDateOfMonth
    ).getDay(); // getting last day of month
    const lastDateOfLastMonth = new Date(targetYear, targetMonth, 0).getDate(); // getting last date of previous month
    const days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      // creating array of previous month last days
      const date = new Date(
        targetYear,
        targetMonth - 1,
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
      const date = new Date(targetYear, targetMonth, i);
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      const isActive =
        i === currDate.getDate() &&
        targetMonth === new Date().getMonth() &&
        targetYear === new Date().getFullYear();

      days.push({
        day: i,
        thisMonth: "yes",
        currentDate: isActive ? "yes" : "no",
        fullDate: formattedDate,
      });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      // creating array of next month first days
      const date = new Date(
        targetYear,
        targetMonth + 1,
        i - lastDayOfMonth + 1
      );
      const formattedDate = date.toISOString().split("T")[0]; // Format date as yyyy-mm-dd
      days.push({
        day: i - lastDayOfMonth + 1,
        thisMonth: "no",
        currentDate: "no",
        fullDate: formattedDate,
      });
    }
    return days;
  };

  return (
    <section className="Calendar-container-component">
      <section className="Calendar-header-and-selectors">
        <section className="calendar-render-header">
          <section className="calendar-render-header-selector">
            <div
              className={`selector WeekView ${
                calendarType === "week" ? "active" : ""
              }`}
              onClick={() => {
                setCalendarType("week");
              }}
            >
              Semana
            </div>
            <div
              className={`selector MonthView ${
                calendarType === "month" ? "active" : ""
              }`}
              onClick={() => {
                setCalendarType("month");
              }}
            >
              Mes
            </div>
            <div
              className={`selector YearView ${
                calendarType === "year" ? "active" : ""
              }`}
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
      {calendarType === "month" && (
        <section className="Calendar-body-container-monthview">
          <CalendarMonthlyView
            DaysArray={renderCalendar(currYear, currMonth)}
            calendarType={calendarType}
          />
        </section>
      )}
      {calendarType === "week" && (
        <section className="Calendar-body-container-weekview">
          <div className="week-calendar-selector">
            <CalendarMonthlyView
              DaysArray={renderCalendar(currYear, currMonth)}
              calendarType="small"
            />
          </div>
          <CalendarMonthlyView
            DaysArray={[1, 2, 3, 4, 5, 6, 7]}
            // DaysArray={renderCalendar(currYear, currMonth)}
          />
        </section>
      )}
      {calendarType === "year" && (
        <section className="Calendar-body-container-yearview">
          <div className="year-calendar-selector">
            <CalendarMonthlyView
              DaysArray={renderCalendar(0, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(1, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(2, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(3, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(4, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(5, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(6, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(7, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(8, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(9, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(10, currMonth)}
              calendarType="small"
            />
            <CalendarMonthlyView
              DaysArray={renderCalendar(11, currMonth)}
              calendarType="small"
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default CalendarComponent;