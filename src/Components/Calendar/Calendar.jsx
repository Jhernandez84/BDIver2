// DatePicker.js
import React, { useState } from "react";

const CalendarPicker = () => {
  return (
    <div>
      <Datepicker
        language="es-CL"
        showTodayButton={false}
        showClearButton={false}
        labelTodayButton="Hoy"
        labelClearButton="Limpiar"
        weekStart={3}
        showPopperArrow={true} // or another relevant prop
        inline
      />
    </div>
  );
};

function QuickDatePicker() {

  const Consl = (selectedDate) => {
    const day = selectedDate.getDate();
    const weekNumber = getWeekNumber(selectedDate);
    console.log('clicked' + day + ' semana ' + weekNumber)
  }

  const getWeekNumber = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
  };

  return (
    <div>
      <Datepicker
        language="es-CL"
        weekStart={3}
        labelTodayButton="Hoy"
        labelClearButton="Limpiar"
        icon={false}
        onSelectedDateChanged={Consl}
      />
    </div>
  );
}

export { CalendarPicker, QuickDatePicker };
