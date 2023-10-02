// App.js
import React from 'react';
import './App.css';
import carsData from './data';
import CarSearch from '../src/component/CarSearch';

function App() {
  return (
    <div className="App">
      <CarSearch cars={carsData} />
    </div>
  );
}

export default App;
