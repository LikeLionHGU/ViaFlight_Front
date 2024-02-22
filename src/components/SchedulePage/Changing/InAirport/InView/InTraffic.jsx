import styled from "styled-components";
import InTrainImg from "../../../../../img/SkyTrain.svg";
import InBusImg from "../../../../../img/Bus.svg";
import Fadein from "../../../../AboutPage/About_fadin";

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
  font-size: 40px;
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
