import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header"; //header import
import styled from "styled-components";
import "../../style/banner.css";
import scroll_Icon from "../../img/scrolldown_icon.png";
import banner_Logo from "../../img/bannner_logo.png";

/*slider 적용 실험*/
// import Slider from "./Slider";

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

  const [colorCheck, setColor] = useState(true); // Header 색상 판졀하는 변수;

  //localstorage에 저장된 입력값 불러오기
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const savedColor = localStorage.getItem("Headercolor");

  /*Get한 데이터 저장하는 공간*/
  const [infoAirport, setInfoAirport] = useState([]);

  // fetch 함수
  /*API 호출 방식*/
  /*fetch:  호출 할 url*/
  const url = `https://api.zionhann.shop/app/viaflight/all-layover-airport?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  const onAirport = (e) => {
    if (savedAirport !== null) {
      localStorage.removeItem("viaAirport");
    }
    setAirport(e.target.value);
    localStorage.setItem("viaAirport", e.target.value);
  };

  const onDTime = (e) => {
    // if (savedATime == null) alert("경유공항에 도착한 시간을 입력해주세요");
    if (savedATime !== null) localStorage.removeItem("durationTime");
    setDTime(e.target.value);
    localStorage.setItem("durationTime", e.target.value);
  };

  const onATime = (e) => {
    // if (savedDTime == null) alert("경유 시간을 선택해주세요");
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
      savedAirport === null ||
      savedATime === null ||
      savedDTime === null
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

      // 페이지 이동에 대해서 default
      if (savedColor !== null) localStorage.removeItem("Headercolor");
      setColor(false);
      localStorage.setItem("Headercolor", false);

      //# fetch 적용시키기 [API 호출]
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setInfoAirport(data);
        });
    }
  };

  //입력이 하나도 없는 경우 [Case2, 입력이 하나도 없는 경우 ]

  console.log(infoAirport);

  return (
    <>
      {/* <Header></Header> */}

      <div className="banner">
        <Border className="Enter">
          {/* 이미지는 background로 작업 */}
          <div className="Enterphrase">
            Enter flight information
            <br />
            for your best trip
          </div>

          <div className="Via_flight_logoNForm">
            <div className="logo_text">VIA</div>

            <div className="Flight_textNlogo">
              <div className="logo_text">FLIGHT</div>
              <img src={banner_Logo} alt=""></img>
            </div>

            <form className="form_style">
              {/*#1. 경유공항 이름*/}
              {/*issue, input태그별로 blur 배경 지정 어려움 / 대안 입력 라인 전체 blur는 가능*/}
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
              <input
                className="Atime"
                type="time"
                value={arrivalTime}
                onChange={onATime}
              ></input>
              {/*#3. 경유공항 경유시간 구분 fix-> Q2.(동신, 승환)님께 질문(단위)*/}

              <input
                className="Dtime"
                type="number"
                min="0" /* 입력 가능 범위*/
                max="24"
                value={durationTime}
                onChange={onDTime}
                placeholder="경유시간"
              ></input>
              {/* </div> */}
              {/*schedule-paige에 연결*/}
              <Link to={`/schedule`} style={{ textDecoration: "none" }}>
                <div className="searchBtn" onClick={OnCheckInput}>
                  경유지 정보 입력
                </div>
              </Link>
              {/* S1. (은진) - 초기화 버튼 (제안해보기)*/}
              {/* <div className="blurBox"> </div> */}
            </form>
          </div>

          {/* 페이지 아래부분으로 scroll*/}
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
            <div className="About1">
              <div>여행의 시작과 끝</div>
              <div>"모든 순간이 의미 있게"</div>
            </div>
            <div className="About2">
              Via Flight와 함께라면 경유지도 특별한 여행지입니다
            </div>

            {/*about-paige에 연결*/}
            <div className="aboutBtn_container">
              <Link to={`/about`}>
                <button className="AboutBtn">ABOUT US</button>
              </Link>
            </div>
          </div>
        </Border>
      </div>

      {/* <Slider></Slider> */}
    </>
  );
}

export default Banner;
