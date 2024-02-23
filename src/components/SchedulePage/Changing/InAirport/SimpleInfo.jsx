import React from "react";
import styled from "styled-components";
import WifiIcon from "../../../../img/wifi.svg";
import InfoIcon from "../../../../img/info.svg";
import CigaretteIcon from "../../../../img/cigarette.svg";
import CallIcon from "../../../../img/call.svg";
import ShowerIcon from "../../../../img/shower.svg";
import MedicineIcon from "../../../../img/medicine.svg";

import { useState, useEffect } from "react";

import Schedule_Modal from "../../NoChanging/Schedule_Modal/Schedule_Modal";

import WifiB from "../../../../img/Wifi_black.png";
import InfoB from "../../../../img/Info_black.png";
import CigarateB from "../../../../img/Cigar_black.png";
import ShowerB from "../../../../img/Shower_black.png";
import PharmarcyB from "../../../../img/pharmacy_black.png";

const Main = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

// const Wifi = styled.img``;
// const Info = styled.img``;
// const Cigarette = styled.img``;
// const Shower = styled.img``;
// const Medicine = styled.img``;

export default function SimpleInfo() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({});

  const wifiIconbg = WifiIcon;
  const infoIcon = InfoIcon;
  const CigarIcon = CigaretteIcon;
  const showerIconbg = ShowerIcon;
  const PharmacyIcon = MedicineIcon;

  const wifiIconB = WifiB;
  const infoIconB = InfoB;
  const CigarIconB = CigarateB;
  const ShowerIconB = ShowerB;
  const PharmacyIconB = PharmarcyB;

  function getAirport() {
    const url = `https://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setAirport(data.layoverAirport);
      });
  }

  useEffect(() => {
    getAirport();
  }, []);

  return (
    <Main>
      {/* <Wifi src={WifiIcon} />
      <Info src={InfoIcon} />
      <Cigarette src={CigaretteIcon} />
      <Shower src={ShowerIcon} />
      <Medicine src={MedicineIcon} /> */}

      {/*API연결*/}
      <Schedule_Modal
        tittle={"Free Wifi"}
        description={infoAirport.wifi}
        Modalicon={wifiIconbg}
        ModaliconBlack={wifiIconB}
      ></Schedule_Modal>

      <Schedule_Modal
        tittle={"INFO CENTER"}
        description={infoAirport.informationCenter}
        Modalicon={infoIcon}
        ModaliconBlack={infoIconB}
      ></Schedule_Modal>

      <Schedule_Modal
        tittle={"smoking area"}
        description={infoAirport.smokingArea}
        Modalicon={CigarIcon}
        ModaliconBlack={CigarIconB}
      ></Schedule_Modal>

      <Schedule_Modal
        tittle={"Shower facilities"}
        description={infoAirport.showerFacilities}
        Modalicon={showerIconbg}
        ModaliconBlack={ShowerIconB}
      ></Schedule_Modal>

      <Schedule_Modal
        tittle={"Clinics & Pharmacies"}
        description={infoAirport.pharmacy}
        Modalicon={PharmacyIcon}
        ModaliconBlack={PharmacyIconB}
      ></Schedule_Modal>
    </Main>
  );
}
