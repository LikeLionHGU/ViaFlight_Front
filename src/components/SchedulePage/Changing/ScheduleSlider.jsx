import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "../../../style/SchduleSlider.css";
import "../../../font/font.css";

import { useEffect, useState } from "react";

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

const TextContainer = styled.div`
  font-family: Pretendard-Regular;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const EventName = styled.div`
  font-family: Esamanru;
  font-size: 22px;
`;

const TimeLocation = styled.div`
  font-size: 13px;
  padding-bottom: 50px;
`;

export default function ScheduleSldier() {
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);
  const url = `https://api.zionhann.shop/app/viaflight/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoAirport(data);
      });
  }, []);

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
        {infoAirport?.airportEvents?.map((item) => (
          <SwiperSlide key={item.eventName}>
            <div className="schedule_swiperslide">
              <div
                className="schedule_swiperslide1"
                id="sliderbg"
                style={{ backgroundImage: `url(${item.imageURL})` }}
              ></div>
              <div className="schedule_swiperslide2" id="sliderhoverbg"></div>
              <div className="schedule_swiperslide3" id="slidertext">
                <TextContainer>
                  {/* <Attr>Attraction 01</Attr> */}
                  <EventName>
                    {/* {item.eventName} */}
                    {item.eventName.length > 23
                      ? `${item.eventName.slice(0, 23)}...`
                      : item.eventName}
                  </EventName>
                  <TimeLocation>{`${item.businessHours} | ${item.location}`}</TimeLocation>
                  <div>
                    {item.information.length > 80
                      ? `${item.information.slice(0, 80)}...`
                      : item.information}
                  </div>
                </TextContainer>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  );
}
