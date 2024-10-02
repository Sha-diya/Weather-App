const apikey="ba33775a684eda5d8552e2b07f23d261";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status ==  404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.classList.remove("fa-cloud-rain");
            weatherIcon.classList.add("fa-cloud");
        }
        if(data.weather[0].main == "Clear")
        {
            weatherIcon.classList.remove("fa-cloud-rain");
            weatherIcon.classList.add("fa-cloud-sun");
        }
        if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.classList.remove("fa-cloud-rain");
            weatherIcon.classList.add("fa-cloud");
        }
        if(data.weather[0].main == "Mist")
        {
            weatherIcon.classList.remove("fa-cloud-rain");
            weatherIcon.classList.add("fa-temperature-low");
        }
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
