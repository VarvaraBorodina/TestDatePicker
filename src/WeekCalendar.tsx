import React from "react";
import { Calendar } from "calendar-with-todo-list";

const WeekCalendar = () => {
  return (
    <div>
      <Calendar
        todoList={true}
        type={0}
        daysOff={true}
        weekends={true}
        color={"#B3B3FF"}
      />
    </div>
  );
};

export default WeekCalendar;
