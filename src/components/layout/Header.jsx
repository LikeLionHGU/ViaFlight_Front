import React, { useState, useEffect } from "react";
import "../../style/header.css";
import { Link } from "react-router-dom";
// colorCheck === true일 때, (조회 페이지) [붉은 색상]
import header_Logo from "../../img/header_logo.png";
import Earth_Icon from "../../img/Earth_Icon.png";
import Navigation_bar from "../../img/Navigation_Bar_Line.png";

// colorCheck === false 때, (맞춤 페이지) [녹색 색상]
import S_header_Logo from "../../img/Schedule_header_Logo.png";
import S_Earth_Icon from "../../img/Schedule_Earth_Icon.png";
import S_Navigation_bar from "../../img/Schedule_Navigation_Bar_Line.png";

// Header BTN 영역(Button 역할)

function Header() {
  //localstorage가 empty인 경우 확인(입력 유도 페이지 결정하는 변수)
  // const [emptyCheck, setCheck] = useState(true);

  //true: #2c6e49(조회 페이지); false: #ec4d27(schedule 페이지)
  //[true: 주황, fasle: 녹색]
  const [colorCheck, setColor] = useState(true);

  //localstorage에 저장된 입력값 불러오기
  // const savedAirport = localStorage.getItem("viaAirport");
  // const savedATime = localStorage.getItem("arrivalTime");
  // const savedDTime = localStorage.getItem("durationTime");

  // paige에 따라서 Header 색상 변경 확인하는 함수
  const savedColor = localStorage.getItem("Headercolor");

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

  //localStorage에 입력 여부에 따라서, 유도페이지 연결 [작동은 되지만, 비동기 처리로 밀림... ] -> sol, useEffect 예정
  // const onEmptyCheck = () => {
  //   if (savedAirport === null && savedATime === null && savedDTime === null) {
  //     setCheck(false);
  //   } else {
  //     setCheck(true);
  //   }
  // };

  /*새로 추가된 부분*/
  useEffect(() => {
    // Check localStorage to determine colorCheck when component mounts
    const savedColor = localStorage.getItem("Headercolor");
    setColor(savedColor === "true");
  }, []);

  /*맞춤 페이지 눌렀을 때 */
  const onColorSchedule = () => {
    if (savedColor !== null) localStorage.removeItem("Headercolor");
    localStorage.setItem("Headercolor", false);

    setColor(false);
  };

  /*조회 페이지 눌렀을 때 */
  const onColorSearch = () => {
    if (savedColor !== null) localStorage.removeItem("Headercolor");
    localStorage.setItem("Headercolor", true);

    setColor(true);
  };

  return (
    <div className="header_sticky">
      <div className="header">
        {/* Header BTN 부분 */}

        {/* location색상 줄 수 있음 */}
        <div
          className="header-BTN"
          style={{ color: !colorCheck ? "#2c6e49" : "#ec4d27" }}
        >
          {/* Header Logo 부분 */}
          <div className="header_logo">
            <img
              className="img_logo"
              src={!colorCheck ? S_header_Logo : header_Logo}
              alt="via-flight-logo"
            ></img>
          </div>
          <Link
            to={`/`}
            className="ticket_link"
            onClick={onColorSearch}
            style={{ color: !colorCheck ? "#2c6e49" : "#ec4d27" }}
          >
            <div className="ticket_text">내 경유지 조회</div>
          </Link>

          <Link
            to={`/schedule`}
            // to={emptyCheck === true ? `/schedule` : `/input`} //true: 입력 페이지로, flase: 유도 페이지로
            className="schedule_link"
            // onClick={onEmptyCheck}
            onClick={onColorSchedule}
            style={{ color: !colorCheck ? "#2c6e49" : "#ec4d27" }}
          >
            <div className="schedule_text">맞춤형 여행 일정</div>
          </Link>
          <Link
            to={`/about`}
            className="about_link"
            style={{ color: !colorCheck ? "#2c6e49" : "#ec4d27" }}
          >
            <div className="about_text">ABOUT US</div>
          </Link>

          <div className="location">
            {navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)}
            <div className="location_icon">
              <img src={!colorCheck ? S_Earth_Icon : Earth_Icon}></img>
            </div>
            <div className="location_text">
              {typeof lat === "number" ? lat.toFixed(4) : ""}° N,
              {typeof lon === "number" ? lon.toFixed(4) : ""}° E
            </div>
          </div>
        </div>
      </div>
      <div
        className="Navigation_bar_line_div"
        style={{
          backgroundImage: !colorCheck
            ? `url(${S_Navigation_bar})`
            : `url(${Navigation_bar})`,
        }}
      ></div>
    </div>
  );
}

export default Header;
