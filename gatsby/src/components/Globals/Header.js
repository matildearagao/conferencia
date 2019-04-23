import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const Header = ({ styleClass, data, img, logo }) => (
  <header className={styleClass} >
    <div className="header__logo-box">
    <Img
          fluid={logo}
          alt="Cinnapan logo"
          className="header__logo"
        />
    </div>
    <div className="container">
      <div className="header__text-box">
        <Img
          fluid={img}
          alt="Enrola-te ao sabor"
          className="header__img"
        />

        <a href="#" className="btn btn--yellow btn--animated">
          Ver Menu
        </a>
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
