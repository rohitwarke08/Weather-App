// Data taken from https://home.openweathermap.org/api_keys 
const apiKey = "32adb9e0fbeb41e97d701748b3b2644c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIocn = document.querySelector(".weather-iocn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/per";

        if (data.weather[0].main == "Clouds") {
            weatherIocn.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIocn.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIocn.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIocn.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIocn.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


