import React from "react";
import { Calendar } from "calendar-with-todo-list";

const YearCalendar = () => {
  return (
    <div>
      <Calendar todoList={true} type={2} daysOff={true} weekends={true} />
    </div>
  );
};

export default YearCalendar;
