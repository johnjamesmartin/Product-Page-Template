import React, { Component } from 'react';

export default class PriceOption extends Component {
  render() {
    const priceFeatures = this.props.features.map(priceFeature => {
      return <p>{priceFeature}</p>;
    });
    return (
      <div
        className="col-sm price-tier-wrapper"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
      >
        <h2 className="price-tier-title">{this.props.title}</h2>
        <h1 className="price-tier-price">{this.props.price}</h1>
        <hr />
        <div className="price-tier-features">{priceFeatures}</div>
        <button className="btn-select">{this.props.selectText}</button>
      </div>
    );
  }
}
