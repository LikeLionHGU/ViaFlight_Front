import React from "react";
import ScheduleBanner1 from "./NoChanging/Schedule_Banner1";
import ScheduleBanner2 from "./NoChanging/Schedule_Banner2";
import ScheduleGridGreen from "./Changing/InAirport/Schedule_Grid_Green";
import ScheduleSlider from "./Changing/InAirport/ScheduleSlider";
import InTraffic from "./Changing/InAirport/InView/InTraffic";
import InGuide from "./Changing/InAirport/InGuide";

function InAirport() {
  return (
    <>
      <ScheduleBanner1 />
      <ScheduleBanner2 />
      <ScheduleGridGreen />
      <ScheduleSlider />
      <InTraffic />
      <InGuide />
    </>
  );
}

export default InAirport;
