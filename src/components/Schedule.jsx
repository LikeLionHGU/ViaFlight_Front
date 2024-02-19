import React from "react";
import InAirport from "./SchedulePage/InAirport";
import ToggleBtn from "./SchedulePage/Changing/ToggleBtn";
// import Header from "./layout/Header";
import ScheduleHeader from "./SchedulePage/NoChanging/Schedule_Header";
function Schedule() {
  return (
    <>
      <ScheduleHeader />
      <ToggleBtn />
      <InAirport />
    </>
  );
}

export default Schedule;
