import { useState } from "react";
import styled from "styled-components";

const StyleContainer = styled.div``;

export default function Food() {
  const [inCafe, setInCafe] = useState(false);
  const [inDessert, setInDessert] = useState(false);

  const handleRestaurant = () => {
    setInCafe(false);
    setInDessert(false);
  };

  const handleCafe = () => {
    setInCafe(true);
    setInDessert(false);
  };

  const handleDessert = () => {
    setInCafe(false);
    setInDessert(true);
  };

  const Restaurant = styled.div``;
  const Cafe = styled.div``;
  const Dessert = styled.div``;

  return (
    <StyleContainer>
      <div>Food & Beverages</div>
      <div>
        <Restaurant onClick={() => handleRestaurant()}>Restaurant</Restaurant>
        <Cafe onClick={() => handleCafe()}>Cafe</Cafe>
        <Dessert onClick={() => handleDessert()}>Dessert</Dessert>
      </div>
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
