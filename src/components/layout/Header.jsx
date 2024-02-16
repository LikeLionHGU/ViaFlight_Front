import React, { useState } from "react";
import styled from "styled-components";
import "../../style/header.css";
import { Link } from "react-router-dom";
import header_Logo from "../../style/headerStyle/header_logo.png";
import Earth_Icon from "../../style/headerStyle/Earth_Icon.png";
import Navigation_Bar_line from "../../style/headerStyle/Navigation_Bar_Line.png";

// Header BTN 영역(Button 역할)
const NavigtionSpan = styled.div`
  display: inline-flex;
  flex-direction: row;
  space-between: 5px;

  width: 150px;
  height: 100%;
  //border-left: 1px solid blue; //border 색상

  color: #ec4d27;

  //문자 좌측하단 정렬
  justify-content: flex-start;
  align-content: center;
  align-items: flex-end;

  .img_logo {
    position: absolute; /*Logo 위치 조정*/
    /*Logo 위치 수직방향 위치, [Logo의 위치]*/
  }

  .header_logo {
    width: 300px;
  }
`;

function Location() {
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");

  function onGeoOk(position) {
    setlat(position.coords.latitude); // 위도 정보 추출
    setlon(position.coords.longitude); // 경도 정보 추출
    // console.log(position);
  }
  function onGeoError() {
    alert("Can't find you. No location for you");
  }
  //🌐
  return (
    <div className="location">
      {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
      <div className="location_icon">
        <img src={Earth_Icon}></img>
      </div>
      <div className="location_text">
        {lat}° N, {lon}° E
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header_sticky">
      <div className="header">
        {/* Header Logo 부분 */}
        {/* <img
          className="img_logo"
          src="https://bit.ly/3OtSJYc"
          alt="via-flight-logo"
        ></img> */}

        {/* Header BTN 부분 */}
        <div className="header-BTN">
          {/* Header Logo 부분 */}
          <div className="header_logo">
            <img
              className="img_logo"
              src={header_Logo}
              alt="via-flight-logo"
            ></img>
          </div>

          <Link to={`/`} className="ticket_link">
            <NavigtionSpan id="ticket">
              <div className="ticket_text">내 경유지 조회</div>
            </NavigtionSpan>
          </Link>

          <Link to={`/schedule`} className="schedule_link">
            <NavigtionSpan id="schedule">
              <div className="schedule_text">맞춤형 여행 일정</div>
            </NavigtionSpan>
          </Link>

          <Link to={`/about`} className="about_link">
            <NavigtionSpan id="about">
              <div className="about_text">ABOUT US</div>
            </NavigtionSpan>
          </Link>

          <NavigtionSpan id="header_location">
            <Location></Location>
          </NavigtionSpan>
        </div>
        <img className="header_bar_line" src={Navigation_Bar_line}></img>
      </div>
    </div>
  );
}

export default Header;
