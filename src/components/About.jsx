import React, { useState, useEffect } from "react";
import About_banner from "./AboutPage/About_banner";
import About_grid1 from "./AboutPage/About_grid";
import Header from "../components/layout/Header";
import About_Header from "../components/AboutPage/About_Header";

function About() {
  window.onload = function() {

    setTimeout (function () {
    
    window.scrollTo(0,0);
    
    },100);
    
    }

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
      {id === "first" ? <About_Header /> : <Header />}
      <div id="first">
        {/* <About_Header /> white*/}

        <About_banner />
      </div>

      <div id="second">
        {/* <Header /> Orange(original)*/}
        <About_grid1 />
      </div>
    </>
  );
}

export default About;
