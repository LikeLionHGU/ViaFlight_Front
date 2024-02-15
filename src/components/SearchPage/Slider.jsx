import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../../style/Slider.css";

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

  padding: 30px 0px;
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

const Message = styled.div`
  padding: 30px 0;

  font-size: 160px;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 50px;

  font-size: 22px;
  font-weight: 500;
`;

const UpBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px;
`;

const UpBtnStyled = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 5px;

  background-color: #ec4d27;
  color: white;
`;

function Slider() {
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
        pagination={{
          // 밑에 개수 표현
          clickable: true,
          // el: ".swiper-custom-pagination",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                <item.icon className="swiperslide4" id="slidericon"></item.icon>
                <h1 className="swiperslide5">{item.title}</h1>
                <p className="swiperslide6">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Message>
        Discover
        <br /> New Journey
      </Message>
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
        <UpBtnStyled>경유지 정보 입력하러 가기</UpBtnStyled>
      </UpBtn>
    </StyledContainer>
  );
}

export default Slider;
