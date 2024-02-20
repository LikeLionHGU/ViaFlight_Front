import React from "react";

// ���� ��� (UTC ���� �ð����� ���)
// idea, �ѱ��� UTC -9 h (-: ���� �ٴ� ��)
// get. Date���� ���� UTC ���� �ѱ� ���� �� ������ �ð��� ��ȯ

function Schedule_Interval() {
  const KorUTC = -540;
  const LocalUTC = new Date().getTimezoneOffset();
  const TimeInterval = (LocalUTC - KorUTC) / 60;

  return <div>����: {TimeInterval}</div>;
}

export default Schedule_Interval;
