/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import AboutFadin from "../../../AboutPage/About_fadin";
import TrainIcon from "../../../../img/SkyTrain.svg";
import TaxiIcon from "../../../../img/Taxi.svg";
import ShuttleIcon from "../../../../img/Bus.svg";
import PublicBusIcon from "../../../../img/PublicBus.svg";
import AirportTransferIcon from "../../../../img/AirportTransfer.svg";
import "../../../../font/font.css";

import TrainB from "../../../../img/train_black.png";
import TaxiB from "../../../../img/taxi_black.png";
import ShuttleB from "../../../../img/shuttle_black.png";
import PublicB from "../../../../img/public_black.png";
import TransferB from "../../../../img/transfer_black.png";

import { useState, useEffect } from "react";
import Schedule_Modal from "../../NoChanging/Schedule_Modal/Schedule_Modal";

const StyleContainer = styled.div`
  background-color: black;
  color: white;
`;

const Main = styled.div`
  padding: 0 3.5%;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 105px 0;
`;

const Title = styled.div`
  font-size: 40px;
  font-family: Esamanru;
  font-weight: 300;
`;

const Right = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  width: 130px;
  margin: 0 20px;

  font-size: 18px;
  font-family: Plaid;
  font-weight: 300;
  cursor: pointer;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default function OutTraffic() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({});

  /*흰색*/
  const TrainI = TrainIcon;
  const TaxiI = TaxiIcon;
  const ShuttleI = ShuttleIcon;
  const publicI = PublicBusIcon;
  const transferI = AirportTransferIcon;

  /*검정*/
  const TrainIconB = TrainB;
  const TaxiIconB = TaxiB;
  const ShuttleIconB = ShuttleB;
  const publicIconB = PublicB;
  const transferIconB = TransferB;

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
      <AboutFadin>
        <Main>
          <LineBox>
            <Title>공항 - 도심 간 이동 교통편</Title>
            <Right>
              <Card>
                <Schedule_Modal
                  tittle={infoAirport.trainMrtOutAirportHeader}
                  description={infoAirport.trainMrtOutAirport}
                  Modalicon={TrainI}
                  ModaliconBlack={TrainIconB}
                ></Schedule_Modal>
                <div>Train MRT</div>
              </Card>

              <Card>
                <Schedule_Modal
                  tittle={infoAirport.taxiOutAirportHeader}
                  description={infoAirport.taxiOutAirport}
                  Modalicon={TaxiI}
                  ModaliconBlack={TaxiIconB}
                ></Schedule_Modal>
                <div>Taxi</div>
              </Card>

              <Card>
                <Schedule_Modal
                  tittle={infoAirport.shuttleBusOutAirportHeader}
                  description={infoAirport.airportShuttleBusOutAirport}
                  Modalicon={ShuttleI}
                  ModaliconBlack={ShuttleIconB}
                ></Schedule_Modal>
                <div style={{ letterSpacing: "-2px" }}>Shuttle Service</div>
              </Card>

              <Card>
                <Schedule_Modal
                  tittle={infoAirport.publicBusOutAirportHeader}
                  description={infoAirport.publicBusOutAirport}
                  Modalicon={publicI}
                  ModaliconBlack={publicIconB}
                ></Schedule_Modal>
                <div>Public Bus</div>
              </Card>

              <Card>
                <Schedule_Modal
                  tittle={infoAirport.airportTransferOutAirportHeader}
                  description={infoAirport.airportTransferBusOutAirport}
                  Modalicon={transferI}
                  ModaliconBlack={transferIconB}
                ></Schedule_Modal>
                <div style={{ letterSpacing: "-3px" }}>Airport Transfer</div>
              </Card>
            </Right>
          </LineBox>
        </Main>
      </AboutFadin>
    </StyleContainer>
  );
}
