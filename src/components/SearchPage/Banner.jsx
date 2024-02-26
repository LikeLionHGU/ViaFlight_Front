import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../style/banner.css";

import Fadein from "../AboutPage/About_fadin";

/*slider 적용 실험*/
// import Slider from "./Slider";

const Border = styled.div`
  // border: 1px solid red;
  // display: block; // 전체화면 가득차게
  width: auto;
  // height: 1000px; // sticky확인 위해서
`;

const Above = styled.div`
  display: flex;
  flex-direction: column;
`;

function Banner() {
  //입력이 하나도 없는 경우 [Case2, 입력이 하나도 없는 경우 ]

  return (
    <>
      <div className="banner">
        <Border className="about">
          <div className="AboutBox">
            <Above>
              <Fadein>
                <div className="About1">
                  <div>여행의 시작과 끝</div>
                  <div>"모든 순간이 의미 있게"</div>
                </div>

                <div className="About2">
                  Via Flight와 함께라면 경유지도 특별한 여행지입니다
                </div>
              </Fadein>
            </Above>
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
