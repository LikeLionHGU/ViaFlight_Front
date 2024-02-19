import React from "react";
import "../../../style/Schedule_Banner.css";

function Schedule_Banner() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_Icons">
          공항기본 정보 ICON Components
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

export default Schedule_Banner;
