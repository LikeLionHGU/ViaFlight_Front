import React from "react";
import ScheduleBanner1 from "./NoChanging/Schedule_Banner1";
import ScheduleBanner2 from "./NoChanging/Schedule_Banner2";
import ScheduleGridGreen from "./NoChanging/Schedule_Grid_Green";
import ScheduleSlider from "./Changing/ScheduleSlider";

function InAirport() {
  return (
    <>
      <ScheduleBanner1 />
      <ScheduleBanner2 />
      <ScheduleGridGreen />
      <ScheduleSlider />
    </>
  );
}

export default InAirport;
