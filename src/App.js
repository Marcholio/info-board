import React from 'react';
import Carousel from 'nuka-carousel';
import WeatherView from './views/Weather';
import './App.css';

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
