import styled from "styled-components";
import Airplane from "../../../img/airplane icon.svg";
import "../../../font/font.css";

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 85px;
  padding-bottom: 10px;
`;

const ToggleContainer = styled.div`
  position: relative;
  width: 160px;
  cursor: pointer;

  font-size: 15px;
  font-family: Esamanru;

  > .toggle-container {
    width: 160px;
    height: 60px;
    border-radius: 30px;
    background-color: rgba(204, 204, 204, 1);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현

  > .toggle-circle {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 47.5px;
    height: 47.5px;
    border-radius: 50%;
    transition: 0.5s;

    background-color: rgba(244, 240, 231, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 105px;
    transition: 0.5s;
  }
`;

const InOut = styled.div`
  > .fadeout {
    animation: ToggleFadeOut 0.5s forwards;
    @keyframes ToggleFadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  > .fadein {
    animation: ToggleFadeIn 1s;
    @keyframes ToggleFadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const InAirport = styled.div`
  position: absolute;
  top: 22px;
  right: 32px;
`;

const OutAirport = styled.div`
  position: absolute;
  top: 22px;
  left: 25px;
`;

const InCircle = styled.img`
  width: 25px;
  height: 25px;
  padding-bottom: 6px;
`;

export default function ToggleBtn({ isOn, toggleHandler }) {
  return (
    <Main>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}>
          {/* {isOn ? (
            <OutAirport>공항 OUT</OutAirport>
          ) : (
            <InAirport>공항 IN</InAirport>
          )} */}
          <InOut>
            <OutAirport className={`${isOn ? "fadein" : "fadeout"}`}>
              공항 OUT
            </OutAirport>
            <InAirport className={`${isOn ? "fadeout" : "fadein"}`}>
              공항 IN
            </InAirport>
          </InOut>
        </div>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>
          <InCircle src={Airplane} />
        </div>
      </ToggleContainer>
    </Main>
  );
}
