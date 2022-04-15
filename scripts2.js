const button = document.getElementById('show-weather')
const zip_code = document.getElementById('zipcode')
const city = document.getElementById('city-name')
const weather = document.getElementById('weather')
const wind = document.getElementById('temperature')
const lat = document.getElementById('lat')
const lon = document.getElementById('lon')
const weatherMain = document.getElementById('weather-main')
const weatherDesc = document.getElementById('weather-desc')
const windSpeed = document.getElementById('wind-speed')
const windDegree = document.getElementById('wind-degree')
const tempCurrent = document.getElementById('temp-current')
const tempMin = document.getElementById('temp-min')
const tempMax = document.getElementById('temp-max')
const humidity = document.getElementById('humidity')

button.addEventListener('click', () => Show_weather());

function Show_weather() {
  let zipcode = zip_code.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=1fbc3f2c42db25e5d9e24d38abefc14f`)
    .then(response => response.json())
    .then(data => {
      city.innerHTML = data.name
      lat.innerHTML = data.coord.lat
      lon.innerHTML = data.coord.lon
      weatherMain.innerHTML = data.weather[0].main
      weatherDesc.innerHTML = data.weather[0].description
      windSpeed.innerHTML = data.wind.speed
      windDegree.innerHTML = data.wind.deg
      tempCurrent.innerHTML = data.main.temp
      tempMin.innerHTML = data.main.temp_min
      tempMax.innerHTML = data.main.temp_max
      humidity.innerHTML = data.main.humidity
    })


}
