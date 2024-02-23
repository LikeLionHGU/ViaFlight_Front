import styled from "styled-components";
import InTrainImg from "../../../../../img/SkyTrain.svg";
import InBusImg from "../../../../../img/Bus.svg";
import Fadein from "../../../../AboutPage/About_fadin";

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
  font-size: 35px;
`;

const Right = styled.div`
  width: 65%;

  font-size: 18px;
  display: flex;
  justify-content: flex-end;
`;

const InTrafficImg = styled.img`
  padding-bottom: 15px;
`;

const InTrainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InBusCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: 130px;
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
    const url = `https://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
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
                description={infoAirport.skytrainInAirport}
                Modalicon={TrainIcon}
                ModaliconBlack={TrainIconB}
              ></Schedule_Modal>

              <InTrainText>Sky Train</InTrainText>
            </InTrainCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.shuttleBusInAirporteHeader}
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
