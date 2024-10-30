import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Specifications from './components/Specifications';
import DesignProcess from './components/DesignProcess';
import Team from './components/Team';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Future of Autonomous Document Delivery</h1>
          <p>Experience cutting-edge technology with our Autonomous Document Delivery Robot.</p>
          <button className="hero-button">Learn More</button>
        </div>
      </section>
      <Features />
      <Specifications />
      <DesignProcess />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
