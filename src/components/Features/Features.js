import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import Buttons from './Carousel/Buttons';
import Indicators from './Carousel/Indicators';
import InnerContent from './Carousel/InnerContent';
import data from '../../data';

class Features extends Component {
  render() {
    const Slides = data.features.map(slide => {
      return (
        <FeatureItem
          title={slide.title}
          description={slide.description}
          classStatus={slide.classActive ? 'active' : ''}
          imageAlt={slide.image.alt}
          imageSrc={slide.image.src}
        />
      );
    });

    return (
      <div
        id="features"
        data-aos="zoom-out"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="container-fluid segment-carousel"
      >
        <div id="demo" className="carousel slide" data-ride="carousel">
          <Indicators />
          <InnerContent slides={Slides} />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Features;
