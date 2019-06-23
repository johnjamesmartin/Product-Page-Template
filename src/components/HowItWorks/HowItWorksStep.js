import React, { Component } from 'react';

export default class HowItWorksStep extends Component {
  render() {
    return (
      <div
        className="col-sm how-it-works-wrapper guidelines"
        data-aos="fade-up"
        data-aos-duration={this.props.fadeDuration}
      >
        <h2 className="how-it-works-step">{this.props.title}</h2>
        {this.props.image}
        <p className="how-it-works-description">{this.props.description}</p>
      </div>
    );
  }
}
