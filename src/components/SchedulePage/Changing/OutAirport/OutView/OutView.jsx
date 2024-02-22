import { useState } from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  font-size: 20px;
  margin: 0 3%;
`;
const TitleCover = styled.div`
  border-bottom: 1px solid white;
  padding-top: 130px;

  font-family: EsaManru;
  font-size: 122px;
  font-weight: 100;
`;
const Title = styled.div`
  white-space: nowrap;
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
  const [inFree, setInFree] = useState(true);
  const [inActivity, setInActivity] = useState(false);
  const [inEat, setInEat] = useState(false);

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
          {inEat ? <div>a</div> : inActivity ? <div>b</div> : <div>c</div>}
        </CategoryTitle>
      </ViewContainer>
    </StyleContainer>
  );
}
