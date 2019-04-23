import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default function SectionDisplayMenu({cinnapanMenu}) {
  return (
    <section className="display">
        <div className="container">
            <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-main heading-main--yellow">Alguns dos nossos Cinnapan</h2>
                <h3 className="heading-sub heading-sub--white">Vai Escolher os teus</h3>
            </div>
            <div className="row">
                <div className="display-wrapper">
                    <Img fluid={cinnapanMenu} className="display-img" alt="cinnapan"/>
                    <Img fluid={cinnapanMenu} className="display-img" alt="cinnapan"/>
                    <Img fluid={cinnapanMenu} className="display-img" alt="cinnapan"/>
                </div>
            </div>
            <Link to="/Menu" className="btn btn--yellow btn--animated">Ver Menu</Link>
        </div>
    </section>
  )
}
