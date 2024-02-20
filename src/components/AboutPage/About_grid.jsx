import React from "react";
import "../../style/about_grid.css";

function About_grid() {
  return (
    <>
      <div className="about_Grid1">
        <div className="about_Grid1_tittle">Via Flight 소개</div>
        <div className="about_Grid1_description">
          Via Flight은 경유 여행의 불편함과 두려움을 해결하기 위해 탄생한 여행
          테크 스타트업입니다. 우리는 여행의 모든 순간이 가치 있고 기억에 남을
          수 있도록, 경유지에서의 시간을 최적화할 수 있는 방법을 제공합니다.
          여행자들이 직면하는 경유에 대한 질문이나 두려움을 해결하며, 모험과
          휴식, 효율적인 시간 활용까지, Via Flight는 모든 여행자의 경험을 한층
          더 풍부하게 만들 것입니다. Via Flight와 함께라면, 여행의 모든 순간이
          즐거운 추억으로 가득 차게 될 것입니다.
        </div>
      </div>

      <div className="about_Grid2">
        <div className="about_Grid2_tittle">Via Flight의 핵심 가치</div>

        <div className="about_Grid2_topic">
          <div className="topic_text">
            <div className="topic_title">Exploration</div>
            <div className="topic_desxription">
              경유 여행을 통해 새로운 경험을 발견하고, 모험을 즐길 수 있는
              가능성을 강조. 여행자들이 경유 공항 주변의 숨겨진 명소나 특별한
              경험을 찾아내도록
            </div>
          </div>
          <div>
            <img src="" alt="Grid2_img"></img>
          </div>
        </div>

        <div className="about_Grid2_topic">
          <div>
            <img src="" alt="Grid2_img"></img>
          </div>
          <div className="topic_text">
            <div className="topic_title">Energetic</div>
            <div className="topic_desxription">
              여행자들이 경유지에서 활력을 느끼고, 활동적인 경험을 할 수 있도록
              함으로써, 여행의 역동성과 즐거움 강조
            </div>
          </div>
        </div>

        <div className="about_Grid2_topic">
          <div className="topic_text">
            <div className="topic_title">Efficient</div>
            <div className="topic_desxription">
              시간과 자원을 최적화하여 여행자가 대기 시간을 가치 있게 사용할 수
              있도록 도움. Efficient라는 키워드는 Via Flight가 제공하는 접근성과
              사용자의 여행 계획을 최적화하는 데 중점을 둔 서비스의 특성 강조
            </div>
          </div>
          <div>
            <img src="" alt="Grid2_img"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_grid;
