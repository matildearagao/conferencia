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
                    <h2 className="heading-main u-margin-bottom-small">About ESCLH Conference</h2>
                    <p className="paragraph">The Organising Committee of the 6th Biennal Conference and the Executive Council of the ESCLH are pleased to call for papers for the upcoming conference to be held. The main theme picks up threads of thought from the earlier ESCLH conferences in Valencia (2010), Amsterdam (2012), Macerata (2014), Gdansk (2016), Paris (2018) to explore what roles Professions and Methods have played, and continue to play, within comparative legal history. Offers of papers should be submitted by 15 November 2019 (details below).</p>
                    <br />
                    <p className="paragraph">The conference will focus on the issue of legal professions and their methods across Europe and the world. Judges, lawyers and other legal professions have different developed differently from country to country and even now, we can find substantial differences in training, method, role and work. Legal methodology, including the motivation of judicial decisions, lawyerly style and method of arguing cases needs to be studied in historical and comparative perspective to understand where we are now, and where we might be heading.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
