
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/banner.css";
import scroll_Icon from "../../img/scrolldown_icon.png";
import banner_Logo from "../../img/bannner_logo.png";

import Fadein from "../AboutPage/About_fadin";

const Border = styled.div`
  // border: 1px solid red;
  // display: block; // 전체화면 가득차게
  width: auto;
  // height: 1000px; // sticky확인 위해서
`;

function Banner() {
  const [airport, setAirport] = useState(""); // 경유공항 이름
  const [arrivalTime, setATime] = useState(""); //경유공항 도착시간
  const [durationTime, setDTime] = useState(""); // 경유공항 경유시간

  //localstorage에 저장된 입력값 불러오기
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");


  const onAirport = (e) => {
    if (savedAirport !== null) {
      localStorage.removeItem("viaAirport");
    }
    setAirport(e.target.value);
    localStorage.setItem("viaAirport", e.target.value);
  };

  const onDTime = (e) => {
    if (savedATime !== null) localStorage.removeItem("durationTime");
    setDTime(e.target.value);
    localStorage.setItem("durationTime", e.target.value);
  };

  const onATime = (e) => {
    if (savedDTime !== null) localStorage.removeItem("arrivalTime");
    setATime(e.target.value);
    localStorage.setItem("arrivalTime", e.target.value);
  };

  //입력 유효성 검사하는 함수 [LocalStorage]
  const OnCheckInput = (e) => {
    //[Case1, 입력이 없는 경우]

    if (savedAirport === null && savedATime === null && savedDTime === null) {
      e.preventDefault();
      alert(
        "입력 form을 작성하시면,\
        \n경유 하시는 공항의 맟춤 액티비티를 보여드려요!\
        \n\n하단 입력창에 찾으시는 정보를 입력해주세요!"
      );
    }
    // [Case2, 입력이 일부 누락된 경우]
    else if (
      savedAirport.length === 0 ||
      savedATime.length === 0 ||
      savedDTime.length === 0
    ) {
      e.preventDefault();
      alert("입력이 누락된 부분이 있습니다. 다시 입력해주세요");
    }

    //[Case3, 모두 입력값이 존재하는 경우]
    else {
      alert(`입력 정보 알림\n\n 
      공항: ${savedAirport}\n
      도착시간: ${savedATime}\n
      경유시간: ${savedDTime} `);

    }
  };

  return (
    <>
      <div className="banner">
        <Border className="Enter">
          <Fadein>
            <div className="Enterphrase">
              Enter flight information
              <br />
              for your best trip
            </div>
          </Fadein>

          <div className="Via_flight_logoNForm">
            <Fadein>
              <div className="logo_text">VIA</div>
              <div className="Flight_textNlogo">
                <div className="logo_text">FLIGHT</div>
                <img src={banner_Logo} alt=""></img>
              </div>
            </Fadein>

            <Fadein>
              <form className="form_style">
                <input
                  className="Airport"
                  type="text"
                  list="airport"
                  placeholder="경유 공항"
                  value={airport}
                  onChange={onAirport}
                ></input>

                <datalist id="airport">
                  {/* datalist # 공항 종류(선택 가능한)  */}
                  <option value="싱가포르 창이 공항(SIN)"></option>
                  <option value="나리타 국제 공항(NRT)"></option>
                  <option value="두바이 국제 공항(DXB)"></option>
                </datalist>

                <input
                  className="Atime"
                  type="time"
                  value={arrivalTime}
                  onChange={onATime}
                ></input>

                <input
                  className="Dtime"
                  type="number"
                  min="0" /* 입력 가능 범위*/
                  max="24"
                  value={durationTime}
                  onChange={onDTime}
                  placeholder="경유시간"
                ></input>

                <Link to={`/schedule`} style={{ textDecoration: "none" }}>
                  <div className="searchBtn" onClick={OnCheckInput}>
                    경유지 정보 입력
                  </div>
                </Link>
              </form>
            </Fadein>
          </div>

          <div className="scrollIcon_container">
            <img
              className="scrollIcon_arrow"
              src={scroll_Icon}
              width={17.33}
              height={16}
            ></img>
          </div>
        </Border>

        <Border className="about">
          <div className="AboutBox">
            <Fadein>
              <div className="About1">
                <div>여행의 시작과 끝</div>
                <div>"모든 순간이 의미 있게"</div>
              </div>
            </Fadein>

            <Fadein>
              <div className="About2">
                Via Flight와 함께라면 경유지도 특별한 여행지입니다
              </div>
            </Fadein>
            <Fadein>
              {/*about-paige에 연결*/}
              <div className="aboutBtn_container">
                <Link to={`/about`}>
                  <button className="AboutBtn">ABOUT US</button>
                </Link>
              </div>
            </Fadein>
          </div>
        </Border>
      </div>
    </>
  );
}

export default Banner;
