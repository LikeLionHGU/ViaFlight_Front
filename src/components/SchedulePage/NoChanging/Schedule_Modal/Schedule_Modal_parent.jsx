import React, { useEffect, useState } from "react";
import Schedule_Modal from "./Schedule_Modal";

/*modal에 props 넘겨주는 test component 입니다*/

function Schedule_Modal_parent() {
  const viaAirport = localStorage.getItem("viaAirport");
  const arrivalTime = localStorage.getItem("arrivalTime");
  const durationTime = localStorage.getItem("durationTime");

  const [infoAirport, setAirport] = useState({}); // {} 객체 형태로 데이터가 오니 []가 아닌 {}으로 받기

  function getAirport() {
    const url = `https://api.zionhann.shop/app/viaflight/layover-airport?layoverAirportName=${viaAirport}&layoverArrivalTime=${arrivalTime}&layoverTime=${durationTime}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.layoverAirport.layoverAirportEngName);
        // # 데이터 가져오는 solution1.
        setAirport(data.layoverAirport); // point! 담겨져있는 객체를 추출하는 것!
        // url2 경우 배열 inform,
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
