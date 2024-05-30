import React from "react";
import styled from "styled-components";
import WifiIcon from "../../../../img/wifi.svg";
import InfoIcon from "../../../../img/info.svg";
import CigaretteIcon from "../../../../img/cigarette.svg";
import ShowerIcon from "../../../../img/shower.svg";
import MedicineIcon from "../../../../img/medicine.svg";
import Exchange from "../../../../img/Exchange_icon.svg";
import Luggage from "../../../../img/Luggage.svg";

import { useState, useEffect } from "react";

import ScheduleModal from "../../NoChanging/Schedule_Modal/Schedule_Modal";

import WifiB from "../../../../img/Wifi_black.png";
import InfoB from "../../../../img/Info_black.png";
import CigarateB from "../../../../img/Cigar_black.png";
import ShowerB from "../../../../img/Shower_black.png";
import PharmarcyB from "../../../../img/pharmacy_black.png";
import ExchangeB from "../../../../img/Exhancge_black.png";
import LuggageB from "../../../../img/Luggage_black.png";

const Main = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Wifi = styled.img``;
// const Info = styled.img``;
// const Cigarette = styled.img``;
// const Shower = styled.img``;
// const Medicine = styled.img``;

export default function Simpleinfo_out() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({});

  const wifiIconbg = WifiIcon;
  const infoIcon = InfoIcon;
  const CigarIcon = CigaretteIcon;
  const showerIconbg = ShowerIcon;
  const PharmacyIcon = MedicineIcon;
  const ExchangeIcon = Exchange;
  const LuggageIcon = Luggage;

  const wifiIconB = WifiB;
  const infoIconB = InfoB;
  const CigarIconB = CigarateB;
  const ShowerIconB = ShowerB;
  const PharmacyIconB = PharmarcyB;
  const ExchangeIconB = ExchangeB;
  const LuggageIconB = LuggageB;
  function getAirport() {
    // const url = `http://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    const url = `http://223.130.142.119:8080/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAirport(data.layoverAirport);
      });
  }

  useEffect(() => {
    getAirport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      {/* <Wifi src={WifiIcon} />
      <Info src={InfoIcon} />
      <Cigarette src={CigaretteIcon} />
      <Shower src={ShowerIcon} />
      <Medicine src={MedicineIcon} /> */}

      <ScheduleModal
        tittle={infoAirport.wifiHeader}
        description={infoAirport.wifi}
        Modalicon={wifiIconbg}
        ModaliconBlack={wifiIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.informationCenterHeader}
        description={infoAirport.informationCenter}
        Modalicon={infoIcon}
        ModaliconBlack={infoIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.smokingHeader}
        description={infoAirport.smokingArea}
        Modalicon={CigarIcon}
        ModaliconBlack={CigarIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.showerFcilitiesHeader}
        description={infoAirport.showerFacilities}
        Modalicon={showerIconbg}
        ModaliconBlack={ShowerIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.clinicsPharmacies}
        description={infoAirport.pharmacy}
        Modalicon={PharmacyIcon}
        ModaliconBlack={PharmacyIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.currencyExchangeHeader}
        description={infoAirport.currencyExchange}
        Modalicon={ExchangeIcon}
        ModaliconBlack={ExchangeIconB}
      ></ScheduleModal>

      <ScheduleModal
        tittle={infoAirport.luggageStorageHeader}
        description={infoAirport.luggageStorage}
        Modalicon={LuggageIcon}
        ModaliconBlack={LuggageIconB}
      ></ScheduleModal>
    </Main>
  );
}
