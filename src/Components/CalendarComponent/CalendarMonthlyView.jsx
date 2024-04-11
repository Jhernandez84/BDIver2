import React, { useEffect } from "react";
import { useState } from "react";
import CalendarModal from "./CalendarModal";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./styles.css";

export const CalendarMonthlyView = ({
  DaysArray,
  calendarType,
  calendarView,
}) => {
  console.log(DaysArray);
  // getting new date, current year and month
  const [currDate, setCurrDate] = useState(new Date());
  const [currFormattedDate, setCurrFormattedDate] = useState(
    currDate.toISOString().split("T")[0]
  );
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCreateEvent = (date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    // <section className="calendar-container">
    <section
      className={`${
        calendarType === "small"
          ? "calendar-container-small"
          : "calendar-container-fullScreen"
      }`}
    >
      {/* <section className="calendar-header">Header</section> */}
      {isModalOpen && (
        <CalendarModal closeModal={closeModal} item={selectedDate} />
      )}
      <section className="calendar-render">
        <section className="calendar-render-body">
          {/* <div className="calendar-render-body-daysHeaders"> */}
          <table>
            <thead className="calendar-render-body-headers">
              <tr>Lun</tr>
              <tr>Mar</tr>
              <tr>Mier</tr>
              <tr>Juev</tr>
              <tr>Vier</tr>
              <tr>Sab</tr>
              <tr>Dom</tr>
            </thead>
            <tbody className="calendar-render-body-days">
              {calendarView === "WeekView"
                ? DaysArray.map((day, index) => (
                    <td
                      key={day.fullDate}
                      // className={`${
                      //   day.thisMonth === "yes" ? "current" : "non-current"
                      // } ${
                      //   day.thisMonth === "yes" && day.currentDate === "yes"
                      //     ? "active"
                      //     : ""
                      // }`}
                    >
                      {day.day}
                      {day.timeSlot.map((time, index) => (
                        <>
                          <div
                            key={index}
                            className={`${
                              time.Status === "Available"
                                ? "timeSelector Available"
                                : "timeSelector Busy"
                            }`}
                          >
                            <p>{time.Time}</p>
                            <p>{time.User}</p>
                          </div>
                        </>
                      ))}
                    </td>
                  ))
                : DaysArray.map((day, index) => (
                    <td
                      key={day.fullDate}
                      className={`${
                        day.thisMonth === "yes" ? "current" : "non-current"
                      } ${
                        day.thisMonth === "yes" && day.currentDate === "yes"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        handleCreateEvent(day.formattedDate);
                      }}
                    >
                      {day.day}
                    </td>
                  ))}
            </tbody>
          </table>
          {/* </div> */}
        </section>
      </section>
      <section className="calendar-footer">
        <p
          onClick={() => {
            handleGoCurrentDate();
          }}
        >
          Hoy: {`${currFormattedDate}`}
        </p>
      </section>
    </section>
  );
};
