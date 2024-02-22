import styled from "styled-components";
import InTrainImg from "../../../../../img/SkyTrain.svg";
import InBusImg from "../../../../../img/Bus.svg";
import Fadein from "../../../../AboutPage/About_fadin";
import ".././../../../../font/font.css";

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
  return (
    <StyleContainer>
      <Fadein>
        <Main>
          <Left>공항 터미널 이동 정보</Left>
          <Right>
            <InTrainCard>
              <InTrafficImg src={InTrainImg} />
              <InTrainText>Sky Train</InTrainText>
            </InTrainCard>
            <InBusCard>
              <InTrafficImg src={InBusImg} />
              <InBusText>Bus Shuttle Service</InBusText>
            </InBusCard>
          </Right>
        </Main>
      </Fadein>
    </StyleContainer>
  );
}
