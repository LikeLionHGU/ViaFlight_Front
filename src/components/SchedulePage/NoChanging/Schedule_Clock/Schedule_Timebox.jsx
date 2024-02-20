import React from "react";
import Schedule_Clock from "./Schedule_clock";
import Schedule_Interval from "./Schedule_interval";
import Schedule_Weather from "./Schedule_weather";

import "../../../../style/Schedule_Timebox.css";

function Schedule_Timebox() {
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

export default Schedule_Timebox;

//
