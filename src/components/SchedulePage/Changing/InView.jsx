import { useState } from "react";
import styled from "styled-components";
import InViewFood from "./View/InViewFood";
// import InViewRest from "./View/InViewRest";

const StyleContainer = styled.div`
  font-size: 20px;
  margin: 0 3%;
`;
const TitleCover = styled.div`
  border-bottom: 1px solid white;
  padding-top: 130px;

  font-family: EsaManru;
  font-size: 135px;
  font-weight: 100;
`;
const Title = styled.div`
  margin: 0 30px;
  text-align: center;
`;

const ViewContainer = styled.div`
  padding: 80px 0;
`;

const ViewTitle = styled.div``;

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

  font-size: 15px;

  &:hover {
    background-color: #b8b8b8;
  }
`;

export default function View() {
  //   const [category, setCategory] = useState("0");
  const [inFood, setInFood] = useState(true);
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

  return (
    <StyleContainer>
      <TitleCover>
        <Title>EXPERIENCE IN AIRPORT</Title>
      </TitleCover>
      <ViewContainer>
        <ViewTitle>Choose a Category to View</ViewTitle>
        <ViewBtnContainer>
          <ViewBtn
            style={
              inFood
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleFood()}
          >
            Food & Beverages
          </ViewBtn>
          <ViewBtn
            style={
              inRest
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleRest()}
          >
            Rest facilities
          </ViewBtn>
          <ViewBtn
            style={
              inShopping
                ? {
                    background: "rgba(244, 240, 231, 1)",
                    color: "rgba(44, 110, 73, 1)",
                  }
                : {}
            }
            onClick={() => handleShopping()}
          >
            Shopping
          </ViewBtn>
        </ViewBtnContainer>
        <CategoryTitle>
          {inShopping ? (
            <div>Shopping</div>
          ) : inRest ? (
            // <InViewRest />
            ""
          ) : (
            <InViewFood />
          )}
        </CategoryTitle>
      </ViewContainer>
    </StyleContainer>
  );
}
