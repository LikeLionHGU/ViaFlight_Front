import React, { useState, useEffect } from "react";
import AboutBanner from "./AboutPage/About_banner";
import AboutGrid1 from "./AboutPage/About_grid";
import Header from "../components/layout/Header";
import AboutHeader from "../components/AboutPage/About_Header";

function About() {
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  };

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
    scrollPosition > 1300
      ? "second"
      : "first"; /*scroll 높이에 따라서 조건이 바뀌도록*/

  return (
    <>
      {id === "first" ? <AboutHeader /> : <Header />}
      <div id="first">
        {/* <About_Header /> white*/}

        <AboutBanner />
      </div>

      <div id="second">
        {/* <Header /> Orange(original)*/}
        <AboutGrid1 />
      </div>
    </>
  );
}

export default About;
