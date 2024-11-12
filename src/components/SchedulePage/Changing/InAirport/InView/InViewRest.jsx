/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import InViewRestBtnArrow from "../../../../../img/InViewFoodBtnArrow.svg";
import InViewCard from "./InViewCard";

const StyleContainer = styled.div``;

const RestTitle = styled.div`
  font-size: 50px;
  font-family: Esamanru;
  font-weight: 300;
`;

const RestBtnContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

const RestBtn = styled.button`
  background-color: rgba(44, 110, 73, 1);
  color: rgba(244, 240, 231, 1);
  border: 1px solid rgba(244, 240, 231, 1);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 3px 10px;
  width: 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  text-align: left;
  font-size: 20px;
  font-family: Esamanru;
  font-weight: 500;
`;

export default function Rest() {
  const [inLounge, setInLounge] = useState(true);
  const [inHotel, setInHotel] = useState(false);

  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);

  // const url = `https://api.zionhann.shop/app/viaflight/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;
  const url = `http://52.79.149.240:8080/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoAirport(data);
      });
  }, []);

  const hotelData = infoAirport?.rests?.filter((item) => item.type === "Hotel");

  const loungeData = infoAirport?.rests?.filter(
    (item) => item.type === "Lounge"
  );

  const handleLounge = () => {
    setInLounge(true);
    setInHotel(false);
  };

  const handleHotel = () => {
    setInLounge(false);
    setInHotel(true);
  };

  return (
    <StyleContainer>
      <RestTitle>Rest facilities</RestTitle>
      <RestBtnContainer>
        <RestBtn
          style={
            inLounge
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleLounge()}
        >
          LOUNGE
          <img src={InViewRestBtnArrow} alt="화살표" />
        </RestBtn>
        <RestBtn
          style={
            inHotel
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleHotel()}
        >
          HOTEL
          <img src={InViewRestBtnArrow} alt="화살표" />
        </RestBtn>
      </RestBtnContainer>
      <div>
        {inHotel ? (
          <div>
            {hotelData?.map(
              (item, index) =>
                index < 3 && (
                  <InViewCard
                    key={item.restName + item.location}
                    name={item.restName}
                    imageURL={item.imageURL}
                    businessHours={item.businessHours}
                    location={item.location}
                    information={item.information}
                    blog={item.blog}
                    index={index}
                  />
                )
            )}
          </div>
        ) : (
          <div>
            {loungeData?.map(
              (item, index) =>
                index < 3 && (
                  <InViewCard
                    key={item.restName + item.location}
                    name={item.restName}
                    imageURL={item.imageURL}
                    businessHours={item.businessHours}
                    location={item.location}
                    information={item.information}
                    blog={item.blog}
                    index={index}
                  />
                )
            )}
          </div>
        )}
      </div>
    </StyleContainer>
  );
}
