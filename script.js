const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4bad84631emshf9abcf9941a6d1cp16a08djsn60fe146b883a",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  const getWeather = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    
    const cityName = document.getElementById("cityName");
    const temp = document.getElementById("temp");
    const temp1 = document.getElementById("temp1");
    const feels_like = document.getElementById("feels_like");
    const humidity = document.getElementById("humidity");
    const humidity2 = document.getElementById("humidity2");
    const min_temp = document.getElementById("min_temp");
    const max_temp = document.getElementById("max_temp");
    const wind_speed = document.getElementById("wind_speed");
    const wind_speed1 = document.getElementById("wind_speed1");
    const wind_degrees = document.getElementById("wind_degrees");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      console.log(data);
      
      cityName.innerHTML = city;
    
      temp.innerHTML = data.temp || "N/A";
      temp1.innerHTML=data.temp || "N/A";
      feels_like.innerHTML = data.feels_like || "N/A";
      humidity.innerHTML = data.humidity || "N/A";
      humidity2.innerHTML = data.humidity || "N/A";
      min_temp.innerHTML = data.min_temp || "N/A";
      max_temp.innerHTML = data.max_temp || "N/A";
      wind_speed.innerHTML = data.wind_speed || "N/A";
      wind_speed1.innerHTML = data.wind_speed || "N/A";
      wind_degrees.innerHTML = data.wind_degrees || "N/A";
      sunrise.innerHTML = data.sunrise || "N/A";
      sunset.innerHTML = data.sunset || "N/A";
    } catch (error) {
      console.error(error);
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const cityInput = document.getElementById("city");
  
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      const city = cityInput.value;
      getWeather(city);
    });
  
    // Initial weather data for Lucknow
    getWeather("Lucknow");
  });
  