import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default function SectionDisplayMenu({lisbonBkg}) {
  return (
    <section className="display">
        <div className="container">
            <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-main ">About Lisbon</h2>
                <h3 className="heading-sub">Beautiful city by the sea</h3>
            </div>
            <div className="row">
                    <Img fluid={lisbonBkg} className="display-img" alt="lisbon"/>
                    <p>Lisbon offers many accommodation possibilities ranging from five-star hotels, through smaller hotels and private rooms to beds in youth and student hostels. </p>
<p>For some postgraduates the University of Lisbon, might be able to offer cheaper accommodation in student dormitories, and anything available will be advertised in due course.</p>
            </div>
            <Link to="/lisbon" className="btn btn--primary btn--animated">
              See more of Lisbon
            </Link>        </div>
    </section>
  )
}
