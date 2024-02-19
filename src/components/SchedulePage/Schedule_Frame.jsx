import React from "react";
import Schedule_Header from "./Schedule_Header";
import Schedule_Banner from "./Schedule_Banner";
import Schedule_Grid_Green from "./Schedule_Grid_Green";
import Schedule_Grid_Black from "./Schedule_Grid_Black";

// 반응형 요소들은 각 부분에 해당하는 파일에 넣어 주세요!
function Schedule_Frame() {
  return (
    <div>
      <Schedule_Header />
      <Schedule_Banner />
      <Schedule_Grid_Green />
      <Schedule_Grid_Black />
    </div>
  );
}

export default Schedule_Frame;
