const apiKey = '3f71e73ce2cd017bc02bfad723f4d270';

const latitude = 44.34;
const longitude = 10.99;

export const getForecastWeather = () => {
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Error: ${res.status}`)
            }
        });
        return weatherApi;
}
