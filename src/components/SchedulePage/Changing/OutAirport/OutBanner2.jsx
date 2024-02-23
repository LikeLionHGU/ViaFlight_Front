import React from "react";
import "../../../../style/Schedule_Banner2.css";
import SimpleInfo_out from "./Simpleinfo_out";
import Schedule_Timebox from "../../NoChanging/Schedule_Clock/Schedule_Timebox";

function OutBanner2() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_infoBox">
          {/* sticky 효과를 위한 div */}
          <div className="Schedule_Frame_Banner_Icons">
            <SimpleInfo_out />
          </div>
          <div className="Schedule_Frame_Banner_infoWeather">
            <Schedule_Timebox /> {/*시간 정보*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default OutBanner2;
