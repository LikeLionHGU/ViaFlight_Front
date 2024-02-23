import React from "react";
import ScheduleClock from "./Schedule_clock";
import ScheduleInterval from "./Schedule_interval";
import ScheduleWeather from "./Schedule_weather";

import "../../../../style/Schedule_Timebox.css";

function Schedule_Timebox() {
  return (
    <div className="time_box">
      <div className="clock">
        <ScheduleClock />
      </div>
      <div className="interval">
        <div className="interval_contry">KOREA</div>
        <ScheduleInterval className="interval_time" />
      </div>
      <div className="weather">
        <ScheduleWeather />
      </div>
    </div>
  );
}

export default Schedule_Timebox;

//
