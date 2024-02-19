import React from "react";
import InAirport from "./SchedulePage/InAirport";
import ToggleBtn from "./SchedulePage/Changing/ToggleBtn";
import Header from "./layout/Header";

function Schedule() {
  return (
    <>
      <Header />
      <ToggleBtn />
      <InAirport />;
    </>
  );
}

export default Schedule;
