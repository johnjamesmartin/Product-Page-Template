import React, { Component } from 'react';
import HowItWorksStep from './HowItWorksStep';
import HowItWorksVideo from './HowItWorksVideo';
import data from '../../data';

class HowItWorks extends Component {
  render() {
    const stepsCp = data.steps.arr;
    const stepImage = faClass => {
      return (
        <div className="icon">
          <i className={`fas fa-${faClass}`} />
        </div>
      );
    };

    for (let i = 0; i < stepsCp.length; i++) {
      if (stepsCp[i].image[0] === 1) {
        stepsCp[i].image = stepImage(stepsCp[i].image[1]);
      }
    }

    const howItWorksSteps = stepsCp.map((step, index) => {
      return (
        <HowItWorksStep
          title={step.title}
          image={step.image}
          description={step.description}
          fadeDuration={(index + 1) * 1000}
        />
      );
    });

    return (
      <div
        id="how-it-works"
        className="container-fluid segment segment-howitworks"
      >
        <h1
          className="title"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {data.steps.title}
        </h1>
        <p className="subtitle">{data.steps.description}</p>
        <br />
        <br />
        <div className="container">
          <div className="row">{howItWorksSteps}</div>
        </div>
        <br />
        <HowItWorksVideo url={data.steps.videoUrl} />
      </div>
    );
  }
}

export default HowItWorks;
