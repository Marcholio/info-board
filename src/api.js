import axios from 'axios';
import { Map } from 'immutable';

require('dotenv').config({ path: `${__dirname}/../.env` });

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

let cache = Map({});

const getCurrentWeather = cityId => {
  if (
    cache.getIn([cityId, 'time']) &&
    new Date().getTime() - cache.getIn([cityId, 'time']) < 15 * 60 * 1000
  ) {
    return Promise.resolve(cache.getIn([cityId, 'weather']));
  }
  return axios
    .get(`${weatherUrl}?APPID=${weatherKey}&id=${cityId}&units=metric`)
    .then(res => {
      if (res.status === 200) {
        cache = cache
          .setIn([cityId, 'weather'], res.data)
          .setIn([cityId, 'time'], new Date().getTime());
        return res.data;
      }
      throw new Error('Error while fetching weather data');
    });
};

export const getHongKongWeather = () => getCurrentWeather(1819730);
export const getEspooWeather = () => getCurrentWeather(660158);

export default { getHongKongWeather, getEspooWeather };
