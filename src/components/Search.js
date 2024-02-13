import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Main = styled.div`
  // 페이지 전체
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 30px;
`;
const MainInner = styled.div`
  // 페이지 전체에서 70%만 사용하기 위해
  width: 70%;
`;
const Input = styled.input`
  // 모든 input 태그들
  width: 30%;
  border: none;
  background-color: #d9d9d9;
  font-size: 20px;
`;

const Above = styled.div`
  // 위쪽 부분
  height: 250px;
`;
const Toggle = styled.div`
  // 현재 항공사 상태, 토글, 조회 버튼
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding-bottom: 20px;
`;
const SameOrDifferent = styled.div`
  // 현재 항공사 상태
  width: 200px;
`;
const ToggleBtns = styled.div`
  // 버튼들
  display: flex;
  background-color: #d9d9d9;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
`;
const SameBtn = styled.button`
  // 같은 항공사 버튼
  width: 200px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  font-size: 20px;
`;
const DiffBtn = styled(SameBtn)``; // 다른 항공사 버튼
const SearchBtn = styled.button``; // 조회 버튼
const Inputinfo = styled.div``; // 정보 입력 부분
const SameFlight = styled.div``; // 같은 항공사 버튼을 눌렀을 경우
const SameAbove = styled.div`
  // 항공사, 예약 번호, 출국일 input
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  height: 40px;
`;

const SameBelow = styled.div`
  // 여행자 성 input
  display: flex;
  height: 40px;
`;

const DiffFlight = styled.div``; // 다른 항공사 버튼을 눌렀을 경우
const DiffAbove = styled(SameAbove)``; // 출발 항공사, 출발 예약 번호, 출국일 input
const DiffMiddle = styled(SameAbove)``; // 경유지 항공사, 경유지 예약 번호, 경유지 출국일 input
const DiffBelow = styled(SameBelow)``; // 여행자 성 input

const Middle = styled.div`
  // 중간 배너 부분
  display: flex;
  justify-content: center;

  height: 400px;
`;
const Sentence = styled.div`
  // 배너 문장
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;

const Below = styled.div`
  // FAQs 들
  text-align: center;
`;
const BelowTitle = styled.div`
  // FAQs 제목
  padding-bottom: 100px;
`;
const BelowQnABox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BelowSlide = styled.div`
  transform: "translate(-" + (selected-1) * 300 + "px, 0px)";
`;
const BelowQ = styled.div`
  // 질문
  padding-bottom: 50px;
`;
const BelowA = styled.div``; // 답변

export const question = [
  "Q. 경유지에서 짐은 어떡하나요?",
  "Q. 경유지 공항에서 밖으로 나가볼 수 있나요?",
];
export const answer = ["A. 찾아야 합니다.", "A. 공항에 따라 다릅니다."];

function Search() {
  // 항공사 토글 버튼
  const [isToggle, setIsToggle] = useState(true); // 동일한 항공사
  const DiffToggle = () => {
    setIsToggle(false);
  };

  const SameToggle = () => {
    setIsToggle(true);
  };

  // 슬라이드
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    console.log(slideIndex);
    if (slideIndex < question.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };
  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(question.length - 1);
    }
  };
  useInterval(() => {
    nextSlide();
  }, 8000);

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
                  <Input placeholder="경유 항공사"></Input>
                  <Input placeholder="예약 번호(경유)"></Input>
                  <Input placeholder="출국일(경유)"></Input>
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
        <Below>
          <BelowTitle>자주 물어보는 질문 FAQs</BelowTitle>
          <BelowQnABox>
            <IoIosArrowBack onClick={prevSlide} />
            <BelowSlide>
              <BelowQ> {question[slideIndex]}</BelowQ>
              <BelowA>{answer[slideIndex]}</BelowA>
            </BelowSlide>
            <IoIosArrowForward onClick={nextSlide} />
          </BelowQnABox>
        </Below>
      </MainInner>
    </Main>
  );
}
export default Search;
