import React from "react";
import "../../../style/Schedule_Banner2.css";
import SimpleInfo from "../Changing/InAirport/InSimpleInfo";
import ScheduleTimebox from "./Schedule_Clock/Schedule_Timebox";
import SimpleinfoOut from "../Changing/OutAirport/Simpleinfo_out";

function Schedule_Banner2({ isOn }) {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_infoBox">
          {/* sticky 효과를 위한 div */}
          <div className="Schedule_Frame_Banner_Icons">
            {isOn ? <SimpleinfoOut /> : <SimpleInfo />}
          </div>
          <div className="Schedule_Frame_Banner_infoWeather">
            <ScheduleTimebox /> {/*시간 정보*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule_Banner2;
