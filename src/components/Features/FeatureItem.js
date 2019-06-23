import React, { Component } from 'react';
import './Features.css';

class FeatureItem extends Component {
  render() {
    return (
      <div className={`carousel-item ${this.props.classStatus}`}>
        <img
          alt={this.props.imageAlt}
          height="500"
          src={this.props.imageSrc}
          width="1100"
        />
        <div className="carousel-caption">
          <img src="https://i.ibb.co/WPpbrvJ/DbreGyp.png" className="logo" />
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default FeatureItem;
