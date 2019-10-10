import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import Speakers from "../components/Globals/Speakers"


const SpeakersPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      styleClass="header--about"
      title="Speakers"
      logo={data.logo.childImageSharp.fluid}
    />    
    <main>
      <Speakers photo1={data.photo1.childImageSharp.fluid} />
    </main>
  </Layout>
)

export const query = graphql`
{
  imgBckg:file(relativePath: {eq: "imgBckg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  logo:file(relativePath: {eq: "ESCLH-logo-branco.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  photo1:file(relativePath: {eq: "speaker1.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
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
  }
}
`


export default SpeakersPage
