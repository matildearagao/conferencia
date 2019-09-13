import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import SectionInfo from "../components/About/SectionInfo"
import Speakers from "../components/Globals/Speakers"

const AboutPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`ESCLH `, `law conference`]} />
    <Header styleClass="header--about" title="6th ESCLH Biennal Conference" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <SectionInfo direito={data.direito.childImageSharp.fluid} styleClass="float-right"/>
      <Speakers photo1={data.photo1.childImageSharp.fluid} />
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
  direito:file(relativePath: {eq: "direito.jpg"}) {
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
}
`


export default AboutPage
