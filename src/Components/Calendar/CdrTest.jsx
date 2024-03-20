// components/DateInput.js
import React from 'react';

const DateInput = () => {
  return (
    <div>
      <label htmlFor="date">Choose a date:</label>
      <input type="date" id="date" name="date" className="date-input" />
    </div>
  );
};

export default DateInput;
