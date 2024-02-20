import React from "react";
import Schedule_Clock from "./Schedule_Clock";
import Schedule_Interval from "./Schedule_Interval";
import Schedule_Weather from "./Schedule_Weather";

import "../../../../style/Schedule_Timebox.css";

function dummy() {
  return (
    <div className="time_box">
      <div className="clock">
        <Schedule_Clock />
      </div>
      <div className="interval">
        <div className="interval_contry">KOREA</div>
        <Schedule_Interval className="interval_time" />
      </div>
      <div className="weather">
        <Schedule_Weather />
      </div>
    </div>
  );
}

export default dummy;
