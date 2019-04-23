import React from 'react'
import Img from 'gatsby-image'

export default function SectionProcess({chocolateBar, sun, cinnamonRoll}) {
  return (
   <section className="section-process">
        <div className="container">
            <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-main u-margin-bottom-small">O nosso procresso de fabrico artesanal </h2>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi maxime quos voluptate provident labore voluptatem amet nobis, ipsum nihil.</p>
            </div>
            <div className="row u-center-text ">
                <div className="section-process__wrapper">
                    <div className="col-10 col-md-4 u-center-col">
                        <div className="circle circle--photo circle--photo-1"></div>
                        <div className="circle circle--small">
                            <Img fluid={chocolateBar} alt="ingredients" />
                        </div>
                        <div className="section-process__text">
                            <h5 className="title-bold">Ingredientes de Qualidade</h5>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non ratione sunt aspernatur repellendus ducimus.</p>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 u-center-col">
                        <div className="circle circle--photo circle--photo-1"></div>
                        <div className="circle circle--small">
                             <Img fluid={cinnamonRoll} alt="ingredients" />
                        </div>
                        <div className="section-process__text">
                            <h5 className="title-bold">Ingredientes de Qualidade</h5>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non ratione sunt aspernatur repellendus ducimus.</p>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 u-center-col">
                        <div className="circle circle--photo circle--photo-1"></div>
                        <div className="circle circle--small">
                            <Img fluid={sun} alt="ingredients" />
                        </div>
                        <div className="section-process__text">
                            <h5 className="title-bold">Ingredientes de Qualidade</h5>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, non ratione sunt aspernatur repellendus ducimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
