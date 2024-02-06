import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 30px;
`;
const MainInner = styled.div`
  width: 70%;
`;
const Input = styled.input`
  width: 300px;
  border: none;
  background-color: #d9d9d9;
  font-size: 20px;
`;

const Above = styled.div`
  height: 250px;
`;
const Toggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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

  font-size: 20px;
`;
const DiffBtn = styled.button`
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  font-size: 20px;
`;
const SearchBtn = styled(DiffBtn)``;
const Inputinfo = styled.div``;
const SameFlight = styled.div``;
const SameAbove = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  height: 40px;
`;

const SameBelow = styled.div`
  display: flex;
  height: 40px;
`;

const DiffFlight = styled.div``;
const DiffAbove = styled(SameAbove)``;
const DiffMiddle = styled(SameAbove)``;
const DiffBelow = styled(SameBelow)``;

const Middle = styled.div`
  display: flex;
  justify-content: center;

  height: 500px;
`;
const Sentence = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;

const Bottom = styled.div``;

function Search() {
  const [isToggle, setIsToggle] = useState(true); // 동일한 항공사
  const DiffToggle = () => {
    setIsToggle(false);
  };

  const SameToggle = () => {
    setIsToggle(true);
  };

  return (
    <Main>
      <MainInner>
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
                <SameAbove>
                  <Input placeholder="항공사"></Input>
                  <Input placeholder="예약 번호"></Input>
                  <Input placeholder="출국일" type="date"></Input>
                </SameAbove>
                <SameBelow>
                  <Input placeholder="여행자 성"></Input>
                </SameBelow>
              </SameFlight>
            ) : (
              <DiffFlight>
                <DiffAbove>
                  <Input placeholder="출발 항공사"></Input>
                  <Input placeholder="예약 번호 (출발)"></Input>
                  <Input placeholder="출국일"></Input>
                </DiffAbove>
                <DiffMiddle>
                  <Input placeholder="출국일(경유)"></Input>
                  <Input placeholder="경유 항공사"></Input>
                  <Input placeholder="예약 번호(경유)"></Input>
                </DiffMiddle>
                <DiffBelow>
                  <Input placeholder="여행자 성"></Input>
                </DiffBelow>
              </DiffFlight>
            )}
          </Inputinfo>
        </Above>
        <Middle>
          <Sentence>
            <div>여행의 시작과 끝</div>
            <div>모든 순간이 의미있게</div>
          </Sentence>
        </Middle>
        <Bottom></Bottom>
      </MainInner>
    </Main>
  );
}
export default Search;
