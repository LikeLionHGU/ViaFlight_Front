import styled from "styled-components";
//ICON 이미지 (클릭시 hover 색상)
import Train from "../../../../../img/train.png";
import Taxi from "../../../../../img/taxi.png";
import Shuttle from "../../../../../img/shuttle.png";
import Public from "../../../../../img/public.png";
import Transfer from "../../../../../img/transfer.png";

//ICON 이미지
import TrainB from "../../../../../img/train_black.png";
import TaxiB from "../../../../../img/taxi_black.png";
import ShuttleB from "../../../../../img/shuttle_black.png";
import PublicB from "../../../../../img/public_black.png";
import TransferB from "../../../../../img/transfer_black.png";

import Fadein from "../../../../AboutPage/About_fadin";
import ".././../../../../font/font.css";

import { useState, useEffect } from "react";
//modal 연결
import Schedule_Modal from "../../../NoChanging/Schedule_Modal/Schedule_Modal";

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

export default function OutTraffic() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({});

  /*흰색*/
  const TrainIcon = Train;
  const TaxiIcon = Taxi;
  const ShuttleIcon = Shuttle;
  const publicIcon = Public;
  const transferIcon = Transfer;

  /*검정*/
  const TrainIconB = TrainB;
  const TaxiIconB = TaxiB;
  const ShuttleIconB = ShuttleB;
  const publicIconB = PublicB;
  const transferIconB = TransferB;

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
                tittle={infoAirport.trainMrtOutAirportHeader}
                description={infoAirport.trainMrtOutAirport}
                Modalicon={TrainIcon}
                ModaliconBlack={TrainIconB}
              ></Schedule_Modal>
              <InTrainText>Sky Train</InTrainText>
            </InTrainCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.taxiOutAirportHeader}
                description={infoAirport.taxiOutAirport}
                Modalicon={TaxiIcon}
                ModaliconBlack={TaxiIconB}
              ></Schedule_Modal>

              <InBusText>Taxi</InBusText>
            </InBusCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.shuttleBusOutAirportHeader}
                description={infoAirport.airportShuttleBusOutAirport}
                Modalicon={ShuttleIcon}
                ModaliconBlack={ShuttleIconB}
              ></Schedule_Modal>

              <InBusText>Shuttle service</InBusText>
            </InBusCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.publicBusOutAirportHeader}
                description={infoAirport.publicBusOutAirport}
                Modalicon={publicIcon}
                ModaliconBlack={publicIconB}
              ></Schedule_Modal>

              <InBusText>Public Bus</InBusText>
            </InBusCard>

            <InBusCard>
              <Schedule_Modal
                tittle={infoAirport.airportTransferOutAirportHeader}
                description={infoAirport.airportTransferBusOutAirport}
                Modalicon={transferIcon}
                ModaliconBlack={transferIconB}
              ></Schedule_Modal>

              <InBusText>Airport Transfer</InBusText>
            </InBusCard>
          </Right>
        </Main>
      </Fadein>
    </StyleContainer>
  );
}
