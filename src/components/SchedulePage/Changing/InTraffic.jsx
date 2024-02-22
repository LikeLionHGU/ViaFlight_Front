import styled from "styled-components";
import InTrainImg from "../../../img/SkyTrain.svg";
import InBusImg from "../../../img/Bus.svg";
import Fadein from "../../AboutPage/About_fadin";

const StyleContainer = styled.div`
  background-color: black;
  color: #ffffff;
`;

const InTrain = styled.img``;

const InBus = styled.img``;

export default function InTraffic() {
  return (
    <StyleContainer>
      <Fadein>
        <div>공항 터미널 이동 정보</div>
        <div>
          <InTrain src={InTrainImg} />
          <div>Sky Train</div>
        </div>
        <div>
          <InBus src={InBusImg} />
          <div>Bus Shuttle Service</div>
        </div>
      </Fadein>
    </StyleContainer>
  );
}
