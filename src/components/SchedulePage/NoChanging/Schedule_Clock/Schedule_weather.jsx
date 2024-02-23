import React, { useState, useEffect } from "react";

import Rainny from "../../../../img/Rain.png";
import Snowy from "../../../../img/Snowy.png";
import Windy from "../../../../img/Windy.png";
import Cloudy from "../../../../img/Cloudy.png";
import OtherCondition from "../../../../img/Other.png";

function Schedule_Weather() {
  const [Temp, setTemperature] = useState(""); //기온!
  const [Weather_Icon_path, setIconPath] = useState("");
  const [Weather_Condition_text, setCondition] = useState("");

  /*날씨 변수*/
  const [Rain, setRain] = useState(false);
  const [Cloud, setCloud] = useState(false);
  const [Snow, setSnow] = useState(false);
  const [Wind, setWind] = useState(false);
  const [Sunny, setSunny] = useState(false);
  const [Other, setOther] = useState(false);

  function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도 정보 추출
    const lon = position.coords.longitude; // 경도 정보 추출

    const url2 = `https://api.weatherapi.com/v1/current.json?q=${lat}%2C${lon}&key=68edd069dfbe4b0fbcf163925241902`;

    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.current.temp_c);
        setIconPath(`https:${data.current.condition.icon}`);
        setCondition(data.current.condition.text);
      });

    /* 날씨 Icon 적용 */
    if (Weather_Condition_text.includes("rainny"));
    if (Weather_Condition_text.includes("cloudy"));
    if (Weather_Condition_text.includes("snowy"));
    if (Weather_Condition_text.includes("windy"));
    if (Weather_Condition_text.includes("sunny"));
    else {
    }
  }
  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  //반복 호출 막기 위해서
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  /* 날씨 text에 따라서 보이는 이모티콘 연산 */

  return (
    <>
      <img src={Weather_Icon_path} alt="weateher"></img>
      <div>{Temp} °C</div>
    </>
  );
}

export default Schedule_Weather;
