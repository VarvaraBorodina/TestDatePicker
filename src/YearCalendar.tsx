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
        color={"#B3B3FF"}
      />
    </div>
  );
};

export default YearCalendar;
