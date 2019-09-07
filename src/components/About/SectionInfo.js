import React from 'react'
import Img from 'gatsby-image'

export default function SectionInfo({direito, styleClass}) {
  return (
    <section className="section-info">
        <div className="container">
            <div className="section-info__wrapper">
                <div className={`col-10 col-md-6 ${styleClass}`}>
                    <Img fluid={direito} alt="" className="section-info__img-bw"/>
                </div>
                <div className="col-10 col-md-6">
                    <h2 className="heading-main u-margin-bottom-small">Sobre a conferência</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod quisquam earum assumenda facilis provident, voluptatem voluptatum cum ipsa aliquam mollitia in impedit aut repellendus consequatur voluptatibus! Ducimus, commodi? Explicabo.</p>
                    <br />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod quisquam earum assumenda facilis provident, voluptatem voluptatum cum ipsa aliquam mollitia in impedit aut repellendus consequatur voluptatibus! Ducimus, commodi? Explicabo.</p>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod quisquam earum assumenda facilis provident, voluptatem voluptatum cum ipsa aliquam mollitia in impedit aut repellendus consequatur voluptatibus! Ducimus, commodi? Explicabo.</p>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod quisquam earum assumenda facilis provident, voluptatem voluptatum cum ipsa aliquam mollitia in impedit aut repellendus consequatur voluptatibus! Ducimus, commodi? Explicabo.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
