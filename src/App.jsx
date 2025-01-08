import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import CallForAction from './components/CallForAction';

const App = () => {
  useEffect(() => {
    document.title = "PharmaChain";
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="call-for-action">
          <CallForAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
