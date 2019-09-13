import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import SectionLisbonIntro from "../components/Homepage/SectionLisbonIntro"


const Events = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="About Lisbon" logo={data.logo.childImageSharp.fluid}/>
    <main>
    <SectionLisbonIntro lisbonBkg={data.lisbonBkg.childImageSharp.fluid} />

    </main>
  </Layout>
)

export const query = graphql`
{
  logo:file(relativePath: {eq: "ESCLH-logo.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  
  lisbonBkg:file(relativePath: {eq: "lisbon.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
}
`


export default Events
