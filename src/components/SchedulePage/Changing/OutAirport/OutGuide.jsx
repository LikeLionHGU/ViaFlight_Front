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
  padding-top: 100px;
  padding-bottom: 30px;

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
  font-weight: 500;
  font-size: 25px;
`;

const OutGuideBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const OutGuideText = styled.div`
  height: 500px;
  padding-left: 40px;
  padding-top: 25px;

  font-family: Esamanru;
  font-weight: 300;
  font-size: 18px;
  line-height: 40px;
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
              싱가포르 여행자를 위한 팁은 무엇인가요?
            </OutGuideQuestion>
          </OutGuideBox>
          {showGuide2 ? (
            <OutGuideText>
              <strong>반입 금지 물품</strong> | 껌, 전자담배는 반입 금지.
              <br />
              <strong>쓰레기 투기 금지</strong> | 공공장소에서 쓰레기를 버릴
              경우, 1차 적발 시 160만원, 2차 적발 시 최대 340만원 벌금
              <br />
              <strong>대중교통 내 음식물 섭취 금지</strong> | 대중교통 이용 중
              음식 섭취 시 40만원 벌금.
              <br />
              <strong>음주 가능 시간 준수</strong> | 밤 10시 30분부터 오전
              7시까지 공공장소 음주 및 술 구매 금지.
              <br />
              <strong>지정된 흡연 구역에서만 흡연</strong> | 지정 구역 외 흡연
              시 SGD 1,000(약 80만원) 벌금.
              <br />
              <strong>좌측 통행 주의</strong> | 싱가포르는 좌측 통행 국가입니다.
              이동 시 유의하세요.
              <br />
              <br />
              싱가포르 여행 시 규정들을 준수하여 걱정 없는 여행을 즐기세요!
            </OutGuideText>
          ) : (
            <div style={{ paddingBottom: "400px" }} />
          )}
        </Main>
      </Fadin>
    </StyleContainer>
  );
}
