import React from "react";
import styled from "styled-components";
import upArrow from "../../../img/inairport_grid_UpArrow.png";

const Main = styled.div`
  background-color: rgba(44, 110, 73, 1);
  color: rgba(255, 255, 255, 1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UpBtnCover = styled.div`
  padding: 60px 0;
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

const Title = styled.div``;
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
      <Title>EXPERIENCE IN AIRPORT</Title>

      <div>
        <img src={upArrow} alt="화살표"></img>
      </div>
      <UpBtnCover>
        <UpBtn onClick={scrollTorecommend}>공항 속 새로운 경험하러가기</UpBtn>
      </UpBtnCover>
    </Main>
  );
}

export default Schedule_Grid_Green;
