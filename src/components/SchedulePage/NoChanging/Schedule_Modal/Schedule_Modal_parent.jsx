import React, { useEffect, useState } from "react";
import Schedule_Modal from "./Schedule_Modal";

/*modal�� props �Ѱ��ִ� test component �Դϴ�*/

function Schedule_Modal_parent() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({}); // {} ��ü ���·� �����Ͱ� ���� []�� �ƴ� {}���� �ޱ�

  function getAirport() {
    const url = `https://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.layoverAirport.layoverAirportEngName);
        // # ������ �������� solution1.
        setAirport(data.layoverAirport); // point! ������ִ� ��ü�� �����ϴ� ��!
        // url2 ��� �迭 inform,
      });
  }

  useEffect(() => {
    getAirport();
  }, []);

  console.log(infoAirport);

  return (
    <div className="Airportname">
      {/* <Practice
            layoverAirportEngName={infoAirport.layoverAirportEngName}
            wifi={infoAirport.wifi}
            taxiOutAirport={infoAirport.taxiOutAirport}
          ></Practice> */}

      <Schedule_Modal
        showerFacilities={infoAirport.showerFacilities}
      ></Schedule_Modal>
    </div>
  );
}

export default Schedule_Modal_parent;
