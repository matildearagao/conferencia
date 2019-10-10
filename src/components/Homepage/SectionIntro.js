import React from "react"
import { Link } from 'gatsby'

export default function SectionIntro() {
  return (
    <section className="section-intro">
      <div className="container">
        <div className="u-center-text u-margin-bottom-small">
          <h2 className="heading-main">The conference</h2>
          <h3 className="heading-sub">Judges, lawyers and other legal professions</h3>
        </div>
        <div className="row">
          <p> The conference will focus on the issue of legal professions and their
methods across Europe and the world. Judges, lawyers and other legal professions
have different developed differently from country to country and even now, we can
find substantial differences in training, method, role and work.</p>
<p>Legal methodology,
including the motivation of judicial decisions, lawyerly style and method of
arguing cases needs to be studied in historical and comparative perspective to
understand where we are now, and where we might be heading.</p>
          <div className="btn-wrapper">
        
            <Link to="/papers" className="btn btn--primary btn--animated">
              Submit Paper
            </Link>
            {/* <Link to="/speakers" className="btn btn--primary btn--animated">
              Speakers
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
