import React from "react";
import "../../style/Schedule_Header.css";
import ToggleBtn from "./Changing/ToggleBtn";

function Schedule_Header() {
  return (
    <>
      <div className="Schedule_Frame_Header">
        <div className="Schedule_Frame_Header_btn">
          <ToggleBtn />
        </div>
        <div className="Schedule_Frame_Header_text">
          <div className="text1">one of the best airports in the world</div>
          <div className="text2">SINGAPORE CHANGI AIRPORT</div>
        </div>
      </div>
    </>
  );
}

export default Schedule_Header;
