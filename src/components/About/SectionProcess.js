import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


export default function SectionProcess({ photo1, photo2, photo3 }) {
  return (
    <section className="section-process">
      <div className="container">
        <div className="u-center-text u-margin-bottom-small">
          <h2 className="heading-main heading-main--white u-margin-bottom-small">
            Os nossos Oradores Convidados{" "}
          </h2>
          <p className="paragraph paragraph--white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi
            maxime quos voluptate provident labore voluptatem amet nobis, ipsum
            nihil.
          </p>
        </div>
        <div className="row u-center-text ">
          <div className="section-process__wrapper">
            <div className="col-10 col-md-4 u-center-col">
              <Img
                fluid={photo1}
                alt="speaker"
                className="circle circle--photo"
              />
              <div className="section-process__text">
                <h5 className="title-bold title-bold--white">Nome Apelido</h5>
                <p className="paragraph paragraph--white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, non ratione sunt aspernatur repellendus ducimus.
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Saber mais
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
                <h5 className="title-bold title-bold--white">Nome Apelido</h5>
                <p className="paragraph paragraph--white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, non ratione sunt aspernatur repellendus ducimus.
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Saber mais
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
                <h5 className="title-bold title-bold--white">Nome Apelido</h5>
                <p className="paragraph paragraph--white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, non ratione sunt aspernatur repellendus ducimus.
                </p>
                <Link to="/Menu" className="btn btn--white btn--animated">
                 Saber mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
