import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header"; //header import
import styled from "styled-components";
import "./banner.css";

const Border = styled.div`
  border: 1px solid red;
`;

function Banner() {
  const [airport, setAirport] = useState(""); // 경유공항 이름
  const [arrivalTime, setATime] = useState(""); //경유공항 도착시간
  const [durationTime, setDTime] = useState(""); // 경유공항 경유시간

  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  //localStorage에 저장 (create), (사용자 입력 정보 기억을 위해서 사용)

  const onAirport = (e) => {
    if (savedAirport !== null) localStorage.removeItem("viaAirport");
    setAirport(e.target.value);
    localStorage.setItem("viaAirport", e.target.value);
  };

  const onDTime = (e) => {
    if (savedATime !== null) localStorage.removeItem("arrivalTime");
    setDTime(e.target.value);
    localStorage.setItem("arrivalTime", e.target.value);
  };

  const onATime = (e) => {
    if (savedDTime !== null) localStorage.removeItem("durationTime");
    setATime(e.target.value);
    localStorage.setItem("durationTime", e.target.value);
  };

  return (
    <div className="banner">
      <Border className="Enter">
        <Header></Header>

        {/* 이미지는 background로 작업 */}
        <Border>
          Enter flight information
          <br />
          for your best trip
        </Border>
        <img src="" alt="via-flight_logo"></img>
        <form className="form_style">
          {/*#1. 경유공항 이름*/}
          <input
            className="Airport"
            type="text"
            list="airport"
            placeholder="경유 공항"
            value={airport}
            onChange={onAirport}
          ></input>
          {/* datalist를 사용하기 위해서는 <form> 태그 안에 <datalist>가 정의 되어있어야 적용됨/} */}
          <datalist id="airport">
            {/* datalist # 공항 종류(선택 가능한)  */}
            <option value="싱가포르 창이 공항(SIN)"></option>
            <option value="나리타 국제 공항(NRT)"></option>
            <option value="두바이 국제 공항(DXB)"></option>
          </datalist>

          {/*#2. 경유공항 도착시간 fix-> Q1.(승환) 도착시간 정보 넘겨줄 때 시간만? + MCT합산한 시간인지? */}

          <input type="time" value={arrivalTime} onChange={onDTime}></input>

          {/*#3. 경유공항 경유시간 구분 fix-> Q2.(동신, 승환)님께 질문(단위)*/}

          <select
            className="Time"
            type="text"
            value={durationTime}
            onChange={onATime}
          >
            <option>경유시간</option>
            <option value={"under 2hours"}>under 2(hours)</option>
            <option value={2}>2 ~ 4(hours)</option>
            <option value={4}>4 ~ 6(hours)</option>
            <option value={6}>6 ~ 8(hours)</option>
            <option value={8}>8 ~ 10(hours)</option>
            <option value={"over 10hours"}>over 10(hours)</option>
          </select>

          {/*schedule-paige에 연결*/}
          <Link to={`/schedule`}>
            <button>조회하기</button>
          </Link>
          {/* S1. (은진) - 초기화 버튼 (제안해보기)*/}
        </form>
      </Border>

      <Border className="about">
        <h3>여행의 시작과 끝</h3>
        <h3>"모든 순간이 의미 있게"</h3>
        <p>Via Flight와 함께라면 경유지도 특별한 여행지입니다</p>

        {/*about-paige에 연결*/}
        <Link to={`/about`}>
          <button>ABOUT US</button>
        </Link>
      </Border>
    </div>
  );
}

export default Banner;
