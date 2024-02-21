import React, { useState } from "react";

function Schedule_Clock() {
  //���� �����ϴ� ����
  const [IntervalTime, setIntervalTime] = useState("");

  // �ð� ����
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

  // useState �̿�, ������ �� ù ���� nowTime return �� ���
  const [Time, setTime] = useState(nowTime);

  // 1�ʸ��� clock�� ���� �ٽ� ��� �� ������ (setClock �̿�)
  setInterval(() => setTime(nowTime), 60000);

  // getclock();
  // 1�� ���� �Լ��� �ݺ� ȣ��; (����, mili-second)
  // setInterval(getclock, 600000);

  return (
    <>
      <div>{Time}</div>
    </>
  );
}

export default Schedule_Clock;
