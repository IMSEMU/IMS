import { useState } from "react";

export const DateInput = ({ placeholder, onDateChange, max, min }) => {
  const [inputType, setInputType] = useState("text");
  const [date, setDate] = useState(null); // State to store the date

  const handleFocus = () => {
    setInputType("date");
  };

  const handleBlur = () => {
    setInputType("text");
  };

  const handleChange = (e) => {
    const inputDate = new Date(e.target.value);
    setDate(inputDate);

    if (onDateChange) {
      onDateChange(inputDate);
    }
  };

  return (
    <input
      type={inputType}
      className="form-control input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow border-x-0 border-t-0 mt-1 border-2 focus:outline-none"
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      value={date ? date.toISOString().slice(0, 10) : ""} // Display in YYYY-MM-DD format
      max={max}
      min={min}
    />
  );
};
