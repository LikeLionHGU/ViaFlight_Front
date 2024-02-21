import React, { useState, useEffect } from "react";

function Schedule_Weather() {
  const [Temp, setTemperature] = useState(""); //기온!
  const [Weather_Icon_path, setIconPath] = useState("");

  function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도 정보 추출
    const lon = position.coords.longitude; // 경도 정보 추출

    const url2 = `https://api.weatherapi.com/v1/current.json?q=${lat}%2C${lon}&key=68edd069dfbe4b0fbcf163925241902`;

    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.current.temp_c);
        setIconPath(`https:${data.current.condition.icon}`);
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  //반복 호출 막기 위해서
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);
  return (
    <>
      <img src={Weather_Icon_path} alt="weateher"></img>
      <div>{Temp} °C</div>
    </>
  );
}

export default Schedule_Weather;
