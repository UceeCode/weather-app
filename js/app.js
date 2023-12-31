let apiKey = '78459cfa076a474eb1883105230611';
let searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;
    if (location) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
        .then((response) => response.json())
        .then((data) => {
            let weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2 class="name"><i class="fa-solid fa-earth-americas circle"></i>${data.location.name}, ${data.location.country}</h2>
                <p class="h-rain">${data.current.condition.text}<i class="fa-solid fa-cloud-showers-heavy rain"></i></p>
                <p class="temp">Temperature: ${data.current.temp_c}°C<i class="fa-solid fa-temperature-three-quarters rain"></i></p>
                <p class="hum">Humidity: ${data.current.humidity}%<i class="fa-solid fa-wind rain"></i></p>
                <p class = 'last'>Last Updated: ${data.current.last_updated}%</p>
            `
        }).catch((error) => {
            console.log('error fetching data', error);
        }).finally(() => {
            locationInput.value = '';
        })
    }
})
