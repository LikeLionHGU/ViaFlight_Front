import { useState } from "react";
import styled from "styled-components";
import Airplane from "../../../img/airplane icon.svg";

const ToggleContainer = styled.div`
  position: relative;
  width: 150px;
  cursor: pointer;

  > .toggle-container {
    width: 150px;
    height: 60px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 1s;
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 1s;

    display: flex;
    align-items: center;
    justify-content: center;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 92px;
    transition: 1s;
  }
`;

const InAirport = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  padding-right: 15px;
  height: 100%;

  transition: all 5s ease-in-out;
`;

const OutAirport = styled.div`
  display: flex;
  align-items: center;

  padding-left: 15px;
  height: 100%;
`;

const InCircle = styled.img`
  width: 25px;
  height: 25px;
  padding-bottom: 6px;
`;

export default function ToggleBtn() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}>
          {isOn ? (
            <OutAirport>공항 OUT</OutAirport>
          ) : (
            <InAirport>공항 IN</InAirport>
          )}
        </div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
          <InCircle src={Airplane} />
        </div>
      </ToggleContainer>
    </>
  );
}
