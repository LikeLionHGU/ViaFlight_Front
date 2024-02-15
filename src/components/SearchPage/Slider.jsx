import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../../style/Slider.css";
import Arrow from "../../img/UpArrow.svg";

import { ServiceData } from "./SliderContents";

// Initialize required modules
SwiperCore.use([FreeMode, Pagination, Autoplay]);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: #ec4d27;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  padding: 40px 50px;
`;

const TitleMain = styled.div`
  padding-right: 30px;

  font-size: 40px;
  font-weight: 500;
`;
const TitleSub = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const BigCont = styled.div`
  padding: 50px;

  font-size: 160px;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 50px;
  padding-top: 50px;

  font-size: 20px;
  font-weight: 500;
`;

const UpBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0;
`;

const UpArrow = styled.img`
  white-space: normal;

  animation: motion 0.3s linear 0s infinite alternate; /* 무한 반복 */
  @keyframes motion {
    0% {
      margin-top: 0px;
    } /* 처음 위치 */
    100% {
      margin-top: 10px;
    } /* 마지막 위치 */
  }
`;

const UpBtnStyled = styled.button`
  margin-top: 20px;
  padding: 21px 80px;
  border: none;
  border: 1px solid rgba(236, 77, 39, 1);
  border-radius: 5px;

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
      <Title>
        <TitleMain>VIA FLIGHT FAQS</TitleMain>
        <TitleSub>Relieving discomfort and fear</TitleSub>
      </Title>
      <Swiper
        style={{ margin: "0" }}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
        // freeMode={true}  // 자유로운가
        loop={true}
        speed={1000}
        loopAdditionalSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesOffsetBefore={50}
        slideToClickedSlide={true}
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
                <h1 className="swiperslide5">{item.title}</h1>
                <p className="swiperslide6">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <BigCont>
        Discover
        <br /> New Journey
      </BigCont>
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
      <UpBtn>
        <UpArrow src={Arrow} alt="logo" />
        <UpBtnStyled onClick={scrollToTop}>
          경유지 정보 입력하러 가기
        </UpBtnStyled>
      </UpBtn>
    </StyledContainer>
  );
}

export default Slider;
