import React from "react";
// import Schedule_Header from "./Schedule_layout/Schedule_header";
// import Header from "../layout/Header";
import "../../style/InAirport.css";
import upArrow from "../../img/inairport_grid_UpArrow.png";
import styled from "styled-components";

function InAirport() {
  return (
    <>
      <div className="InAIrport_Header">
        <div className="InAIrport_Header_btn"> In/Out 스위치 component</div>
        <div className="InAIrport_Header_text">
          <div className="text1">one of the best airports in the world</div>
          <div className="text2">SINGAPORE CHANGI AIRPORT</div>
        </div>
      </div>

      <div className="InAIrport_Banner">
        <div className="InAirport_Banner_Icons">
          공항기본 정보 ICON Components
        </div>
        <div className="InAirport_Banner_infoWeather">
          <div className="currentTime">현재시각</div>
          <div className="intervalTime">시차</div>
          <div className="weather">날씨</div>
        </div>
      </div>

      <div className="InAIrport_Grid1">
        <div className="InAIrport_Grid1_title">
          EXPERIENCE IN AIRPORT
          <hr />
        </div>
        <div className="InAIrport_Grid1_recommend">
          추천 정보(시설/휴식/식사/면세) components
        </div>
        <div className="InAIrport_Grid1_Arrow">
          <img className="Uparrow" src={upArrow} alt="화살표"></img>
        </div>
        <div className="InAIrport_Grid1_Btn">공항 속 새로운 경험하러가기</div>
      </div>

      <div className="InAIrport_Grid2">
        <div className="InAIrport_Grid2_recommend">
          추천 정보(프로모션/전시회) components
        </div>
      </div>
    </>
  );
}

export default InAirport;
