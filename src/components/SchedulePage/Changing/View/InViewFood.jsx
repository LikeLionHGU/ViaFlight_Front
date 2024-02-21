import { useEffect, useState } from "react";
import styled from "styled-components";
import InViewFoodBtnArrow from "../../../../img/InViewFoodBtnArrow.svg";
import InViewCard from "./InViewCard";

const StyleContainer = styled.div``;

const FoodTitle = styled.div`
  font-size: 50px;
`;

const FoodBtnContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

const FoodBtn = styled.button`
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

  text-align: left;
  font-size: 20px;
`;

const FoodCard = styled.div`
  display: flex;
`;

const RestaurantImg = styled.img`
  width: 40%;
  height: 500px;

  object-fit: cover;
`;

export default function Food() {
  const [inRestaurant, setInRestaurnat] = useState(true);
  const [inCafe, setInCafe] = useState(false);
  const [inDessert, setInDessert] = useState(false);

  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);

  const url = `https://api.zionhann.shop/app/viaflight/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoAirport(data);
      });
  }, []);

  const handleRestaurant = () => {
    setInRestaurnat(true);
    setInCafe(false);
    setInDessert(false);
  };

  const handleCafe = () => {
    setInRestaurnat(false);
    setInCafe(true);
    setInDessert(false);
  };

  const handleDessert = () => {
    setInRestaurnat(false);
    setInCafe(false);
    setInDessert(true);
  };

  return (
    <StyleContainer>
      <FoodTitle>Food & Beverages</FoodTitle>
      <FoodBtnContainer>
        <FoodBtn
          style={
            inRestaurant
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleRestaurant()}
        >
          Restaurant
          <img src={InViewFoodBtnArrow} alt="화살표" />
        </FoodBtn>
        <FoodBtn
          style={
            inCafe
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleCafe()}
        >
          Cafe
          <img src={InViewFoodBtnArrow} alt="화살표" />
        </FoodBtn>
        <FoodBtn
          style={
            inDessert
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleDessert()}
        >
          Dessert
          <img src={InViewFoodBtnArrow} alt="화살표" />
        </FoodBtn>
      </FoodBtnContainer>
      {infoAirport?.foods?.map((item) => (
        <div>
          {inDessert ? (
            <div></div>
          ) : inCafe ? (
            <div>Cafe</div>
          ) : (
            <InViewCard key={item.mealName}, url={url}, type={item.type} />
          )}
        </div>
      ))}
    </StyleContainer>
  );
}
