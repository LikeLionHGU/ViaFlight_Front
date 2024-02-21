import React from "react";
import styled from "styled-components";
import upArrow from "../../../img/inairport_grid_UpArrow.png";
import View from "../Changing/InView";

const Main = styled.div`
  background-color: rgba(44, 110, 73, 1);
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* white-space: nowrap; */
`;

const ContainArrow = styled.div`
  height: 30px;
`;

const ScheduleUpArrow = styled.img`
  white-space: normal;

  animation: motionSchedule 0.5s linear 0s infinite alternate; /* 무한 반복 */
  @keyframes motionSchedule {
    0% {
      margin-bottom: 0px;
    } /* 처음 위치 */
    100% {
      margin-bottom: 15px;
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

function Schedule_Grid_Green() {
  const scrollTorecommend = () => {
    // window.scroll({
    //   top: 0,
    //   behavior: "smooth",
    // });
    window.scrollTo({ top: "1000", behavior: "smooth" });
  };
  return (
    <Main>
      <View />
      <ContainArrow>
        <ScheduleUpArrow src={upArrow} alt="화살표"></ScheduleUpArrow>
      </ContainArrow>
      <UpBtnCover>
        <UpBtn onClick={scrollTorecommend}>공항 속 새로운 경험하러가기</UpBtn>
      </UpBtnCover>
    </Main>
  );
}

export default Schedule_Grid_Green;
