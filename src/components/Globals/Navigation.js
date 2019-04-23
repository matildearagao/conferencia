import React from 'react'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
   <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">
                &nbsp;
            </span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                  <Link to="/" className="navigation__link">Home</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/about" className="navigation__link">About Us</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/events" className="navigation__link">Events</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/menu" className="navigation__link">Menu</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/contacts" className="navigation__link">Contacts</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
