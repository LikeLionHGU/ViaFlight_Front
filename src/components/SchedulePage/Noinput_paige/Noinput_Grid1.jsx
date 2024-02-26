import React from "react";
import { Link } from "react-router-dom";

import Fadein from "../../AboutPage/About_fadin";

import picture1 from "../../../img/noinput_bg/1.png";
import picture2 from "../../../img/noinput_bg/2.png";
import picture3 from "../../../img/noinput_bg/3.png";
import picture4 from "../../../img/noinput_bg/4.png";
import picture5 from "../../../img/noinput_bg/5.png";

import picture8 from "../../../img/noinput_bg/8.png";
import picture9 from "../../../img/noinput_bg/9.png";
import picture10 from "../../../img/noinput_bg/10.png";

import picture11 from "../../../img/noinput_bg/11.png";
import picture12 from "../../../img/noinput_bg/12.png";
import picture15 from "../../../img/noinput_bg/15.png";

import picture16 from "../../../img/noinput_bg/16.png";
import picture17 from "../../../img/noinput_bg/17.png";
import picture18 from "../../../img/noinput_bg/18.png";
import picture19 from "../../../img/noinput_bg/19.png";

function Noinput_Grid1() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="no_input_Grid1">
        <Fadein>
          <div className="Bg-container">
            <img alt="img" src={picture1} className="bg-img"></img>
            <img alt="img" src={picture2} className="bg-img"></img>
            <img alt="img" src={picture3} className="bg-img"></img>
            <img alt="img" src={picture4} className="bg-img"></img>
            <img alt="img" src={picture5} className="bg-img"></img>
          </div>
        </Fadein>

        <Fadein>
          <div className="Bg-container2">
            <img alt="img" src={picture8} className="bg-img"></img>
            <img alt="img" src={picture9} className="bg-img"></img>
            <img alt="img" src={picture10} className="bg-img"></img>
            <img alt="img" src={picture11} className="bg-img"></img>
            <img alt="img" src={picture12} className="bg-img"></img>
          </div>
        </Fadein>

        <Fadein>
          <div className="Bg-container">
            <img alt="img" src={picture15} className="bg-img"></img>
            <img alt="img" src={picture16} className="bg-img"></img>
            <img alt="img" src={picture17} className="bg-img"></img>
            <img alt="img" src={picture18} className="bg-img"></img>
            <img alt="img" src={picture19} className="bg-img"></img>
          </div>
        </Fadein>
      </div>

      <div className="no_input_Grid2">
        <Fadein>
          <div className="grid_Big_text">지금 바로 당신만의</div>
          <div className="grid_Big_text">맞춤형 여행 계획을 시작해보세요!</div>
        </Fadein>

        <Fadein>
          <div className="BtnContainer">
            <Link to={"/"} className="Btn" onClick={scrollToTop}>
              <div className="LinkBTN">경유지 정보 입력하러 가기</div>
            </Link>
          </div>
        </Fadein>
      </div>
    </>
  );
}

export default Noinput_Grid1;
