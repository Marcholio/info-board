import axios from 'axios';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apikey = '20d2278facbb1b28a84365623f5181bf';

const getCurrentWeather = cityId =>
  axios
    .get(`${weatherUrl}?APPID=${apikey}&id=${cityId}&units=metric`)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
      throw new Error('Error while fetching weather data');
    });

export const getHongKongWeather = () => getCurrentWeather(1819730);
export const getEspooWeather = () => getCurrentWeather(660158);

export default { getHongKongWeather, getEspooWeather };
