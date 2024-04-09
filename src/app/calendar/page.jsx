"use client";
import React, { useState } from "react";
import UserTable from "@/Components/UserTable/UserTable";
import CalendarComponent from "@/Components/CalendarComponent/CalendarComponent";


const Calendar = () => {
  const [calendarView, setCalendarView] = useState("MonthView");
  // return <CalendarMonthView />;
  return <CalendarComponent />;
  // return <MonthlyCalendar />;

  // switch (calendarView) {
  //   case "WeekView":
  //     return (
  //       <>
  //         <h1 className="text-white">
  //           esta parte va a envolver el cuadro completo{" "}
  //         </h1>
  //         <CalendarHeaders setCalendarView={setCalendarView} />
  //         <div
  //           // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
  //           className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
  //           // style={{ gridTemplateColumns: "25% 75%" }}
  //         >
  //           <CalendarWeekView />
  //         </div>
  //       </>
  //     );
  //   case "MonthView":
  //     return (
  //       <>
  //         {/* <CalendarHeaders setCalendarView={setCalendarView} /> */}

  //         <div
  //           // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
  //           className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
  //           // style={{ gridTemplateColumns: "25% 75%" }}
  //         >
  //           {/* <CalendarMonthView /> */}
  //         </div>
  //       </>
  //     );
  //   default:
  //     return (
  //       <>
  //         {/* <CalendarHeaders setCalendarView={setCalendarView} /> */}
  //         <div
  //           // className="grid grid-cols-2 justify-items-center bg-white dark:bg-gray-600"
  //           className="justify-items-center bg-white w-full p-4 rounded-bl-lg dark:bg-gray-600 dark:text-white"
  //           // style={{ gridTemplateColumns: "25% 75%" }}
  //         >
  //           {/* <CalendarYearView  /> */}
  //         </div>
  //       </>
  //     );
  // }
};

export default Calendar;
