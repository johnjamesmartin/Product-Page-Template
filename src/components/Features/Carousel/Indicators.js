import React, { Component } from 'react';

class Indicators extends Component {
  render() {
    return (
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active" />
        <li data-target="#demo" data-slide-to="1" />
        <li data-target="#demo" data-slide-to="2" />
      </ul>
    );
  }
}

export default Indicators;
