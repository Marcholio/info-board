import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Icon from 'react-weathericons';
import { Map } from 'immutable';
import {
  getHongKongWeather,
  getEspooWeather,
  getEspooForecast,
  getHongKongForecast,
} from '../../api';
import getIcon from './iconMapping';
import './styles.css';

const createWeatherInfo = (data, name, timezone) => (
  <div className="country">
    <h1>{name}</h1>
    <Clock format="HH:mm:ss" ticking timezone={timezone} />
    <i
      className={`wi ${getIcon(
        data.weather[0].id.toString(),
        data.weather[0].icon.indexOf('d') >= 0,
      )} mainweather`}
    />
    <p className="temp">{data.temp}&#x2103;</p>
    <div className="row">
      <div className="row humidity">
        <Icon name="humidity" />
        <p>{data.humidity}%</p>
      </div>
      <div className="row wind">
        <i className={`wi wi-wind from-${data.wind.deg}-deg`} />
        <p>{data.wind.speed} m/s</p>
      </div>
    </div>
    <div className="row forecasts">
      {data.forecasts.keySeq().map(date => (
        <div key={`${name}${date}`} className="col">
          <h4>{date}</h4>
          <i className={`wi ${data.forecasts.getIn([date, 'icon'])}`} />
          <p>
            {data.forecasts.getIn([date, 'max'])}&#x2103; /{' '}
            {data.forecasts.getIn([date, 'min'])}&#x2103;
          </p>
        </div>
      ))}
    </div>
  </div>
);

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    setInterval(
      () =>
        Promise.all([
          getEspooWeather(),
          getHongKongWeather(),
          getEspooForecast(),
          getHongKongForecast(),
        ]).then(res => {
          const forecasts = res.slice(2, 4).map(r => {
            let forecastMap = Map({});
            r.list.forEach(entry => {
              const date = `${entry.dt_txt
                .split(' ')[0]
                .split('-')
                .slice(1)
                .reverse()
                .join('.')}.`;
              if (
                !forecastMap.getIn([date, 'min']) ||
                entry.main.temp_min < forecastMap.getIn([date, 'min'])
              ) {
                forecastMap = forecastMap.setIn(
                  [date, 'min'],
                  Math.round(entry.main.temp_min),
                );
              }
              if (
                !forecastMap.getIn([date, 'max']) ||
                entry.main.temp_max > forecastMap.getIn([date, 'max'])
              ) {
                forecastMap = forecastMap.setIn(
                  [date, 'max'],
                  Math.round(entry.main.temp_max),
                );
              }
              if (!forecastMap.getIn([date, 'icon'])) {
                forecastMap = forecastMap.setIn(
                  [date, 'icon'],
                  getIcon(entry.weather[0].id.toString(), true),
                );
              }
            });
            return forecastMap;
          });

          const data = res.slice(0, 2).map(r => ({
            temp: r.main.temp.toFixed(1),
            humidity: r.main.humidity,
            wind: r.wind,
            weather: r.weather,
          }));
          this.setState({
            espoo: Object.assign({}, data[0], { forecasts: forecasts[0] }),
            hongkong: Object.assign({}, data[1], { forecasts: forecasts[1] }),
          });
        }),
      1000,
    );
  }

  render() {
    return (
      <div className="weather">
        {this.state.espoo
          ? createWeatherInfo(this.state.espoo, 'Espoo', 'Europe/Helsinki')
          : null}
        {this.state.hongkong
          ? createWeatherInfo(
              this.state.hongkong,
              'Hong Kong',
              'Asia/Hong_Kong',
            )
          : null}
      </div>
    );
  }
}
export default WeatherView;
