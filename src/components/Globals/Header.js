import React from 'react'
import Img from 'gatsby-image'

export default function Header({logo, styleClass, title}) {
  return (
    <header className={`header ${styleClass}`}>
      <div className="header__logo-box">
        <Img fluid={logo}
          alt="logo"
          className="header__logo"
        />
      </div>
        <div className="header__text">
          <h1>{title}</h1>
        </div>
    </header>
  )
}

  
  Header.defaultProps = {
    title: "About",
    styleClass: "header--about",
  }