import React, { useState } from "react";
import styled from "styled-components";
import "../../style/header.css";
import { Link } from "react-router-dom";

// Header BTN 영역(Button 역할)
const NavigtionSpan = styled.div`
  display: inline-flex;

  width: 150px;
  height: 70px;
  border: 1px solid black;

  //문자 좌측하단 정렬

  justify-content: flex-start;
  align-content: center;
  align-items: flex-end;

  .location {
    width: 200px;
    font-size: 8px;
  }
`;

function Location() {
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");

  function onGeoOk(position) {
    setlat(position.coords.latitude); // 위도 정보 추출
    setlon(position.coords.longitude); // 경도 정보 추출
    console.log(position);
  }
  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  return (
    <div className="location">
      {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
      🌐 {lat}°N, {lon}°E
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      {/* Header Logo 부분 */}
      <img
        className="img_logo"
        src="https://bit.ly/3OtSJYc"
        alt="via-flight-logo"
      ></img>

      {/* Header BTN 부분 */}
      <div className="header-BTN">
        <Link to={`/`}>
          <NavigtionSpan id="ticket">내 경유지 조회</NavigtionSpan>
        </Link>

        <Link to={`/schedule`}>
          <NavigtionSpan id="schedule">맞춤형 여행 일정</NavigtionSpan>
        </Link>

        <Link to={`/about`}>
          <NavigtionSpan id="about">ABOUT US</NavigtionSpan>
        </Link>

        <NavigtionSpan>
          <Location></Location>
        </NavigtionSpan>
      </div>
    </div>
  );
}

export default Header;
