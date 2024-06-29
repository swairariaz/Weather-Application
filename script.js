async function getWeather() {
    const apiKey = '9e502fd9f9bbf7772ef99bfb5e7c79e9'; // my Api key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;

            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const weatherIcon = document.getElementById('weatherIcon');
            weatherIcon.src = iconUrl;
            weatherIcon.style.display = 'block';

            document.getElementById('errorMessage').style.display = 'none';
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('Error fetching weather data');
        console.error('Error fetching weather data:', error);
    }
}

function showError(message) {
    document.getElementById('cityName').innerText = '';
    document.getElementById('temperature').innerText = '';
    document.getElementById('description').innerText = '';
    document.getElementById('weatherIcon').style.display = 'none';

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}
