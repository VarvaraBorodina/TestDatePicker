import React from "react";
import { Calendar } from "calendar-with-todo-list";

const MonthCalendar = () => {
  return (
    <div>
      <Calendar
        todoList={true}
        type={1}
        daysOff={true}
        weekends={true}
        color="#813DF4"
      />
    </div>
  );
};

export default MonthCalendar;
