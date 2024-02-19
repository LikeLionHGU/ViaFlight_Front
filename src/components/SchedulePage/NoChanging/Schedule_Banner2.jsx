import React from "react";
import "../../../style/Schedule_Banner2.css";
import SimpleInfo from "../Changing/SimpleInfo";

function Schedule_Banner2() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_Icons">
          <SimpleInfo />
        </div>
        <div className="Schedule_Frame_Banner_infoWeather">
          <div className="currentTime">현재시각</div>
          <div className="intervalTime">시차</div>
          <div className="weather">날씨</div>
        </div>
      </div>
    </>
  );
}

export default Schedule_Banner2;
