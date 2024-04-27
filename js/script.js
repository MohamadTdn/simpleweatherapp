const weatherForm = document.querySelector('#weather-form');
const cityName = document.querySelector('.city-name');
const country = document.querySelector('.country');
const city = document.querySelector('.city');
const status = document.querySelector('.status');
const statusIcon = document.querySelector('i');
const minTemp = document.querySelector('.temp');
const maxTemp = document.querySelector('.max-temp');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const cityData = document.querySelector('.city-data');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const weekDay = document.querySelector('.week-day');

const getCityWeather = (event) => {
    event.preventDefault();

    console.log(cityName.value);

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=70ab4a111d0b7775c63ce389ad6764ed')
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            cityData.style.cssText = 'display: block';
            city.innerHTML = data.name;
            country.innerHTML = data.sys.country;

            let date = new Date();

            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

            weekDay.innerHTML = weekDays[date.getDay()];
            day.innerHTML = date.getDate();
            month.innerHTML = months[date.getMonth()];
            year.innerHTML = date.getFullYear();

            status.innerHTML = data.weather[0].main;
            if (data.weather[0].main === 'Snow') {
                statusIcon.className = "bi bi-snow";
            } else if (data.weather[0].main === 'Clouds') {
                statusIcon.className = "bi bi-cloud";
            } else if (data.weather[0].main === 'Clear') {
                statusIcon.className = "bi bi-brightness-high-fill";
            }

            minTemp.innerHTML = data.main.temp_min;
            maxTemp.innerHTML = data.main.temp_max;
            humidity.innerHTML = data.main.humidity;
            windSpeed.innerHTML = data.wind.speed;

            cityName.value = '';
        })
        .catch(err => {
            err = new Error('cant get data from api');
            console.error(err);
        })
}

weatherForm.addEventListener('submit', getCityWeather);