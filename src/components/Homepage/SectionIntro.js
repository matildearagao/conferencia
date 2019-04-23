import React from "react"
import Img from "gatsby-image"
import { Link } from 'gatsby'

export default function SectionIntro({ chocolateBar, cinnamonRoll, sun }) {
  return (
    <section className="section-intro">
      <div className="container">
        <div className="u-center-text u-margin-bottom-small">
          <h2 className="heading-main">Feitos à Mão. Frescos todos os dias.</h2>
          <h3 className="heading-sub">Artesanalmente Deliciosos</h3>
        </div>
        <div className="row">
          <div className="circle-container">
            <div className="circle">
              <Img fluid={chocolateBar} alt="ingredients" />
            </div>
            <div className="circle">
              <Img fluid={cinnamonRoll} alt="cinnamon rolls" />
            </div>
            <div className="circle">
              <Img fluid={sun} alt="sun icon" />
            </div>
          </div>
          <div className="btn-wrapper">
            <Link to="/contacts" className="btn btn--white-stroke btn--animated">
              Contacta-nos
            </Link>
            <Link to="/Menu" className="btn btn--white btn--animated">
              Ver Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
