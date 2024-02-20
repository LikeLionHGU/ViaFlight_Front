import React from "react";
import "../../../style/Schedule_Banner2.css";

import Schedule_Timebox from "./NoChangeComponents/Schedule_Timebox";

function Schedule_Banner2() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_Icons">
          공항기본 정보 ICON Components
        </div>
        <div className="Schedule_Frame_Banner_infoWeather">
          <Schedule_Timebox /> {/*시간 정보*/}
        </div>
      </div>
    </>
  );
}

export default Schedule_Banner2;
