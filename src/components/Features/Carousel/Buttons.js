import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </React.Fragment>
    );
  }
}

export default Buttons;
