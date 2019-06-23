import React, { Component } from 'react';
import data from '../../data';

export default class Header extends Component {
  render() {
    const NavbarItemsCp = [];

    for (let i = 0; i < data.navbarItems.length; i++) {
      NavbarItemsCp.push({
        title: data.navbarItems[i],
        href:
          '#' +
          data.navbarItems[i]
            .split(' ')
            .join('-')
            .toLowerCase()
      });
    }

    const NavbarList = NavbarItemsCp.map(item => {
      return (
        <li className="nav-item">
          <a className="nav-link" href={item.href}>
            {item.title}
          </a>
        </li>
      );
    });

    return (
      <header id="header">
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="nav-bar"
        >
          <img
            className="header-img"
            id="header-img"
            src="https://i.ibb.co/WPpbrvJ/DbreGyp.png"
          />
          <ul className="navbar-nav">{NavbarList}</ul>
        </nav>
      </header>
    );
  }
}
