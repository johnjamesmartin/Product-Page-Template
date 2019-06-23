import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="container-fluid">
        <hr />
        <footer>
          By John for&nbsp;
          <a
            target="_blank"
            href="https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page/"
          >
            Organization
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
