import React from 'react';
//sections
import Hero from './sections/Hero'
import About from './sections/About'
//extra


import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
    </div>
  );
}

export default App;
