import React from "react";
import "../../style/Search_Banner.css";
import scroll_Icon from "../../img/scrolldown_icon.png";

import Fadein from "../AboutPage/About_fadin";
import styled from "styled-components";

const TitleLogo = styled.div`
  display: flex;
  align-items: flex-end;

  line-height: 230px;
`;

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
            <TitleLogo>
              <div className="logo_text">
                VIA
                <br />
                FLIGHT
              </div>
              <span className="Flight_textNlogo">
                <span className="banner_logo"></span>
              </span>
            </TitleLogo>
          </Fadein>
        </div>
        <div className="scrollIcon_container">
          <Fadein>
            <img
              className="scrollIcon_arrow"
              src={scroll_Icon}
              width={17.33}
              height={16}
              alt="img"
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
