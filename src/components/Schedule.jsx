import React from "react";
import InAirport from "./SchedulePage/InAirport";
import ToggleBtn from "./SchedulePage/Changing/ToggleBtn";
// import Header from "./layout/Header";
import Schedule_Header from "./SchedulePage/NoChanging/Schedule_Header";
function Schedule() {
  return (
    <>
      {/* <Header /> */}
      <Schedule_Header />
      <ToggleBtn />
      <InAirport />;
    </>
  );
}

export default Schedule;
