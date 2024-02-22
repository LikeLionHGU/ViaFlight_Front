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

const InGuideAirplaneImg = styled.img`
  width: 20px;
  height: 20px;
`;

const GuideQuestion = styled.div`
  padding-left: 24px;

  font-family: Esamanru;
  font-weight: 300;
  font-size: 22px;
`;

const GuideBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const GuideText = styled.div`
  height: 400px;
  padding-left: 40px;

  font-family: Esamanru;
  font-weight: 200;
  font-size: 18px;
  line-height: 30px;
`;

export default function InGuide() {
  const [showGuide, setShowGuide] = useState(false);

  const handleShowGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <StyleContainer>
      <Fadin>
        <Main>
          <Title>여행자 안내 사항</Title>
          <GuideBox>
            <InGuideAirplaneImg src={GuideAirplane} onClick={handleShowGuide} />
            <GuideQuestion>
              택스 리펀(GST 환급) 은 어떻게 받을 수 있나요?
            </GuideQuestion>
          </GuideBox>
          {showGuide ? (
            <GuideText>
              상점이 여행자 환급 제도(TRS)에 참여하는지 확인하세요.
              <br />
              <strong>구매 조건</strong> | SG $100 이상 구매 시 8% 세금 환급
              가능.
              <br />
              <strong>환급 신청</strong> | 창이 공항의 eTRS 셀프 무인
              키오스크에서 환급 신청.
              <br />
              <strong>언어 지원</strong> | eTRS 키오스크 한국어 지원
              <br />
              <strong>현금/신용카드 환급</strong> | 현금 환급은 Central Refund
              Counter에서, 신용카드는 eTRS 후 10일 이내 입금.
              <br />
              <strong>거래 내역 확인</strong> | eTRS 웹사이트 또는 앱에서 확인
              가능.
              <br />
              위치
              <br />- 터미널 1, 출국심사 전, 1번, 2번 출입구 사이 / 터미널 1
              환승장
              <br />- 터미널 2, 출국심사 전, 8번 출입구 스타벅스 옆 / 터미널 2
              환승장
              <br />- 터미널 3, 출국심사 전, 5번 출입구 부근 / 터미널 3 환승장
              <br />- 터미널 4, 출국심사 전, 3번 출입구 부근 / 터미널 4 환승장
            </GuideText>
          ) : (
            <div style={{ paddingBottom: "400px" }} />
          )}
        </Main>
      </Fadin>
    </StyleContainer>
  );
}
