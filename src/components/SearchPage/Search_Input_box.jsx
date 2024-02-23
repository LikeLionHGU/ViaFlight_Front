import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Search_Input_box.css";
import Fadein from "../AboutPage/About_fadin";

function Search_Input_box() {
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
      savedDTime.length === 0 ||
      airport.length === 0 ||
      arrivalTime.length === 0 ||
      durationTime.length === 0
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
      scrollToTop();
    }

    //창이 공항 이외 정보 입력을 넣는 경우
    if (airport !== "싱가포르 창이 공항(SIN)") {
      e.preventDefault();

      alert(`${airport} 정보는  준비중입니다:)`);
    }
  };
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
    </>
  );
}

export default Search_Input_box;
