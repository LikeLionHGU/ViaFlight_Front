import React from "react";
import ScheduleBanner1 from "./NoChanging/Schedule_Banner1";
import ScheduleBanner2 from "./NoChanging/Schedule_Banner2";
import ScheduleGridGreen from "./NoChanging/Schedule_Grid_Green";
import ScheduleSlider from "./Changing/InAirport/ScheduleSlider";
import InTraffic from "./Changing/InAirport/InView/InTraffic";

import Fadein from "../AboutPage/About_fadin"; //fadein ȿ��

function InAirport() {
  return (
    <>
      <Fadein>
        <ScheduleBanner1 />
      </Fadein>
      <Fadein>
        <ScheduleBanner2 />
      </Fadein>
      <Fadein>
        <ScheduleGridGreen />
      </Fadein>
      <Fadein>
        <ScheduleSlider />
      </Fadein>
      <InTraffic />
    </>
  );
}

export default InAirport;
