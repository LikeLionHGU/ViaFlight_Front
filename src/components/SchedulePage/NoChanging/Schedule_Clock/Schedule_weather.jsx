import React, { useState } from "react";

/*날씨 ApI 무료 호출 횟수 제한이 있다! (분당 60회) */
function Schedule_Weather() {
  const [Weather, setWeather] = useState("");
  const [IconPath, setIconPath] = useState("");

  // 날씨 정보 호출
  const API_KEY = "73f3a7c92991adcee8b72c74b5d49a50";

  function onGeoOk(position) {
    // Javascript의 props, 객체 데이터를 받아준다.
    const lat = position.coords.latitude; // 위도 정보 추출
    const lon = position.coords.longitude; // 경도 정보 추출
    //console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; // 날씨 정보를 받을수 있는 API 주소 형식

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // setWeather(data.weather[0].main);
        // setIconPath(
        //   `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // );
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // geolocation 함수를 통해서 현재 (위치 정보를 받아올 수 있음)

  return (
    <>
      <div>weather: {Weather}</div>
      <img src={IconPath} alt="weateher"></img>
    </>
  );
}

export default Schedule_Weather;
