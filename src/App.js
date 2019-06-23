import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Features />
        <HowItWorks />
        <Pricing />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
