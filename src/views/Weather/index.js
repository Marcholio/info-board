import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { getHongKongWeather, getEspooWeather } from '../../api';
import './styles.css';

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = { hk: {} };
  }

  componentWillMount() {
    console.log('moro');
    getHongKongWeather().then(res => {
      this.setState({ hk: { temp: res.main.temp } });
    });
  }

  render() {
    return (
      <div className="weather">
        <div id="hongkong">
          <Clock format="HH:mm:ss" ticking timezone="Asia/Hong_Kong" />
          <p>{this.state.hk.temp}</p>
        </div>
        <div id="home">
          <Clock format="HH:mm:ss" ticking />
        </div>
      </div>
    );
  }
}
export default WeatherView;
