import React, { useState } from "react";
import '../pages.css'
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  const today = new Date();

  const prevMonth = () => {
    const newDate = new Date(year, month - 1, 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(year, month + 1, 1);
    setCurrentDate(newDate);
  };

  const monthYearString = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const generateCalendar = () => {
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const thisDate = new Date(year, month, i);
      const isToday =
        today.getDate() === i &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      days.push(
        <div
          key={i}
          className={`p-2 text-center rounded-full cursor-pointer transition-all duration-200 ${
            isToday ? "bg-blue-500 text-white" : "hover:bg-blue-100"
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className=" mx-auto p-4 rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,0.0.6)]  bg-bg-body-white   w-full ">
      <div className="flex justify-center gap-5 items-center mb-4">
        <button onClick={prevMonth} className="  cursor-pointer"><i class="fa-solid fa-angle-left text-2xl "></i></button>
        <h2 className="text-xl font-semibold">{monthYearString}</h2>
        <button onClick={nextMonth} className="text-lg font-bold cursor-pointer "><i class="fa-solid fa-angle-right text-2xl "></i></button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-600 mb-2">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>
    </div>
  );
}

export default Calender;
