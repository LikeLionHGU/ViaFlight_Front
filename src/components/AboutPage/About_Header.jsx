import React, { useState } from "react";
import "../../style/header.css";
import { Link } from "react-router-dom";

// colorCheck === false 때, (맞춤 페이지) [녹색 색상]
import S_header_Logo from "../../img/About_header_Logo.png";
import S_Earth_Icon from "../../img/About_Earth_Icon.png";
import S_Navigation_bar from "../../img/About_Navigation_Bar_Line.png";
import styled from "styled-components";

// Header BTN 영역(Button 역할)

const AboutNaviBar = styled.div`
  padding: 0 65px;
  background-color: rgba(255, 255, 255, 0.3);
  /* backdrop-filter: blur(15px); */
`;

function Header() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  // 위치 정보 받아오는 함수
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");
  function onGeoOk(position) {
    setlat(position.coords.latitude); // 위도 정보 추출
    setlon(position.coords.longitude); // 경도 정보 추출
  }
  function onGeoError() {
    alert("Can't find you. No location for you");
  }

  return (
    <div className="header_sticky">
      <div className="header">
        {/* Header BTN 부분 */}

        {/* location색상 줄 수 있음 */}
        <div className="header-BTN" style={{ color: "#F4F0E7" }}>
          {/* Header Logo 부분 */}
          <div className="header_logo">
            <img
              className="img_logo"
              src={S_header_Logo}
              alt="via-flight-logo"
            ></img>
          </div>
          <Link
            to={`/`}
            className="ticket_link"
            style={{ color: "#F4F0E7" }}
            onClick={scrollToTop}
          >
            <div className="ticket_text">내 경유지 조회</div>
          </Link>

          <Link
            to={`/no`}
            className="schedule_link"
            style={{ color: "#F4F0E7" }}
            onClick={scrollToTop}
          >
            <div className="schedule_text" style={{ fontWeight: "300" }}>
              맞춤형 여행 일정
            </div>
          </Link>
          <Link
            to={`/about`}
            className="about_link"
            style={{ color: "#F4F0E7" }}
            onClick={scrollToTop}
          >
            <div className="about_text">ABOUT US</div>
          </Link>

          <div className="location">
            {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
            <div className="location_icon">
              <img src={S_Earth_Icon}></img>
            </div>
            <div className="location_text">
              {typeof lat === "number" ? lat.toFixed(4) : ""}° N,
              {typeof lon === "number" ? lon.toFixed(4) : ""}° E
            </div>
          </div>
        </div>
      </div>
      <AboutNaviBar>
        <div
          className="Navigation_bar_line_div"
          style={{
            backgroundImage: `url(${S_Navigation_bar})`,
          }}
        ></div>
      </AboutNaviBar>
    </div>
  );
}

export default Header;
