import React from 'react';
import Carousel from 'nuka-carousel';
import WeatherView from './views/Weather';
import './App.css';

const App = () => (
  <div className="App">
    <Carousel autoplay wrapAround decorators={[]}>
      <WeatherView />
    </Carousel>
  </div>
);

export default App;
