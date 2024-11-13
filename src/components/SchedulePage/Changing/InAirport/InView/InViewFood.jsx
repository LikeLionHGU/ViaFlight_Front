/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import InViewFoodBtnArrow from "../../../../../img/InViewFoodBtnArrow.svg";
import InViewCard from "./InViewCard";

const StyleContainer = styled.div``;

const FoodTitle = styled.div`
  font-size: 50px;
  font-family: Esamanru;
  font-weight: 300;
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
  cursor: pointer;

  text-align: left;
  font-size: 20px;
  font-family: Esamanru;
  font-weight: 300;
`;

export default function Food() {
  const [inRestaurant, setInRestaurnat] = useState(true);
  const [inCafe, setInCafe] = useState(false);
  const [inDessert, setInDessert] = useState(false);

  const savedAirport = localStorage.getItem("viaAirport");
  const savedATime = localStorage.getItem("arrivalTime");
  const savedDTime = localStorage.getItem("durationTime");

  const [infoAirport, setInfoAirport] = useState([]);

  // const url = `https://api.zionhann.shop/app/viaflight/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;
  const url = `https://52.79.149.240:8080/layover-airport-in?layoverAirportName=${savedAirport}&layoverArrivalTime=${savedATime}&layoverTime=${savedDTime}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfoAirport(data);
      });
  }, []);

  const restaurantData = infoAirport?.foods?.filter(
    (item) => item.type === "Meal"
  );

  const cafeData = infoAirport?.foods?.filter((item) => item.type === "Cafe");

  const dessertData = infoAirport?.foods?.filter(
    (item) => item.type === "Dessert"
  );

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
          RESTAURANT
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
          CAFE
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
          DESSERT
          <img src={InViewFoodBtnArrow} alt="화살표" />
        </FoodBtn>
      </FoodBtnContainer>
      <div>
        {inDessert ? (
          <div>
            {dessertData?.map(
              (item, index) =>
                index < 3 && (
                  <InViewCard
                    key={item.mealName + item.location}
                    imageURL={item.imageURL}
                    name={item.mealName}
                    businessHours={item.businessHours}
                    location={item.location}
                    information={item.information}
                    blog={item.blog}
                    index={index}
                  />
                )
            )}
          </div>
        ) : inCafe ? (
          <div>
            {cafeData?.map(
              (item, index) =>
                index < 3 && (
                  <InViewCard
                    key={item.mealName + item.location}
                    imageURL={item.imageURL}
                    name={item.mealName}
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
            {restaurantData?.map(
              (item, index) =>
                index < 3 && (
                  <InViewCard
                    key={item.mealName + item.location}
                    imageURL={item.imageURL}
                    name={item.mealName}
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
