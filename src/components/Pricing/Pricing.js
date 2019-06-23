import React, { Component } from 'react';
import PriceOption from './PriceOption';
import data from '../../data';

class Pricing extends Component {
  render() {
    const priceOptions = data.pricing.arr;
    const options = priceOptions.map(option => {
      return (
        <PriceOption
          title={option.title}
          price={option.price}
          selectText={option.selectText}
          features={option.features}
        />
      );
    });
    return (
      <div className="container-fluid segment" id="pricing">
        <h1
          className="title"
          data-aos="flip-left"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
        >
          {data.pricing.title}
        </h1>
        <p className="subtitle">{data.pricing.description}</p>
        <br />
        <br />
        <div className="container">
          <div className="row col-lg-10 offset-lg-1 guidelines">{options}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
