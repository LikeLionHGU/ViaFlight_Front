import { useEffect, useState } from "react";
import styled from "styled-components";
import InViewShoppingBtnArrow from "../../../../img/InViewFoodBtnArrow.svg";
import InViewCard from "./InViewCard";

const StyleContainer = styled.div``;

const ShoppingTitle = styled.div`
  font-size: 50px;
`;

const ShoppingBtnContainer = styled.div`
  display: flex;
  padding: 50px 0;
`;

const ShoppingBtn = styled.button`
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

export default function Shopping() {
  const [inFashion, setInFashion] = useState(true);
  const [inDutyFree, setInDutyFree] = useState(false);
  const [inEntertainment, setInEntertainment] = useState(false);

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

  const handleFashion = () => {
    setInFashion(true);
    setInDutyFree(false);
    setInEntertainment(false);
  };

  const handleDutyFree = () => {
    setInFashion(false);
    setInDutyFree(true);
    setInEntertainment(false);
  };

  const handleEntertainment = () => {
    setInFashion(false);
    setInDutyFree(false);
    setInEntertainment(true);
  };

  return (
    <StyleContainer>
      <ShoppingTitle>Shopping & Entertainments</ShoppingTitle>
      <ShoppingBtnContainer>
        <ShoppingBtn
          style={
            inFashion
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleFashion()}
        >
          Fashion & DutyFree
          <img src={InViewShoppingBtnArrow} alt="화살표" />
        </ShoppingBtn>
        <ShoppingBtn
          style={
            inDutyFree
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleDutyFree()}
        >
          Beverage & Snack & Duty Free
          <img src={InViewShoppingBtnArrow} alt="화살표" />
        </ShoppingBtn>
        <ShoppingBtn
          style={
            inEntertainment
              ? {
                  background: "rgba(244, 240, 231, 1)",
                  color: "rgba(44, 110, 73, 1)",
                }
              : {}
          }
          onClick={() => handleEntertainment()}
        >
          Entertainment
          <img src={InViewShoppingBtnArrow} alt="화살표" />
        </ShoppingBtn>
      </ShoppingBtnContainer>
      {infoAirport?.shopping?.map((item, index) => (
        <div>
          {inFashion
            ? (item.type === "Fashtion" || item.type === "Beauty") && (
                <InViewCard
                  key={item.shoppingOptionsName}
                  imageURL={item.imageURL}
                  name={item.shoppingOptionsName}
                  businessHours={item.businessHours}
                  location={item.location}
                  information={item.information}
                  blog={item.blog}
                  index={index}
                />
              )
            : inDutyFree
            ? (item.type === "Beverage" ||
                item.type === "Snack" ||
                item.type === "Duty_free") && (
                <InViewCard
                  key={item.shoppingOptionsName}
                  imageURL={item.imageURL}
                  name={item.shoppingOptionsName}
                  businessHours={item.businessHours}
                  location={item.location}
                  information={item.information}
                  blog={item.blog}
                  index={index}
                />
              )
            : item.type === "Entertainment" && (
                <InViewCard
                  key={item.shoppingOptionsName}
                  imageURL={item.imageURL}
                  name={item.shoppingOptionsName}
                  businessHours={item.businessHours}
                  location={item.location}
                  information={item.information}
                  blog={item.blog}
                  index={index}
                />
              )}
        </div>
      ))}
    </StyleContainer>
  );
}
