import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Above = styled.div`
  width: 70%;
`;
const Toggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 30px;
  padding-bottom: 20px;
`;
const SameOrDifferent = styled.div`
  width: 200px;
`;
const ToggleBtns = styled.div`
  display: flex;
  background-color: #d9d9d9;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
`;
const SameBtn = styled.button`
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
const DiffBtn = styled.button`
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
const SearchBtn = styled.button`
  width: 100px;
  background-color: white;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
`;
const Inputinfo = styled.div``;
const SameFlight = styled.div``;
const Same_Above = styled.div`
  display: flex;
`;
const Same_Below = styled.div``;
const DiffFlight = styled.div``;

function Search() {
  const [isToggle, setIsToggle] = useState(false); // 동일한 항공사
  const DiffToggle = () => {
    setIsToggle(false);
  };

  const SameToggle = () => {
    setIsToggle(true);
  };

  return (
    <Main>
      <Above>
        <Toggle>
          <SameOrDifferent>
            {isToggle ? "동일한 항공사" : "다른 항공사"}
          </SameOrDifferent>
          <ToggleBtns>
            <SameBtn
              onClick={SameToggle}
              style={{ backgroundColor: isToggle ? "white" : "transparent" }}
            >
              동일한 항공사
            </SameBtn>
            <DiffBtn
              onClick={DiffToggle}
              style={{ backgroundColor: isToggle ? "transparent" : "white" }}
            >
              다른 항공사
            </DiffBtn>
          </ToggleBtns>
          <SearchBtn>조회</SearchBtn>
        </Toggle>
        <Inputinfo>
          {isToggle ? (
            <SameFlight>
              <Same_Above>
                <div>항공사</div>
                <div>예약 번호</div>
                <div>출국일</div>
              </Same_Above>
              <Same_Below>
                <div>여행자 성</div>
              </Same_Below>
            </SameFlight>
          ) : (
            <DiffFlight>
              <div>출발 항공사</div>
              <div>예약 번호 (출발)</div>
              <div>출국일</div>
              <div>여행자 성</div>
              <div>경유 항공사</div>
              <div>예약 번호(경유)</div>
              <div>출국일(경유)</div>
            </DiffFlight>
          )}
        </Inputinfo>
      </Above>
    </Main>
  );
}
export default Search;
