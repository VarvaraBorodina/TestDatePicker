import React from "react";
import { Calendar } from "calendar-with-todo-list";

const YearCalendar = () => {
  return (
    <div>
      <Calendar
        todoList={true}
        type={2}
        daysOff={true}
        weekends={true}
        color={"#813DF4"}
      />
    </div>
  );
};

export default YearCalendar;
