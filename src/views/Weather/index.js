import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { getHongKongWeather, getEspooWeather } from '../../api';
import './styles.css';

const createWeatherInfo = (data, name, timezone) => (
  <div className="country">
    <h1>{name}</h1>
    <Clock format="HH:mm:ss" ticking timezone={timezone} />
    <p className="temp">{data.temp} &#x2103;</p>
    <div className="row">
      <p className="humidity">{data.humidity} %</p>
      <p className="wind">{data.wind.speed} m/s</p>
    </div>
  </div>
);

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = { hongkong: { wind: {} }, espoo: { wind: {} } };
  }

  componentWillMount() {
    setInterval(
      () =>
        Promise.all([getEspooWeather(), getHongKongWeather()]).then(res => {
          const data = res.map(r => ({
            temp: r.main.temp.toFixed(1),
            humidity: r.main.humidity,
            wind: r.wind,
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
        {createWeatherInfo(this.state.espoo, 'Espoo', 'Europe/Helsinki')}
        {createWeatherInfo(this.state.hongkong, 'Hong Kong', 'Asia/Hong_Kong')}
      </div>
    );
  }
}
export default WeatherView;
