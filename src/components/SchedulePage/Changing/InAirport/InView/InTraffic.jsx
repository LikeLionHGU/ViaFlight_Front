/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import styled from "styled-components";
import InTrainImg from "../../../../../img/SkyTrain.svg";
import InBusImg from "../../../../../img/Bus.svg";
import Fadein from "../../../../AboutPage/About_fadin";
import ".././../../../../font/font.css";

import { useState, useEffect } from "react";
//modal 연결
import Schedule_Modal from "../../../NoChanging/Schedule_Modal/Schedule_Modal";

import InTrainImg_modal from "../../../../../img/train_black.png";
import InBusImg_modal from "../../../../../img/shuttle_black.png";

const StyleContainer = styled.div`
  background-color: black;
  color: #ffffff;
  padding: 0 4.5%;
`;

const Main = styled.div`
  display: flex;

  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  padding: 85px 0;
`;

const Left = styled.div`
  font-family: Esamanru;
  font-weight: 300;
  font-size: 40px;
`;

const Right = styled.div`
  width: 55%;

  font-family: Plaid;
  font-weight: 300;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
`;

const InTrainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const InBusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  margin-left: 130px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const InTrainText = styled.div``;

const InBusText = styled.div``;

export default function InTraffic() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({});

  /*Schedule 페이지 Icon*/
  const TrainIcon = InTrainImg;
  const ShuttleIcon = InBusImg;

  /*Modal 페이지 Icon*/
  const TrainIconB = InTrainImg_modal;
  const ShuttleIconB = InBusImg_modal;

  /*# API호출*/
  function getAirport() {
    // const url = `https://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    const url = `http://52.79.149.240:8080/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAirport(data.layoverAirport);
      });
  }

  useEffect(() => {
    getAirport();
  }, []);

  return (
    <StyleContainer>
      <Fadein>
        <Main>
          <Left>공항 터미널 이동 정보</Left>
          <Right>
            <InTrainCard>
              <Schedule_Modal
                tittle={infoAirport.skyTrainInAirportHeader}
                description={infoAirport.skyTrainInAirport} /* DB 정보 누락 */
                Modalicon={TrainIcon}
                ModaliconBlack={TrainIconB}
              ></Schedule_Modal>

              <InTrainText>Sky Train</InTrainText>
            </InTrainCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.shuttleBusInAirportHeader}
                description={infoAirport.shuttleBusInAirport}
                Modalicon={ShuttleIcon}
                ModaliconBlack={ShuttleIconB}
              ></Schedule_Modal>

              <InBusText>Bus Shuttle Service</InBusText>
            </InBusCard>
          </Right>
        </Main>
      </Fadein>
    </StyleContainer>
  );
}
