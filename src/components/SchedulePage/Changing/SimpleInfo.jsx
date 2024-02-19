import React from "react";
import styled from "styled-components";
import WifiIcon from "../../../img/wifi.svg";
import InfoIcon from "../../../img/info.svg";
import CigaretteIcon from "../../../img/cigarette.svg";
import CallIcon from "../../../img/call.svg";
import ShowerIcon from "../../../img/shower.svg";

const Main = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Wifi = styled.img``;
const Info = styled.img``;
const Cigarette = styled.img``;
const Call = styled.img``;
const Shower = styled.img``;

export default function SimpleInfo() {
  return (
    <Main>
      <Wifi src={WifiIcon} />
      <Info src={InfoIcon} />
      <Cigarette src={CigaretteIcon} />
      <Call src={CallIcon} />
      <Shower src={ShowerIcon} />
    </Main>
  );
}
