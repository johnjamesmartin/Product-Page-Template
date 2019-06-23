import React, { Component } from 'react';

class InnerContent extends Component {
  render() {
    return (
      <div className="carousel-inner" id="carousel-inner">
        {this.props.slides}
      </div>
    );
  }
}

export default InnerContent;
