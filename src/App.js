import React from 'react';
//sections
import Hero from './sections/Hero'
import About from './sections/About'
//extra


import './scss/app.scss';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
