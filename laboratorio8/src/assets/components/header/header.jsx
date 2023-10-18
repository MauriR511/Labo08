import React from 'react';
import nasaLogo from '../../img/nasa.webp';
import './Header.css';

function Header() {
  return (
    <div className="header_container">
    <div className="header__wrapper">
        <a href="#">
          <h1 className="header__title">
            <abbr title="Astronomy Picture of the Day">APOD</abbr>
          </h1>
        </a>
        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            alt="NASA"
            src={nasaLogo}
            className="header__logo"
          />
        </a>
      </div>
      <nav className="navbar">
        <ul className="navbar__list container">
          <li>
            <a href="#" className="navbar__link active">Range</a>
          </li>
          <li>
            <a href="random.html" className="navbar__link">Random</a>
          </li>
          <li>
            <a href="date.html" className="navbar__link">Date</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
