import styled from "styled-components";
import AboutFadin from "../../../AboutPage/About_fadin";
import TrainIcon from "../../../../img/SkyTrain.svg";
import TaxiIcon from "../../../../img/Taxi.svg";
import ShuttleIcon from "../../../../img/Bus.svg";
import PublicBusIcon from "../../../../img/PublicBus.svg";
import AirportTransferIcon from "../../../../img/AirportTransfer.svg";
import "../../../../font/font.css";

const StyleContainer = styled.div`
  background-color: black;
  color: white;
`;

const Main = styled.div`
  padding: 50px 3.5%;
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

const Train = styled.img``;
const Taxi = styled.img``;
const Shuttle = styled.img``;
const PublicBus = styled.img``;
const AirportTransfer = styled.img``;

export default function OutTraffic() {
  return (
    <StyleContainer>
      <AboutFadin>
        <Main>
          <LineBox>
            <Title>공항 - 도심 간 이동 교통편</Title>
            <Right>
              <Card>
                <Train src={TrainIcon} />
                <div>Train MRT</div>
              </Card>
              <Card>
                <Taxi src={TaxiIcon} />
                <div>Taxi</div>
              </Card>
              <Card>
                <Shuttle src={ShuttleIcon} />
                <div style={{ letterSpacing: "-2px" }}>Shuttle Service</div>
              </Card>
              <Card>
                <PublicBus src={PublicBusIcon} />
                <div>Public Bus</div>
              </Card>
              <Card>
                <AirportTransfer src={AirportTransferIcon} />
                <div style={{ letterSpacing: "-3px" }}>Airport Transfer</div>
              </Card>
            </Right>
          </LineBox>
        </Main>
      </AboutFadin>
    </StyleContainer>
  );
}
