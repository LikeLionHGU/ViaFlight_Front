import React from "react";
import "../../style/Schedule_Frame.css";
import upArrow from "../../img/inairport_grid_UpArrow.png";

function Schedule_Grid_Green() {
  const scrollTorecommend = () => {
    // window.scroll({
    //   top: 0,
    //   behavior: "smooth",
    // });
    window.scrollTo({ top: 1299, behavior: "smooth" });
  };
  return (
    <>
      <div className="Schedule_Frame_Grid1" id="recommend_Grid1">
        <div className="Schedule_Frame_Grid1_title">
          EXPERIENCE IN AIRPORT
          <hr />
        </div>
        <div className="Schedule_Frame_Grid1_recommend">
          추천 정보(시설/휴식/식사/면세) components
        </div>
        <div className="Schedule_Frame_Grid1_Arrow">
          <img className="Uparrow" src={upArrow} alt="화살표"></img>
        </div>
        <div className="Schedule_Frame_Grid1_Btn" onClick={scrollTorecommend}>
          공항 속 새로운 경험하러가기
        </div>
      </div>
    </>
  );
}

export default Schedule_Grid_Green;
