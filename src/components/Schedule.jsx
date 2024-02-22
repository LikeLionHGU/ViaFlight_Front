import React, { useState, useEffect } from "react";
import InAirport from "./SchedulePage/InAirport";
import ToggleBtn from "./SchedulePage/Changing/ToggleBtn";
// import Header from "./layout/Header";
import ScheduleHeader from "./SchedulePage/NoChanging/Schedule_Header";
import About_Header from "./AboutPage/About_Header"; //��� header

function Schedule() {
  // header ���� �ٲ�� �ϴ� �Լ�
  const [scrollPosition, setScrollPosition] =
    useState(0); /*scroll ��ġ�� ���� ���� �Լ�*/

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
    scrollPosition > 420 /* header �ٲ�� ���� */
      ? "second"
      : "first"; /*scroll ���̿� ���� ������ �ٲ��*/

  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setisOn(!isOn);
  };

  return (
    <>
      {id === "first" ? <ScheduleHeader /> : <About_Header />}
      <ToggleBtn isOn={isOn} toggleHandler={toggleHandler} />
      {isOn ? "out" : <InAirport />}
    </>
  );
}

export default Schedule;
