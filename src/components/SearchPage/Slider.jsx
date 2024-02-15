import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "../style/Slider.css";

import { ServiceData } from "../SliderConstant/index";

// Initialize required modules
SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay]);

const StyledContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  z-index: 0;
`;

function Slider() {
  return (
    <StyledContainer1>
      <div className="swiper-button-prev"></div>
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
        navigation={{
          // 위치 변환 버튼
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
      <div className="swiper-button-next"></div>
    </StyledContainer1>
  );
}

export default Slider;
