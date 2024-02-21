import React, { useState } from "react";

/*���� ApI ���� ȣ�� Ƚ�� ������ �ִ�! (�д� 60ȸ) */
function Schedule_Weather() {
  const [Weather, setWeather] = useState("");
  const [IconPath, setIconPath] = useState("");

  // ���� ���� ȣ��
  const API_KEY = "73f3a7c92991adcee8b72c74b5d49a50";

  function onGeoOk(position) {
    // Javascript�� props, ��ü �����͸� �޾��ش�.
    const lat = position.coords.latitude; // ���� ���� ����
    const lon = position.coords.longitude; // �浵 ���� ����
    //console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; // ���� ������ ������ �ִ� API �ּ� ����

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setWeather(data.weather[0].main);
        // setIconPath(
        //   `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // );
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // geolocation �Լ��� ���ؼ� ���� (��ġ ������ �޾ƿ� �� ����)

  return (
    <>
      <div>weather: {Weather}</div>
      <img src={IconPath} alt="weateher"></img>
    </>
  );
}

export default Schedule_Weather;
