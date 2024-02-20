import React from "react";

// 시차 계산 (UTC 기준 시간으로 계산)
// idea, 한국은 UTC -9 h (-: 빠르 다는 것)
// get. Date으로 현지 UTC 값을 한국 값과 비교 연산한 시간을 반환

function Schedule_Interval() {
  const KorUTC = -540;
  const LocalUTC = new Date().getTimezoneOffset();
  const TimeInterval = (LocalUTC - KorUTC) / 60;
  let letter = "+";

  if (TimeInterval < 0) letter = "-";
  else {
    letter = "+";
  }

  return (
    <>
      <div className="Time">
        {letter}
        {TimeInterval} hr
      </div>
    </>
  );
}

export default Schedule_Interval;
