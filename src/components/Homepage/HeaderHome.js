import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Header = ({ styleClass, logo }) => (
  <header className={styleClass}>
    <div className="header__logo-box">
      <Img fluid={logo} alt="Cinnapan logo" className="header__logo" />
    </div>
    <div className="header__container">
      <div className="header__text-box">
        <h1> Professions and Methods <br /> in Comparative Legal History</h1>
        <h3>1-3 July 2020</h3>

        <em>University of Lisbon, Portugal</em>

<p>The Organising Committee of the 6 th Biennal Conference and the Executive Council of the ESCLH are pleased to call for papers for the upcoming conference to be held. </p>
  <p><strong>Offers of papers should be submitted by 15 November 2019. </strong></p>
        
        <Link to="/about" className="btn btn--white btn--animated">
          See More
        </Link>
        <Link to="/papers" className="btn btn--white btn--animated">
          Submit paper
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  title: "Conferencia",
  styleClass: "header",
}

export default Header
