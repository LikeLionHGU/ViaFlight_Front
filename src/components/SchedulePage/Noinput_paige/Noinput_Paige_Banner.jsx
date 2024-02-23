import React from "react";
import "../../../style/Noinput.css";

import Fadein from "../../AboutPage/About_fadin";

function Noinput_Paige_Banner() {
  return (
    <>
      <div className="no_input_banner">
        <Fadein>
          <div className="banner_small_text">
            Interesting Exploration Sites Around the World
          </div>
        </Fadein>

        <Fadein>
          <div className="banner_Big_text">
            지금도 수많은 여행지가 여러분을 기다립니다
          </div>
        </Fadein>
      </div>
    </>
  );
}
export default Noinput_Paige_Banner;
