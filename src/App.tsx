import React, { useState } from "react";
import MonthCalendar from "./MonthCalendar";
import WeekCalendar from "./WeekCalendar";
import YearCalendar from "./YearCalendar";

function App() {
  const [type, setType] = useState(0);
  return (
    <div style={{ margin: 30 }}>
      <div>
        <button onClick={() => setType(0)}>Month</button>
        <button onClick={() => setType(2)}>Year</button>
        <button onClick={() => setType(1)}>Week</button>
      </div>
      {type === 0 ? (
        <MonthCalendar />
      ) : type === 1 ? (
        <WeekCalendar />
      ) : (
        <YearCalendar />
      )}
    </div>
  );
}

export default App;
