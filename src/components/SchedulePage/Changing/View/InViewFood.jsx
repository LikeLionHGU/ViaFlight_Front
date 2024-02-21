import { useState } from "react";
import styled from "styled-components";
import InViewFoodBtnArrow from "../../../../img/InViewFoodBtnArrow.svg";

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

export default function Food() {
  const [inRestaurant, setInRestaurnat] = useState(true);
  const [inCafe, setInCafe] = useState(false);
  const [inDessert, setInDessert] = useState(false);

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
      <div style={{ color: " blue" }}>
        {inDessert ? (
          <div>Dessert</div>
        ) : inCafe ? (
          <div>Cafe</div>
        ) : (
          <div>Restaurant</div>
        )}
      </div>
    </StyleContainer>
  );
}
