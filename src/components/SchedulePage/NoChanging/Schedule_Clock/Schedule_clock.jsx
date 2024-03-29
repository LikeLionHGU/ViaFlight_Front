import React, { useState } from "react";

function Schedule_Clock() {
  const nowTime = () => {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let letter = "AM";

    /*12시간 환산 식*/
    if (hour > 12) {
      hour -= 12;
      if (hour !== 24) letter = "PM";
    }

    if (hour === 0) {
      hour = 12;
      letter = "AM";
    }

    /*2자리 표기 시간 (error) */
    let calHour = hour < 10 ? "0" + hour.toString() : hour.toString();
    let calMin = minute < 10 ? "0" + minute.toString() : minute.toString();

    return `${calHour} : ${calMin} ${letter}`;
  };

  // useState 이용, 랜더링 후 첫 값은 nowTime return 값 사용
  const [Time, setTime] = useState(nowTime);

  // 1분마다 clock의 값을 다시 계산 후 랜더링 (setClock 이용)
  setInterval(() => setTime(nowTime), 60000);

  return <div>{Time}</div>;
}

export default Schedule_Clock;
