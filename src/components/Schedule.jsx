import React, { useState, useEffect } from "react";
import InAirport from "./SchedulePage/InAirport";
import ToggleBtn from "./SchedulePage/Changing/ToggleBtn";
// import Header from "./layout/Header";
import ScheduleHeader from "./SchedulePage/NoChanging/Schedule_Header";
import About_Header from "./AboutPage/About_Header"; //흰색 header

function Schedule() {
  // header 색상 바뀌게 하는 함수
  const [scrollPosition, setScrollPosition] =
    useState(0); /*scroll 위치에 따라서 저장 함수*/

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  const id =
    scrollPosition > 420 /* header 바뀌는 높이 */
      ? "second"
      : "first"; /*scroll 높이에 따라서 조건이 바뀌도록*/

  return (
    <>
      {id === "first" ? <ScheduleHeader /> : <About_Header />}
      <ToggleBtn />
      <InAirport />
    </>
  );
}

export default Schedule;
