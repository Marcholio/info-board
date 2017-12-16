import React from 'react';
import Carousel from 'nuka-carousel';
import WeatherView from './views/Weather';
import './App.css';
import './weather-icons/css/weather-icons-wind.css';
import './weather-icons/css/weather-icons-wind.min.css';
import './weather-icons/css/weather-icons.css';
import './weather-icons/css/weather-icons.min.css';

const App = () => (
  <div className="App">
    <Carousel
      autoplay
      wrapAround
      decorators={[]}
      dragging={false}
      autoplayInterval={10000}
      speed={2000}
    >
      <WeatherView />
      <p>Moro</p>
    </Carousel>
  </div>
);

export default App;
