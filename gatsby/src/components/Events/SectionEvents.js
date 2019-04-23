import React from "react"
import { Link } from 'gatsby'

export default function SectionEvents() {
  return (
    <section className="section-events">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-main"> Eventos à medida</h2>
        <p className="paragraph">
          <div className="30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            blanditiis consequatur. Harum sunt excepturi illo voluptatem
            obcaecati asperiores facilis totam fugiat voluptas sint eius sed
            aliquam quod, amet nisi deleniti.
          </div>
        </p>
      </div>
      <div className="row events-icons">
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Ingredientes de Qualidade</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, non ratione sunt aspernatur repellendus ducimus.
            </p>
          </div>
        </div>
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Ingredientes de Qualidade</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, non ratione sunt aspernatur repellendus ducimus.
            </p>
          </div>
        </div>
        <div className="col-10 col-md-4 u-center-col">
          <div className="square" />
          <div className="section-process__text">
            <h5 className="title-bold">Ingredientes de Qualidade</h5>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, non ratione sunt aspernatur repellendus ducimus.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="cta__secondary">
            <h3 className="heading-sub">Fala connoscos</h3>
            <Link to="/Menu" className="btn btn--yellow btn--animated">
              Ver Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
