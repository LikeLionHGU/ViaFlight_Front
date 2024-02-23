import styled from "styled-components";
import AboutFadin from "../../../AboutPage/About_fadin";
import CityIcon from "../../../../img/City.svg";
import "../../../../font/font.css";

const StyleContainer = styled.div`
  background-color: black;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 3.5%;
  padding: 100px 0;
`;

const City = styled.img`
  padding-right: 80px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 200;
  font-family: Esamanru;
`;

const Right = styled.div`
  display: flex;

  padding-right: 230px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  font-family: Pretendard-Light;
  font-size: 23px;
`;

export default function OutMove() {
  return (
    <StyleContainer>
      <AboutFadin>
        <Main>
          <Title>도심까지 이동시간</Title>
          <Right>
            <City src={CityIcon} />
            <Contents>
              <div>편도 | 1시간 30분 ~ 2시간 소요</div>
              <div>왕복 | 3시간 ~ 4시간 소요</div>
            </Contents>
          </Right>
        </Main>
      </AboutFadin>
    </StyleContainer>
  );
}
