import React, { useState } from "react";
import styled from "styled-components";
import "../../../style/Schedule_header.css"; /*변경 필요*/
import { Link } from "react-router-dom";
import header_Logo from "../../../img/header_logo.png"; /*변경 필요*/
import Earth_Icon from "../../../img/Earth_Icon.png"; /*변경 필요*/

// import Navigation_Bar_line from "../../img/Navigation_Bar_Line.png";

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
  }
  function onGeoError() {
    alert("Can't find you. No location for you");
  }
  //?
  return (
    <div className="location">
      {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
      <div className="location_icon">
        <img src={Earth_Icon}></img>
      </div>
      <div className="location_text">
        {typeof lat === "number" ? lat.toFixed(4) : ""}° N,
        {typeof lon === "number" ? lon.toFixed(4) : ""}° E
      </div>
    </div>
  );
}

function Header() {
  //localstorage가 empty인 경우 확인(입력 유도 페이지 결정하는 변수)
  const [emptyCheck, setCheck] = useState(true);

  //localstorage에 저장된 입력값 불러오기
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");
  //localStorage에 입력 여부에 따라서, 유도페이지 연결
  const onEmptyCheck = () => {
    if (savedAirport === null && savedATime == null && savedDTime == null) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

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

          <Link
            to={emptyCheck ? `/schedule` : `/`} //true: 입력 페이지로, flase: 유도 페이지로
            className="schedule_link"
            onClick={onEmptyCheck}
          >
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
      </div>
      <div className="Navigation_bar_line_div">
        {/* <img className="header_bar_line" src={Navigation_Bar_line}></img> */}
      </div>
    </div>
  );
}

export default Header;
