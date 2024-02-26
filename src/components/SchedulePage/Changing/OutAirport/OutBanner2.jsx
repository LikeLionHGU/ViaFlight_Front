import React from "react";
import "../../../../style/Schedule_Banner2.css";
import SimpleInfoOut from "./Simpleinfo_out";
import ScheduleTimebox from "../../NoChanging/Schedule_Clock/Schedule_Timebox";

function OutBanner2() {
  return (
    <>
      <div className="Schedule_Frame_Banner">
        <div className="Schedule_Frame_Banner_infoBox">
          {/* sticky ȿ���� ���� div */}
          <div className="Schedule_Frame_Banner_Icons">
            <SimpleInfoOut />
          </div>
          <div className="Schedule_Frame_Banner_infoWeather">
            <ScheduleTimebox /> {/*�ð� ����*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default OutBanner2;
