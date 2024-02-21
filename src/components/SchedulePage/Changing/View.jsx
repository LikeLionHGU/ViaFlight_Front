import { useState } from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  font-size: 20px;
`;
const TitleCover = styled.div`
  border-bottom: 1px solid white;
  padding-top: 130px;
  margin: 0 3%;

  font-family: EsaManru;
  font-size: 135px;
  font-weight: 100;
`;
const Title = styled.div`
  margin: 0 30px;
  text-align: center;
`;
const Food = styled.div``;
const Rest = styled.div``;
const Shopping = styled.div``;

export default function View() {
  //   const [category, setCategory] = useState("0");
  const [inFood, setInFood] = useState(false);
  const [inRest, setInRest] = useState(false);
  const [inShopping, setInShopping] = useState(false);

  const handleFood = () => {
    setInFood(true);
    setInRest(false);
    setInShopping(false);
  };

  const handleRest = () => {
    setInFood(false);
    setInRest(true);
    setInShopping(false);
  };
  const handleShopping = () => {
    setInFood(false);
    setInRest(false);
    setInShopping(true);
  };

  console.log(inShopping + "S");

  return (
    <StyleContainer>
      <TitleCover>
        <Title>EXPERIENCE IN AIRPORT</Title>
      </TitleCover>
      <div>Choose a Category to View</div>
      <div>
        <Food onClick={() => handleFood()}>Food & Beverages</Food>
        <Rest onClick={() => handleRest()}>Rest facilities</Rest>
        <Shopping onClick={() => handleShopping()}>Shopping</Shopping>
      </div>
      <div style={{ color: " red" }}>
        {inFood ? (
          <div>Food & Beverages</div>
        ) : inRest ? (
          <div>Rest facilities</div>
        ) : (
          <div>Shopping</div>
        )}
      </div>
    </StyleContainer>
  );
}
