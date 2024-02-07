import React from "react";
import styled from "styled-components";
import "../style/header.css";
import { Link } from "react-router-dom";

// Header BTN 영역(Button 역할)
const NavigtionSpan = styled.span`
  display: inline-flex;
  flex-wrap: wrap;

  width: 150px;
  height: 70px;
  border: 1px solid black;

  //문자 중앙정렬
  justify-content: center;
  align-items: center;
`;

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
          <NavigtionSpan id="ticket">항공권 조회</NavigtionSpan>
        </Link>

        <Link to={`/schedule`}>
          <NavigtionSpan id="schedule">맞춤형 여행 일정</NavigtionSpan>
        </Link>

        <Link to={`/about`}>
          <NavigtionSpan id="about">About</NavigtionSpan>
        </Link>
      </div>
    </div>
  );
}

export default Header;
