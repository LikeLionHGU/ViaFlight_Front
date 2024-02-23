import React from "react";
import "../../style/about_grid.css";
import { Link } from "react-router-dom";
import About_fadin from "./About_fadin";
import Explore from "../../img/About-free-icon-exploring.png";
import Passion from "../../img/About-free-icon-passion.png";

import About1_Img from "../../img/AboutImg/About1.png";
import About2_Img from "../../img/AboutImg/About2.png";
import About3_Img from "../../img/AboutImg/About3.png";

function About_grid() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="about_Grid">
      <div className="about_Grid1">
        <About_fadin>
          <div className="about_Grid1_description">
            <div>
              Via Flight은 경유 여행의 불편함과 두려움을 해결하기 위해 탄생한
            </div>
            <div>
              <span className="text-bold">여행 테크 스타트업</span>
              <span>입니다.</span>
            </div>
            <div>
              우리는 여행의 모든 순간이 가치 있고 기억에 남을 수 있도록,
            </div>
            <div>
              <span className="text-bold">
                경유지에서의 시간을 최적화할 수 있는 방법
              </span>
              <span>을 제공합니다.</span>
            </div>

            <div>
              여행자들이 직면하는 경유에 대한 질문이나 두려움을 해결하며,
            </div>
            <div>모험과 휴식, 효율적인 시간 활용까지</div>
            <div>
              <span className="text-bold">
                Via Flight는 모든 여행자의 경험을 한층 더 풍부하게 만들
                것입니다.
              </span>
            </div>
            <div>
              <span className="text-bold">
                Via Flight와 함께라면, 여행의 모든 순간이 즐거운 추억으로 가득
                차게 될 것입니다.
              </span>
            </div>
          </div>
        </About_fadin>
      </div>

      {/*Grid2*/}
      <div className="about_Grid2">
        <About_fadin>
          <div className="about_Grid2_tittle">THE THREE E’S</div>
        </About_fadin>

        <About_fadin>
          <div className="about_Grid2_topic">
            <img src={About3_Img} className="Grid2_img"></img>
            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">1</div>
                <div className="topic_title_key">Exploration</div>
                <div className="topic_descript">
                  <div>Via Flight와 함께 주변의 숨겨진 보석을 발견하세요.</div>
                  <div>짧은 경유든 긴 대기시간이든, </div>
                  <div>우리는 공항에서 최고의 경험을 안내합니다.</div>
                  <div>일반 여행자가 보지 못한 현지 명소부터</div>
                  <div>문화를 체험할 수 있는 경험까지,</div>
                  <div> Via Flight는 여러분의 모험의 관문입니다.</div>
                </div>
              </div>
            </div>
            {/* display 간격을 위한 dummy값*/}
            <img src={About2_Img} className="Grid2_img" id="Grid_img2"></img>
          </div>
        </About_fadin>

        <About_fadin>
          <div className="about_Grid2_topic">
            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">2</div>
                <div className="topic_title_key">Efficient</div>
                <div className="topic_descript">
                  <div>
                    Via Flight는 경유 시간을 특별한 시간으로 전환합니다.
                  </div>
                  <div>맞춤형 일정과 정보를 통해 여행 계획을 최적화하고,</div>
                  <div>경유지에서의 대기 시간을 의미있게 만들어 줍니다.</div>
                  <div>우리와 함께라면, 모든 순간이 여행의 일부가 되어</div>
                  <div>여러분의 여정을 더욱 풍부하게 만들것입니다.</div>
                </div>
              </div>
            </div>

            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">3</div>
                <div className="topic_title_key">Energetic</div>
                <div className="topic_descript">
                  <div>활동적인 경험으로 여행 경험에 활력을 불어넣으세요.</div>
                  <div>Via Flight는 모든 여행자의 취향에 맞는 </div>
                  <div>활기찬 컨텐츠를 제공합니다.</div>
                  <div>긴 비행 후 다리를 쭉 펴고 쉬고 싶든, </div>
                  <div>짧은 시간을 활용해 새로운 문화를 경험해보고 싶든,</div>
                  <div>여러분의 모든 순간이 의미있도록 도움을 드릴게요.</div>
                </div>
              </div>
            </div>

            <img src={About1_Img} className="Grid2_img" id="Grid_img1"></img>
          </div>
        </About_fadin>

        <div className="BtnContainer">
          <Link to={"/"} className="Btn" onClick={scrollToTop}>
            <div className="LinkBTN">경유지 정보 입력하러 가기</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About_grid;
