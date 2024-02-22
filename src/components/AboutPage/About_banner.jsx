import React from "react";
import "../../style/about_banner.css";

import About_fadin from "./About_fadin";

function About_banner() {
  return (
    <div className="about_Banner">
      <About_fadin>
        <div className="about_Banner_tittle">
          <div>VIA</div>
          <div>FLIGHT</div>
          <div>A TO Z</div>
        </div>
      </About_fadin>

      <About_fadin>
        <div className="banner_box">
          <div className="about_Banner_text">
            <div>여행의 시작과 끝</div>
            <div> 모든 순간이 의미있게</div>
          </div>
          <div className="imgBox"></div>
        </div>
      </About_fadin>

      <About_fadin>
        <div className="about_Banner_picture"></div>
      </About_fadin>
    </div>
  );
}

export default About_banner;
