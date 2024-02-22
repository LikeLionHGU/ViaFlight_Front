import React from "react";
import styled from "styled-components";
import upArrow from "../../../../img/inairport_grid_UpArrow.png";
import OutView from "./OutView/OutView";
import AboutFadein from "../../../AboutPage/About_fadin";

const Main = styled.div`
  background-color: rgba(44, 110, 73, 1);
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */

  /* white-space: nowrap; */
`;

const ContainArrow = styled.div`
  height: 30px;
  padding-bottom: 15px;
`;

const ScheduleOutUpArrow = styled.img`
  /* white-space: normal; */

  animation: motionScheduleOut 0.5s linear 0s infinite alternate; /* 무한 반복 */
  @keyframes motionScheduleOut {
    0% {
      margin-top: 0px;
    } /* 처음 위치 */
    100% {
      margin-top: 15px;
    } /* 마지막 위치 */
  }
`;

const UpBtnCover = styled.div`
  padding: 20px 0;
  padding-bottom: 80px;
`;
const UpBtn = styled.button`
  border: 1px solid black;
  background-color: black;
  color: rgba(244, 240, 231, 1);
  border-radius: 5px;
  padding: 21px 80px;

  font-size: 17px;
  font-family: EsaManru;
  cursor: pointer;
  &:hover {
    background-color: rgba(44, 110, 73, 1);
    color: rgba(0, 0, 0, 1);
  }
`;

function OutGreenGrid() {
  const scrollTorecommend = () => {
    window.scrollTo({ top: "1350", behavior: "smooth" });
  };
  return (
    <Main>
      <AboutFadein>
        <OutView />
      </AboutFadein>
      <AboutFadein>
        <ContainArrow>
          <ScheduleOutUpArrow src={upArrow} alt="화살표"></ScheduleOutUpArrow>
        </ContainArrow>
      </AboutFadein>
      <AboutFadein>
        <UpBtnCover>
          <UpBtn onClick={scrollTorecommend}>공항 밖 새로운 경험하러가기</UpBtn>
        </UpBtnCover>
      </AboutFadein>
    </Main>
  );
}

export default OutGreenGrid;
