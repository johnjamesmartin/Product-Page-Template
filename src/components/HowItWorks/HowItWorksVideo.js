import React, { Component } from 'react';

export default class HowItWorksVideo extends Component {
  render() {
    return (
      <div>
        <iframe
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="video-iframe"
          data-aos="fade-up"
          data-aos-duration="1000"
          frameBorder="0"
          id="video"
          src={this.props.url}
        />
      </div>
    );
  }
}
