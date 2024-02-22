import { useEffect, useState } from "react";
import styled from "styled-components";
import InViewCard from "../../InAirport/InView/InViewCard";

const StyleContainer = styled.div`
  font-size: 20px;
  margin: 0 3%;
`;
const TitleCover = styled.div`
  border-bottom: 1px solid white;
  padding-top: 130px;

  font-family: EsaManru;
  font-size: 125px;
  font-weight: 100;
`;
const Title = styled.div`
  /* white-space: nowrap; */
  margin: 0 30px;
  text-align: center;
`;

const ViewContainer = styled.div`
  padding: 80px 0;
`;

const ViewTitle = styled.div`
  font-family: Plaid;
  font-weight: 300;
`;

const ViewBtnContainer = styled.div`
  padding: 30px 0;
  padding-top: 40px;
`;

const CategoryTitle = styled.div`
  padding-top: 30px;
`;

const ViewBtn = styled.button`
  background-color: rgba(44, 110, 73, 1);
  border: 1px solid rgba(244, 240, 231, 1);
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 20px;
  color: rgba(244, 240, 231, 1);

  font-family: Plaid;
  font-weight: 300;
  font-size: 20px;

  &:hover {
    background-color: #b8b8b8;
  }
`;

const FreeTour = styled.div``;

const TourContent = styled.div`
  padding: 30px 0;

  font-size: 25px;
  font-family: Pretendard-Light;
  line-height: 60px;
`;

const TourTitle = styled.div`
  font-family: Esamanru;
  font-weight: 300;
  font-size: 70px;
`;

const TourGuide = styled.div`
  display: flex;
`;

const GuideCard = styled.div`
  padding-right: 70px;
`;

const GuideTitle = styled.div`
  border-bottom: 1px solid #f4f0e7;
  padding: 15px 0;

  font-size: 27px;
  font-family: Esamanru;
  font-weight: 200;
`;

const GuideContent = styled.div`
  padding-top: 20px;

  font-size: 24px;
  font-family: Pretendard-ExtraLight;
  line-height: 35px;
`;

export default function View() {
  //   const [category, setCategory] = useState("0");
  const [inFree, setInFree] = useState(true);
  const [inActivity, setInActivity] = useState(false);
  const [inEat, setInEat] = useState(false);

  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);

  const url = `https://api.zionhann.shop/app/viaflight/layover-airport-out?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoAirport(data);
      });
  }, []);

  const handleFree = () => {
    setInFree(true);
    setInActivity(false);
    setInEat(false);
  };

  const handleActivity = () => {
    setInFree(false);
    setInActivity(true);
    setInEat(false);
  };
  const handleEat = () => {
    setInFree(false);
    setInActivity(false);
    setInEat(true);
  };

  return (
    <StyleContainer>
      <TitleCover>
        <Title>EXPERIENCE IN SINGAPORE</Title>
      </TitleCover>
      <ViewContainer>
        <ViewTitle>Choose a Category to View</ViewTitle>
        <ViewBtnContainer>
          <ViewBtn
            style={
              inFree
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleFree()}
          >
            Free Guide Tour
          </ViewBtn>
          <ViewBtn
            style={
              inActivity
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleActivity()}
          >
            Tour & Activity
          </ViewBtn>
          <ViewBtn
            style={
              inEat
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleEat()}
          >
            Must-Eat
          </ViewBtn>
        </ViewBtnContainer>
        <CategoryTitle>
          {inEat ? (
            <div>
              {infoAirport?.foodSpot?.map(
                (item, index) =>
                  index < 3 && (
                    <InViewCard
                      key={item.foodSpotName}
                      imageURL={item.imageURL}
                      name={item.foodSpotName}
                      businessHours={item.businessTime}
                      information={item.information}
                      blog={item.homepage}
                      index={index}
                    />
                  )
              )}
            </div>
          ) : inActivity ? (
            <div>
              {infoAirport?.activity?.map(
                (item, index) =>
                  index < 3 && (
                    <InViewCard
                      key={item.paidActivityName}
                      imageURL={item.imageURL}
                      name={item.paidActivityName}
                      businessHours={item.businessTime}
                      information={item.information}
                      blog={item.homepage}
                      index={index}
                    />
                  )
              )}
            </div>
          ) : (
            <FreeTour>
              <TourTitle>Free Guide Tour</TourTitle>
              <TourContent>
                연결 항공편까지 5시간 30분이상의 여유가 있다면 무료 2시간 30분
                가이드 투어를 신청해보세요.
                <br />
                유명한 랜드마크에서 사진을 찍을 수 있는 투어와 쥬얼 창이
                공항까지 도보 여행 일정이 포함된 버스 투어 일정을 함께 해보세요.
              </TourContent>
              <TourGuide>
                <GuideCard>
                  <GuideTitle>Service Counters</GuideTitle>
                  <GuideContent>
                    환승 구역에 머물고 입국 심사를 받지 마세요
                    <br />
                    Terminal 2 | 환승 구역(게이트 F50 근처)
                    <br />
                    Terminal 3 | 환승 구역(게이트 A1 - A8 근처)
                    <br />
                    Other Terminals | 환승 구역 내에서 Sky Train을 타고
                    <br />
                    Turminal 3으로 이동하여 등록하시기 바랍니다.
                  </GuideContent>
                </GuideCard>
                <GuideCard>
                  <GuideTitle>Required Documents</GuideTitle>
                  <GuideContent>
                    여권, 탑승권, 입국 비자(해당되는 경우) 및 투어 예약 확인서
                  </GuideContent>
                </GuideCard>
              </TourGuide>
              {infoAirport?.freeTour?.map(
                (item, index) =>
                  index < 3 && (
                    <InViewCard
                      key={item.freeTourName}
                      imageURL={item.imageURL}
                      name={item.freeTourName}
                      businessHours={item.businessTime}
                      location={item.route}
                      information={item.information}
                      blog={item.homepage}
                      index={index}
                    />
                  )
              )}
            </FreeTour>
          )}
        </CategoryTitle>
      </ViewContainer>
    </StyleContainer>
  );
}
