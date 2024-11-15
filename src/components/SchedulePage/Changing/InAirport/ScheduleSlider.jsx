/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../style/SchduleSlider.css";
import "../../../../font/font.css";
import AboutFadin from "../../../AboutPage/About_fadin";

import { useEffect, useState } from "react";

const Main = styled.div`
  background-color: black;
  color: rgba(255, 255, 255, 1);

  display: flex;
  padding: 130px 0;
  padding-left: 4.5%;
`;

const Left = styled.div`
  width: 80%;
  padding-right: 80px;

  font-size: 18px;
  font-family: Pretendard-Regular;
  font-weight: 100;
`;

const Title = styled.div`
  padding-bottom: 150px;

  font-family: EsaManru;
  font-weight: 300;
  font-size: 40px;
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

  padding-bottom: 10px;
`;

const TimeLocation = styled.div`
  font-size: 13px;
  padding-bottom: 30px;
`;

export default function ScheduleSldier() {
  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);
  // const url = `https://api.zionhann.shop/app/viaflight/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;
  const url = `https://52.79.149.240:8080/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        setInfoAirport(data);
      });
  }, []);

  return (
    <Main>
      <AboutFadin>
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
      </AboutFadin>
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
        autoplay={{ delay: 1000, disableOnInteraction: false }} // 자동 이동
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
                    {item.eventName.length > 17
                      ? `${item.eventName.slice(0, 17)}...`
                      : item.eventName}
                  </EventName>
                  <TimeLocation>{`${item.businessHours} | ${item.location}`}</TimeLocation>
                  <div>
                    {item.information.length > 120
                      ? `${item.information.slice(0, 120)}...`
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
