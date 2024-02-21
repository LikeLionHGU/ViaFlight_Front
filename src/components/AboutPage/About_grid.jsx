import React from "react";
import "../../style/about_grid.css";

import About_fadin from "./About_fadin";

function About_grid() {
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
          {" "}
          <div className="about_Grid2_topic">
            <img src="" className="Grid2_img"></img>

            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">1</div>
                <div className="topic_title_key">Exploration</div>
              </div>
            </div>
          </div>
        </About_fadin>

        <About_fadin>
          {" "}
          <div className="about_Grid2_topic">
            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">2</div>
                <div className="topic_title_key">Efficient</div>
              </div>
            </div>{" "}
            <img src="" className="Grid2_img"></img>
          </div>
        </About_fadin>

        <About_fadin>
          {" "}
          <div className="about_Grid2_topic">
            <img src="" className="Grid2_img"></img>

            <div className="topic_text">
              <div className="topic_title">
                <div className="topic_title_num">3</div>
                <div className="topic_title_key">Energetic</div>
              </div>
            </div>
          </div>
        </About_fadin>
      </div>
    </div>
  );
}

export default About_grid;
