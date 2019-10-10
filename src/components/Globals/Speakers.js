import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


export default function Speakers({ photo1, photo2, photo3, btn }) {
  return (
    <section className="section-process">
      <div className="container">
        <div className="u-center-text u-margin-bottom-small">
          <h2 className="heading-main heading-main--white u-margin-bottom-small">
            Our Main Speakers
          </h2>
          <p className="paragraph paragraph--white">
          To be announced soon
          </p>
        </div>
        {/* <div className="row u-center-text u-margin-bottom-medium">
          <div className="section-process__wrapper">
            <div className="col-10 col-md-4 u-center-col">
              <Img
                fluid={photo1}
                alt="speaker"
                className="circle circle--photo"
              />
              <div className="section-process__text">
                <h5 className="title-bold title-bold--white">Name</h5>
                <p className="paragraph paragraph--white">
                 University
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Know More
                </Link>
              </div>
            </div>
            <div className="col-10 col-md-4 u-center-col">
              <Img
                fluid={photo1}
                alt="speaker"
                className="circle circle--photo"
              />
            <div className="section-process__text">
                <h5 className="title-bold title-bold--white">Name</h5>
                <p className="paragraph paragraph--white">
                 University
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Know More
                </Link>
              </div>
            </div>
            <div className="col-10 col-md-4 u-center-col">
              <Img
                fluid={photo1}
                alt="speaker"
                className="circle circle--photo"
              />
             <div className="section-process__text">
                <h5 className="title-bold title-bold--white">Name</h5>
                <p className="paragraph paragraph--white">
                 University
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Know More
                </Link>
              </div>
            </div>
          </div>
        </div>


          
      <div className="row u-center-text ">
        <Link to="/Menu" className="btn btn--white btn--animated">
                  View All Speakers
        </Link>
      </div> */}
        
      </div>
    </section>
  )
}
