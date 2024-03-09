// components/Calendar.js
import React from "react";
import { useState } from "react";
import MyModal from "./CalendarModal";
import "./styles.css";

const daysInMonth = (month, year) => {
  const datys = new Date(year, month + 1, 0).getDate();
  return new Date(year, month + 1, 0).getDate();
};

const getWeek = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
};

const generateCalendar = (month, year) => {
  const totalDays = daysInMonth(month, year);
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const calendar = [];

  // Llena los días del mes anterior
  const prevMonthDays = daysInMonth(
    month - 1 < 0 ? 11 : month - 1,
    month - 1 < 0 ? year - 1 : year
  );
  const prevMonthStart = prevMonthDays - firstDayOfWeek + 1;
  for (let i = prevMonthStart; i <= prevMonthDays; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month - 1 < 0 ? 11 : month - 1, i)),
      isPrevMonth: true,
    });
  }

  // Llena los días del mes actual
  for (let day = 1; day <= totalDays; day++) {
    calendar.push({
      day,
      week: getWeek(new Date(year, month, day)),
      isPrevMonth: false,
      fulldate: `${year}-${month < 10 ? '0' : ''}${month + 1}-${day < 10 ? '0' : ''}${day}`,
    });
  }

  // Llena los días del mes siguiente
  const daysAfter = 42 - calendar.length;
  for (let i = 1; i <= daysAfter; i++) {
    calendar.push({
      day: i,
      week: getWeek(new Date(year, month + 1 > 11 ? 0 : month + 1, i)),
      isNextMonth: true,
    });
  }

  // console.log(calendar)
  return calendar;
};

const getMonthName = (monthNumber) => {
  const monthDate = new Date(2023, monthNumber - 1, 1); // Month is zero-based
  return monthDate.toLocaleString("es-CL", { month: "long" });
};

