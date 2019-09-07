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
        <h1> CONFERENCIA NOME</h1>
        <h3>20 de setembro de 2019</h3>

        <em>conferencia details</em>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque eveniet, ab ex illum animi quam itaque odio. Dolore amet at libero unde qui sequi.</p>

        <Link to="/Menu" className="btn btn--white btn--animated">
          Ver Conferência
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  title: "Cinnapan",
  styleClass: "header",
}

export default Header
