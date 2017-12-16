import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Icon from 'react-weathericons';
import { getHongKongWeather, getEspooWeather } from '../../api';
import getIcon from './iconMapping';
import './styles.css';

const createWeatherInfo = (data, name, timezone) => (
  <div className="country">
    <h1>{name}</h1>
    <Clock format="HH:mm:ss" ticking timezone={timezone} />
    <i className={`wi ${getIcon(data.weather)}`} />
    <p className="temp">{data.temp} &#x2103;</p>
    <div className="row">
      <div className="row">
        <Icon name="humidity" />
        <p>{data.humidity}%</p>
      </div>
      <div className="row">
        <i className={`wi wi-wind from-${data.wind.deg}-deg`} />
        <p>{data.wind.speed} m/s</p>
      </div>
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
        Promise.all([getEspooWeather(), getHongKongWeather()]).then(res => {
          const data = res.map(r => ({
            temp: r.main.temp.toFixed(1),
            humidity: r.main.humidity,
            wind: r.wind,
            weather: r.weather,
          }));
          this.setState({
            espoo: data[0],
            hongkong: data[1],
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