const CalendarMonthView = ({ month = new Date().getMonth(), year = new Date().getFullYear(), Fscreen }) => {

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const day = currentDate.getDate();

    // Format the date as a string (optional)
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    // console.log(formattedDate)
    return formattedDate;
  };

  // Example usage
  const [monthCalendar, setMonthCalendar] = useState(month);
  const [yearCalendar, setYearCalendar] = useState(year);

  const calendar = generateCalendar(monthCalendar, yearCalendar);

  const [isModalOpen, setModalOpen] = useState(false);
  const [SelectedDate, setSelectedDate] = useState(false);
  const [showMonthSelector, setShowMonthSelector] = useState(false);
  const [calendarView, setCalendarView] = useState("default"); //Default => Calendar, Year=> Year Selector, Month => Month Selector
  const [fullScreen, setFullScreen] = useState(false);

  const initialState = () => {
    setMonthCalendar(month);
    setYearCalendar(year);
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dateHandler = (e) => {
    setSelectedDate(e);
    openModal();
  };

  const MonthsArray = [
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

  const generateYearArray = () => {
    const yearArray = Array.from(
      { length: 25 },
      (_, index) => year - 10 + index
    );
    return yearArray;
  };

  const Years = generateYearArray();

  const HandlerCalendarView = (value) => {
    calendarView == value ? setCalendarView("default") : setCalendarView(value);
  };

  return (
    <>
      {isModalOpen && (
        <MyModal onClose={closeModal} SelectedDate={SelectedDate} />
      )}
      <div className="dark:bg-gray-700 rounded-md shadow-xl w-[320px] h-[312px]">
        <div className="grid grid-rows flex justify-center content-center p-2">
          <div className="text-center p-2 dark:bg-gray-800 rounded-t-md">
            <div className="grid grid-cols-2 justify-center content-center space-x-4"
              style={{ gridTemplateColumns: '50% 50%' }}>
              <div className="grid grid-cols-3" style={{ gridTemplateColumns: '20% 60% 20%' }}>
                <div className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => setMonthCalendar(monthCalendar - 1)}>
                  <h2>{`<`}</h2>
                </div>
                <h2
                  className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => HandlerCalendarView("month")}
                >{`${getMonthName(monthCalendar + 1)}`}</h2>
                <div className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => setMonthCalendar(monthCalendar + 1)}>
                  <h2>{`>`}</h2>
                </div>
              </div>
              <div className="grid grid-cols-3" style={{ gridTemplateColumns: '20% 60% 20%' }}>
                <div className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => setYearCalendar(year - 1)}>
                  <h2>{`<`}</h2>
                </div>
                <h2
                  className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => HandlerCalendarView("year")}
                >{`${yearCalendar}`}</h2>
                <div className="text-md dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => setYearCalendar(year + 1)}>
                  <h2>{`>`}</h2>
                </div>
              </div>
            </div>
          </div>
          {calendarView == "month" ? (
            <div className="grid grid-cols-3 justify-center content-center p-4">
              {MonthsArray.map((mesNombre, index) => (
                <p
                  key={mesNombre} // Add a unique key for each element when using map
                  className={`p-2 dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded {${mesNombre}== ${getMonthName()}}`}
                  onClick={() => {
                    setMonthCalendar(index);
                    HandlerCalendarView("month");
                  }}
                >
                  {mesNombre}
                </p>
              ))}
            </div>
          ) : (
            []
          )}
          {calendarView == "year" ? (
            <div className="grid grid-cols-5 justify-center content-center p-4">
              {Years.map((year) => (
                <p
                  key={year} // Using year as the key
                  className="p-2 dark:hover:cursor-pointer dark:hover:bg-teal-600 rounded"
                  onClick={() => {
                    setYearCalendar(year);
                    HandlerCalendarView("year");
                  }}
                >
                  {year}
                </p>
              ))}
            </div>
          ) : (
            []
          )}
          {calendarView == "default" ? (
            <table className="dark:bg-gray-700 rounded shadow-xl self-center">
              <thead className="">
                <tr className="ligth:white dark:gray-800 h-8 text-gray-500 shadow">
                  <th className="dark:hover:cursor-default w-12 p-1">Sem</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Lun</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Mar</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Mié</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Jue</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Vie</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Sáb</th>
                  <th className="dark:hover:cursor-default w-8 p-1">Dom</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, weekIndex) => (
                  <tr key={weekIndex} className="text-xs">
                    {Array.from({ length: 8 }).map((_, dayIndex) => {
                      const dataIndex = weekIndex * 7 + dayIndex;
                      const dayInfo = calendar[dataIndex];
                      if (dayIndex === 0) {
                        return (
                          <td
                            className="text-xs text-center dark:hover:cursor-default p-2 text-rose-400"
                            key={dayIndex}
                          >
                            {dayInfo ? dayInfo.week : ""}
                          </td>
                        );
                      }
                      if (dayInfo?.isPrevMonth === true || dayInfo?.isNextMonth === true) {
                        return (
                          <td
                            className="text-center text-base cursor-not-allowed dark:text-gray-500 rounded"
                            key={dayIndex}
                          >
                            {dayInfo ? dayInfo.day : ""}
                          </td>
                        );
                      } else {
                        if (dayInfo?.fulldate === getCurrentDate()) {
                          return (
                            <td
                              onClick={() => dateHandler(dayInfo.fulldate)}
                              className="text-center text-base cursor-pointer dark:bg-teal-600 dark:hover:bg-teal-600 rounded-lg"
                              key={dayIndex}
                            >
                              {dayInfo ? dayInfo.day : ""}
                            </td>
                          );
                        } else {
                          return (
                            <td
                              onClick={() => dateHandler(dayInfo.fulldate)}
                              className="text-center text-base cursor-pointer dark:hover:bg-teal-600 rounded"
                              key={dayIndex}
                            >
                              {dayInfo ? dayInfo.day : ""}
                            </td>
                          );
                        }
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            []
          )}
          <div className="dark:hover:bg-teal-600 dark:hover:cursor-pointer text-center p-1 dark:bg-gray-800 rounded-b-md"
            onClick={() => { initialState(); HandlerCalendarView('default') }}
          >
            Hoy
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarMonthView;
