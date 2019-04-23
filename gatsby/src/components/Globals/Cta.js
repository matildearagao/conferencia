import React from 'react'
import { Link } from "gatsby"

export default function Cta() {
  return (
     <section className="cta">
        <div className="cta-box">
            <div className="cta-heading">
                <h3 className="heading-sub heading-sub--yellow">Faz a tua Encomenda</h3>
                <p className="cta-heading--sub">Disponíveis para eventos, catering e encomendas</p>
            </div>
            <div>
            <Link to="/Contacts" className="btn btn--yellow btn--animated">Contacta-nos</Link>
            </div>
        </div>
    </section>
  )
}
