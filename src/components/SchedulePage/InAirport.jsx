import React from "react";
import ScheduleHeader from "./NoChanging/Schedule_Header";
import ScheduleBanner from "./NoChanging/Schedule_Banner";
import ScheduleGridGreen from "./NoChanging/Schedule_Grid_Green";
import ScheduleGridBlack from "./NoChanging/Schedule_Grid_Black";

function InAirport() {
  return (
    <>
      <ScheduleHeader />
      <ScheduleBanner />
      <ScheduleGridGreen />
      <ScheduleGridBlack />
    </>
  );
}

export default InAirport;
