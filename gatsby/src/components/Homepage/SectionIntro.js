import React from "react"

export default function SectionIntro() {
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
              <img
                src="../img/chocolate-bar.png"
                width="100"
                alt="ingredients"
              />
            </div>
            <div className="circle">
              <img
                src="../img/cinnamon-roll.png"
                width="100"
                alt="ingredients"
              />
            </div>

            <div className="circle">
              <img src="../img/sun.png" width="100" alt="ingredients" />
            </div>
          </div>
          <div className="btn-wrapper">
            <a href="#" className="btn btn--white-stroke btn--animated">
              Contacta-nos
            </a>
            <a href="#" className="btn btn--white btn--animated">
              Ver Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
