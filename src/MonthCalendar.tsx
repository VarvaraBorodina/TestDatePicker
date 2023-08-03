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
        color="#B3B3FF"
      />
    </div>
  );
};

export default MonthCalendar;
