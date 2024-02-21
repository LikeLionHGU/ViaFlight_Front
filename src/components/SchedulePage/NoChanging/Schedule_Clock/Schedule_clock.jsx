import React, { useState } from "react";

function Schedule_Clock() {
  const nowTime = () => {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let letter = "AM";

    if (hour > 12) {
      hour -= 12;
      if (hour !== 24) letter = "PM";
    }

    if (hour === 0) {
      hour = 12;
      letter = "AM";
    }
    return `${hour} : ${minute} ${letter}`;
    // return `${now.toLocaleTimeString}`;
  };
  // useState 이용, 랜더링 후 첫 값은 nowTime return 값 사용
  const [Time, setTime] = useState(nowTime);

  // 1초마다 clock의 값을 다시 계산 후 랜더링 (setClock 이용)
  setInterval(() => setTime(nowTime), 60000);

  // setInterval(getclock, 600000);

  return (
    <>
      <div>{Time}</div>
    </>
  );
}

export default Schedule_Clock;
