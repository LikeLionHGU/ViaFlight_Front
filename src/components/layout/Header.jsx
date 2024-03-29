import React, { useState } from "react";
import "../../style/header.css";
import { Link } from "react-router-dom";
import header_Logo from "../../img/header_logo.png";
import Earth_Icon from "../../img/Earth_Icon.png";
import Navigation_bar from "../../img/Navigation_Bar_Line.svg";
import styled from "styled-components";

// Header BTN 영역(Button 역할)

const NaviBar = styled.div`
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
        <div className="header-BTN" style={{ color: "#ec4d27" }}>
          {/* Header Logo 부분 */}
          <div className="img_logo">
            <img src={header_Logo} alt="via-flight-logo"></img>
          </div>
          <Link
            to={`/`}
            className="ticket_link"
            style={{ color: "#ec4d27" }}
            onClick={scrollToTop}
          >
            <div className="ticket_text">내 경유지 조회</div>
          </Link>

          <Link
            to={`/no`}
            // to={emptyCheck === true ? `/schedule` : `/input`} //true: 입력 페이지로, flase: 유도 페이지로
            className="schedule_link"
            // onClick={onEmptyCheck}
            style={{ color: "#ec4d27" }}
            onClick={scrollToTop}
          >
            <div className="schedule_text" style={{ fontWeight: "100" }}>
              맞춤형 여행 일정
            </div>
          </Link>
          <Link to={`/about`} className="about_link" onClick={scrollToTop}>
            <div
              className="about_text"
              style={{ fontWeight: "500", color: "#ec4d27" }}
            >
              ABOUT US
            </div>
          </Link>

          <div className="location">
            {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
            <div className="location_icon">
              <img src={Earth_Icon} alt="img"></img>
            </div>
            <div className="location_text">
              {typeof lat === "number" ? lat.toFixed(4) : ""}° N,
              {typeof lon === "number" ? lon.toFixed(4) : ""}° E
            </div>
          </div>
        </div>
      </div>
      <NaviBar>
        <div
          className="Navigation_bar_line_div"
          style={{
            backgroundImage: `url(${Navigation_bar})`,
          }}
        ></div>
      </NaviBar>
    </div>
  );
}

export default Header;
