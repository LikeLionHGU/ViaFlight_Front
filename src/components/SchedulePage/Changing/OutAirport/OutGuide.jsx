import styled from "styled-components";
import Fadin from "../../../AboutPage/About_fadin";
import GuideAirplane from "../../../../img/GuideAirplane.svg";
import { useState } from "react";
import "../../../../font/font.css";

const StyleContainer = styled.div`
  background-color: black;
  color: white;
`;

const Main = styled.div`
  padding: 0 4.5%;
`;

const Title = styled.div`
  padding-top: 50px;

  font-family: Esamanru;
  font-weight: 300;
  font-size: 40px;
`;

const OutGuideAirplaneImg = styled.img`
  width: 20px;
  height: 20px;
  transition: 0.5s;

  cursor: pointer;
`;

const OutGuideQuestion = styled.div`
  padding-left: 24px;

  font-family: Esamanru;
  font-weight: 300;
  font-size: 22px;
`;

const OutGuideBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const OutGuideText = styled.div`
  height: 400px;
  padding-left: 40px;

  font-family: Esamanru;
  font-weight: 200;
  font-size: 18px;
  line-height: 30px;
`;

export default function OutGuide() {
  const [showGuide, setShowGuide] = useState(false);

  const handleShowGuide = () => {
    setShowGuide(!showGuide);
  };

  const [showGuide2, setShowGuide2] = useState(false);
  const handleShowGuide2 = () => {
    setShowGuide2(!showGuide2);
  };

  return (
    <StyleContainer>
      <Fadin>
        <Main>
          <Title>여행자 안내 사항</Title>
          <OutGuideBox>
            <OutGuideAirplaneImg
              src={GuideAirplane}
              onClick={handleShowGuide}
              style={showGuide ? { transform: "rotate(45deg)" } : {}}
            />
            <OutGuideQuestion>
              택스 리펀(GST 환급) 은 어떻게 받을 수 있나요?
            </OutGuideQuestion>
          </OutGuideBox>
          {showGuide ? (
            <OutGuideText>
              상점이 여행자 환급 제도(TRS)에 참여하는지 확인하세요.
              <br />
              구매 조건 | SG $100 이상 구매 시 8% 세금 환급 가능.
              <br />
              환급 신청 | 창이 공항의 eTRS 셀프 무인 키오스크에서 환급 신청.
              <br />
              언어 지원 | eTRS 키오스크 한국어 지원
              <br />
              현금/신용카드 환급 | 현금 환급은 Central Refund Counter에서,
              신용카드는 eTRS 후 10일 이내 입금.
              <br />
              거래 내역 확인 | eTRS 웹사이트 또는 앱에서 확인 가능.
              <br />
              위치 <br />- 터미널 1, 출국심사 전, 1번, 2번 출입구 사이 / 터미널
              1 환승장 <br />
              - 터미널 2, 출국심사 전, 8번 출입구 스타벅스 옆 / 터미널 2 환승장
              <br />
              - 터미널 3, 출국심사 전, 5번 출입구 부근 / 터미널 3 환승장
              <br />- 터미널 4, 출국심사 전, 3번 출입구 부근 / 터미널 4 환승장
            </OutGuideText>
          ) : (
            <div />
          )}
          <OutGuideBox>
            <OutGuideAirplaneImg
              src={GuideAirplane}
              onClick={handleShowGuide2}
              style={
                showGuide2
                  ? showGuide
                    ? {}
                    : { transform: "rotate(45deg)" }
                  : {}
              }
            />
            <OutGuideQuestion>
              택스 리펀(GST 환급) 은 어떻게 받을 수 있나요?
            </OutGuideQuestion>
          </OutGuideBox>
          {showGuide2 ? (
            <OutGuideText>
              상점이 여행자 환급 제도(TRS)에 참여하는지 확인하세요.
              <br />
              구매 조건 | SG $100 이상 구매 시 8% 세금 환급 가능.
              <br />
              환급 신청 | 창이 공항의 eTRS 셀프 무인 키오스크에서 환급 신청.
              <br />
              언어 지원 | eTRS 키오스크 한국어 지원
              <br />
              현금/신용카드 환급 | 현금 환급은 Central Refund Counter에서,
              신용카드는 eTRS 후 10일 이내 입금.
              <br />
              거래 내역 확인 | eTRS 웹사이트 또는 앱에서 확인 가능.
              <br />
              위치 <br />- 터미널 1, 출국심사 전, 1번, 2번 출입구 사이 / 터미널
              1 환승장 <br />
              - 터미널 2, 출국심사 전, 8번 출입구 스타벅스 옆 / 터미널 2 환승장
              <br />
              - 터미널 3, 출국심사 전, 5번 출입구 부근 / 터미널 3 환승장
              <br />- 터미널 4, 출국심사 전, 3번 출입구 부근 / 터미널 4 환승장
            </OutGuideText>
          ) : (
            <div style={{ paddingBottom: "400px" }} />
          )}
        </Main>
      </Fadin>
    </StyleContainer>
  );
}
