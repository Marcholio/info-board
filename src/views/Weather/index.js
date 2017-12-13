import React from 'react';
import Clock from 'react-live-clock';
import './styles.css';

const WeatherView = () => (
  <div className="weather">
    <div id="hongkong">
      <Clock format="HH:mm:ss" ticking timezone="Asia/Hong_Kong" />
    </div>
    <div id="home">
      <Clock format="HH:mm:ss" ticking />
    </div>
  </div>
);

export default WeatherView;
