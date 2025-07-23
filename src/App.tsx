import React from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhoAmI from './components/WhoAmI';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <HeaderNavbar />
      <Hero />
      <About />
      <Services />
      <WhoAmI />
      <Contact />
    </div>
  );
}

export default App;