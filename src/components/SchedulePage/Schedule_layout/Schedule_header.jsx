import React, { useState } from "react";
import styled from "styled-components";
import "../../../style/Schedule_header.css"; /*���� �ʿ�*/
import { Link } from "react-router-dom";
import header_Logo from "../../../img/header_logo.png"; /*���� �ʿ�*/
import Earth_Icon from "../../../img/Earth_Icon.png"; /*���� �ʿ�*/

// import Navigation_Bar_line from "../../img/Navigation_Bar_Line.png";

// Header BTN ����(Button ����)
const NavigtionSpan = styled.div`
  display: inline-flex;
  flex-direction: row;
  space-between: 5px;

  width: 150px;
  height: 100%;
  //border-left: 1px solid blue; //border ����

  color: #ec4d27;

  //���� �����ϴ� ����
  justify-content: flex-start;
  align-content: center;
  align-items: flex-end;

  .img_logo {
    position: absolute; /*Logo ��ġ ����*/
    /*Logo ��ġ �������� ��ġ, [Logo�� ��ġ]*/
  }

  .header_logo {
    width: 300px;
  }
`;

function Location() {
  const [lat, setlat] = useState("");
  const [lon, setlon] = useState("");

  function onGeoOk(position) {
    setlat(position.coords.latitude); // ���� ���� ����
    setlon(position.coords.longitude); // �浵 ���� ����
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
        {typeof lat === "number" ? lat.toFixed(4) : ""}�� N,
        {typeof lon === "number" ? lon.toFixed(4) : ""}�� E
      </div>
    </div>
  );
}

function Header() {
  //localstorage�� empty�� ��� Ȯ��(�Է� ���� ������ �����ϴ� ����)
  const [emptyCheck, setCheck] = useState(true);

  //localstorage�� ����� �Է°� �ҷ�����
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");
  //localStorage�� �Է� ���ο� ����, ���������� ����
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
        {/* Header Logo �κ� */}
        {/* <img
          className="img_logo"
          src="https://bit.ly/3OtSJYc"
          alt="via-flight-logo"
        ></img> */}

        {/* Header BTN �κ� */}
        <div className="header-BTN">
          {/* Header Logo �κ� */}
          <div className="header_logo">
            <img
              className="img_logo"
              src={header_Logo}
              alt="via-flight-logo"
            ></img>
          </div>

          <Link to={`/`} className="ticket_link">
            <NavigtionSpan id="ticket">
              <div className="ticket_text">�� ������ ��ȸ</div>
            </NavigtionSpan>
          </Link>

          <Link
            to={emptyCheck ? `/schedule` : `/`} //true: �Է� ��������, flase: ���� ��������
            className="schedule_link"
            onClick={onEmptyCheck}
          >
            <NavigtionSpan id="schedule">
              <div className="schedule_text">������ ���� ����</div>
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
