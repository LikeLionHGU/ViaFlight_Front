import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../../style/Slider.css";
import "../../font/font.css";
import Arrow from "../../img/UpArrow.svg";
import Tip from "../../img/TipIcon.svg";

import { ServiceData } from "./SliderContents";

import Fadein from "../AboutPage/About_fadin";

// Initialize required modules
SwiperCore.use([FreeMode, Autoplay]);

const StyledContainer = styled.div`
  // 추가된 부분
  margin-top: 850px;
  // hard 코딩으로 간격 조정

  display: flex;
  flex-direction: column;

  color: #ec4d27;
  padding-top: 80px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  padding: 50px 50px;
  padding-left: 65px;
`;

const TitleMain = styled.div`
  padding-right: 30px;

  font-family: EsaManru;
  font-size: 35px;
  font-weight: 500;
`;
const TitleSub = styled.div`
  padding-top: 10px;

  font-family: Plaid;
  font-size: 17px;
  font-weight: 400;
`;

const CardQuestion = styled.div`
  font-family: Plaid;

  font-size: 18px;
  font-weight: 300;

  padding-bottom: 45px;
`;
const CardTitle = styled.div`
  padding-bottom: 60px;

  font-family: Pretendard;
  font-size: 30px;
  font-weight: bold;
  line-height: 48px;
`;
const CardContent = styled.div`
  font-family: Pretendard-ExtraLight;
  font-size: 19px;
  line-height: 33px;
  letter-spacing: 1px;
`;
const TipContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`;

const CardTip = styled.div`
  font-family: Pretendard-ExtraLight;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 1px;
`;

const BigCont = styled.div`
  padding-top: 220px;
  padding-left: 50px;
  //padding: 350px 50px;

  line-height: 160px;
  font-family: EsaManru;
  font-size: 170px;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 200px 150px;

  letter-spacing: 1px;
  line-height: 40px;
  font-family: Pretendard-Regular;
  font-size: 22px;
  font-weight: 500;
  line-height: 37px;
`;

const UpBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // padding: 150px 0;
  padding: 50px;
`;

const ContainArrow = styled.div`
  height: 30px;
`;

const SlideUpArrow = styled.img`
  white-space: normal;

  animation: SliderMotion 0.5s linear 0s infinite alternate; /* 무한 반복 */
  @keyframes SliderMotion {
    0% {
      padding-top: 0px;
    } /* 처음 위치 */
    100% {
      padding-top: 15px;
    } /* 마지막 위치 */
  }
`;

const UpBtnStyled = styled.button`
  margin-top: 20px;
  padding: 21px 80px;
  border: none;
  border: 1px solid rgba(236, 77, 39, 1);
  border-radius: 5px;

  font-family: EsaManru;
  font-weight: 300;
  font-size: 17px;

  background-color: #ec4d27;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(244, 240, 231, 1);
    color: rgba(236, 77, 39, 1);
  }
`;

function Slider() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledContainer>
      <Fadein>
        <Title>
          <TitleMain>VIA FLIGHT FAQS</TitleMain>
          <TitleSub>Relieving discomfort and fear</TitleSub>
        </Title>
      </Fadein>

      <Fadein>
        <Swiper
          style={{ margin: "0", whiteSpace: "pre-wrap" }}
          breakpoints={{
            0: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 3.5,
              spaceBetween: 0,
            },
          }}
          // freeMode={true} // 자유로운가
          //loop={true} // 무한 루프
          speed={3000} // 슬라이드 이동 속도
          // loopedSlides={1}
          loopAdditionalSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 이동
          slidesOffsetBefore={65} // 슬라이드 출발 지점에 빈 공간
          slideToClickedSlide={true} // 슬라이드 클릭 시 이동
          className="swiper"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={item.title}>
              <div className="swiperslide">
                <div
                  className="swiperslide1"
                  id="sliderbg"
                  style={{ backgroundImage: `url(${item.backgroundImg})` }}
                ></div>
                <div className="swiperslide2" id="sliderhoverbg"></div>
                <div className="swiperslide3" id="slidertext">
                  <div>
                    <CardQuestion>{item.question}</CardQuestion>
                    <CardTitle>{item.title}</CardTitle>
                    <CardContent>{item.content}</CardContent>
                  </div>
                  <div>
                    <TipContainer>
                      <img
                        src={Tip}
                        alt="logo"
                        style={{
                          width: "30px",
                          height: "30px",
                          paddingRight: "15px",
                        }}
                      />
                      <div style={{ fontFamily: "Plaid" }}>TIP</div>
                    </TipContainer>
                    <CardTip>{item.tip}</CardTip>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fadein>

      <Fadein>
        <BigCont>
          DISCOVER
          <br /> NEW JOURNEY
        </BigCont>
      </Fadein>

      <Fadein>
        <Contents>
          <div>
            경유지 정보만 입력하면, 경유지에서의 대기 시간별로 맞춤화 된 투어
            코스,
            <br />
            액티비티를 추천드립니다. 여행의 모든 순간을 알차게 구성해보세요!
            <br />
            경유 시간이 짧아도 걱정하지 마세요. Via Flight와 함께라면 공항도
            여행지입니다.
            <br />
            공항 관련 각종 정보, 이벤트, 기획전 등의 정보를 찾아보세요.
          </div>
        </Contents>
      </Fadein>

      <Fadein>
        <UpBtn>
          <ContainArrow>
            <SlideUpArrow src={Arrow} alt="logo" />
          </ContainArrow>
          <UpBtnStyled onClick={scrollToTop}>
            경유지 정보 입력하러 가기
          </UpBtnStyled>
        </UpBtn>
      </Fadein>
    </StyledContainer>
  );
}

export default Slider;
