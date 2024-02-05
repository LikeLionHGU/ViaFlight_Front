import React from "react";
import styled from "styled-components";
import "../style/header.css";
import { Link } from "react-router-dom";

const NavigtionSpan = styled.span`
  display: inline-flex;
  flex-wrap: wrap;

  width: 150px;
  height: 70px;
  border: 1px solid black;

  justify-content: center;
  align-items: center; //문자 중앙정렬
`;

function Header() {
  return (
    <div className="navigation">
      <img
        className="img_logo"
        src="https://bit.ly/3OtSJYc"
        alt="via-flight-logo"
      ></img>

      <div className="Navigtion-BTN">
        <NavigtionSpan id="ticket">
          {" "}
          <Link to={`/`}>항공권 조회</Link>
        </NavigtionSpan>

        <NavigtionSpan id="schedule">
          <Link to={`/schedule`}>맞춤형 여행 일정</Link>
        </NavigtionSpan>

        <NavigtionSpan id="about">
          <Link to={`/about`}>About </Link>
        </NavigtionSpan>
      </div>
    </div>
  );
}

export default Header;
