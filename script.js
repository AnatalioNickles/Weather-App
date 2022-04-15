const zip_code = document.getElementById('zipcode')
const City = document.getElementById('city-name')
const wind = document.getElementById('temperature')
const lat=document.getElementById('lat')
const lon =document.getElementById('lon')
const main =document.getElementById('weather-main')
const button=document.getElementById('show-weather')
const Description =document.getElementById('weather-desc')
const speed =document.getElementById('wind-speed')
const degree =document.getElementById('wind-degree')
const temp_current =document.getElementById('temp-current')
const temp_min =document.getElementById('temp-min')
const temp_max =document.getElementById('temp-max')
const temp_humid =document.getElementById('humidity')

button.addEventListener('click', ()=> Show_weather());
function Show_weather(){
  let zipcode = zip_code.value
  fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=50172642005b6454fb7d983ee4a3d9f6`)
  .then(response => response.json())
  .then(data=>{
  lat.innerHTML=data.coord.lat
  lon.innerHTML=data.coord.lon
  Description.innerHTML=data.weather[0].description
  main.innerHTML=data.weather[0].main
  speed.innerHTML=data.wind.speed
  degree.innerHTML=data.wind.deg
  temp_current.innerHTML=data.main.temp
  temp_min.innerHTML=data.main.temp_min
  temp_max.innerHTML=data.main.temp_max
  temp_humid.innerHTML=data.main.humidity
  City.innerHTML=data.name


})

};
