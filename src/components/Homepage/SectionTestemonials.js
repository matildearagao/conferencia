import React from 'react'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function SectionTestemonials() {
  return (
     <section className="testemonials">
        <div className="container">
            <div className="u-center-text u-margin-bottom-small">
                <h2 className="heading-main heading-main--white">O que dizem sobre nós</h2>
                <h3 className="heading-sub heading-sub--white">Muito obrigado a todos</h3>
            </div>
            <div className="row">
                <div className="testemonials-wrapper">
                    <div className="col-10 col-sm-4">
                        <div className="testemonials-box">
                            <p className="testemonials-box-name">Juliana Sanchez</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptates alias ipsa enim repellendus! Architecto voluptatum blanditiis incidunt sapiente iure.</p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-4">
                        <div className="testemonials-box">
                            <p className="testemonials-box-name">Juliana Sanchez</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptates alias ipsa enim repellendus! Architecto voluptatum blanditiis incidunt sapiente iure.</p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-4">
                        <div className="testemonials-box">
                            <p className="testemonials-box-name">Juliana Sanchez</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero voluptates alias ipsa enim repellendus! Architecto voluptatum blanditiis incidunt sapiente iure.</p>
                        </div>
                    </div>
                    <div className="row">
                        <a href="https://www.facebook.com/Cinnapan/?ref=nf" className="testemonials-icon"><FaFacebook className="icon" /></a>
                        <a href="https://www.instagram.com/cinnapan_oficial/" className="testemonials-icon"><FaInstagram className="icon"/></a>
                    </div>
                        <div className="hashtag">#Cinnapan  #EnrolateAoSabor</div>
                    </div>
                </div>
            </div>
    </section>
  )
}
