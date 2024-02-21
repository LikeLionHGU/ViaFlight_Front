import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Search_Banner.css";
import scroll_Icon from "../../img/scrolldown_icon.png";
import banner_Logo from "../../img/bannner_logo.png";

import Fadein from "../AboutPage/About_fadin";
function Search_Banner() {
  return (
    <div className="banner">
      <div className="Enter">
        <Fadein>
          <div className="Enterphrase">
            Enter flight information
            <br />
            for your best trip
          </div>
        </Fadein>

        <div className="Via_flight_logoNForm">
          <Fadein>
            <div className="logo_text">VIA</div>
            <div className="Flight_textNlogo">
              <div className="logo_text">FLIGHT</div>
              <img src={banner_Logo} alt=""></img>
            </div>
          </Fadein>
        </div>
        <div className="scrollIcon_container">
          <Fadein>
            <img
              className="scrollIcon_arrow"
              src={scroll_Icon}
              width={17.33}
              height={16}
            ></img>
          </Fadein>
        </div>
        <div className="bg_balance"></div>
      </div>
    </div>
  );
}

export default Search_Banner;

//
