import React from "react";
import "../../../style/Schedule_Banner2.css";
import SimpleInfo from "../Changing/InAirport/InSimpleInfo";
import Schedule_Timebox from "./Schedule_Clock/Schedule_Timebox";

function Schedule_Banner2() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_infoBox">
          {/* sticky 효과를 위한 div */}
          <div className="Schedule_Frame_Banner_Icons">
            <SimpleInfo />
          </div>
          <div className="Schedule_Frame_Banner_infoWeather">
            <Schedule_Timebox /> {/*시간 정보*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule_Banner2;
