import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "../../../style/SchduleSlider.css";
// import { ServiceData } from "./SliderContents";
import "../../../font/font.css";

import travel1 from "../../../img/slide1.jpg";
import travel2 from "../../../img/slide1.jpg";
import travel3 from "../../../img/slide1.jpg";
import travel4 from "../../../img/slide1.jpg";
import { useLocation } from "react-router-dom";

const ServiceData = [
  {
    name: "1Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel1,
  },
  {
    name: "2Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel2,
  },
  {
    name: "3Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel3,
  },
  {
    name: "4Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel4,
  },
  {
    name: "5Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel1,
  },
  {
    name: "6Api",
    time: "연결",
    cost: "해야함",
    backgroundImg: travel2,
  },
];

const Main = styled.div`
  background-color: black;
  color: rgba(255, 255, 255, 1);

  display: flex;
  padding: 130px 0;
  padding-left: 3%;
`;

const Left = styled.div`
  width: 30%;
  padding-right: 80px;

  font-size: 18px;
  font-family: Pretendard-Regular;
  font-weight: 100;
`;

const Title = styled.div`
  padding-bottom: 100px;

  font-family: EsaManru;
  font-weight: 300;
  font-size: 35px;
`;

export default function ScheduleSldier() {
  const location = useLocation();
  const { airport, arrivalTime, durationTime } = location.state;
  console.log(airport);
  console.log(arrivalTime);
  console.log(durationTime);
  return (
    <Main>
      <Left>
        <Title>
          OTHER
          <br />
          EXPERIENCE
          <br />
          IN AIRPORT
        </Title>
        <div>Promotion & Exhibitions</div>
      </Left>
      <Swiper
        style={{ margin: "0", whiteSpace: "pre-wrap" }}
        breakpoints={{
          0: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        // freeMode={true} // 자유로운가
        loop={true} // 무한 루프
        speed={3000} // 슬라이드 이동 속도
        // loopedSlides={1}
        loopAdditionalSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 이동
        slideToClickedSlide={true} // 슬라이드 클릭 시 이동
        className="schedule_swiper"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={item.title}>
            <div className="schedule_swiperslide">
              <div
                className="schedule_swiperslide1"
                id="sliderbg"
                style={{ backgroundImage: `url(${item.backgroundImg})` }}
              ></div>
              <div className="schedule_swiperslide2" id="sliderhoverbg"></div>
              <div className="schedule_swiperslide3" id="slidertext">
                <div>{item.name}</div>
                <div>{item.time}</div>
                <div>{item.cost}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  );
}
