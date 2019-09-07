import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import SectionInfo from "../components/About/SectionInfo"
import SectionProcess from "../components/About/SectionProcess"

const AboutPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="conferencia nome" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <SectionInfo direito={data.direito.childImageSharp.fluid} styleClass="float-right"/>
      <SectionProcess photo1={data.photo1.childImageSharp.fluid} photo2={data.photo2.childImageSharp.fluid} photo3={data.photo3.childImageSharp.fluid}/>
    </main>
  </Layout>
)

export const query = graphql`
{
  logo:file(relativePath: {eq: "logo-placeholder.png"}) {
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
  cinnapanCook:file(relativePath: {eq: "cinnapan-cook.jpg"}) {
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
  photo2:file(relativePath: {eq: "cinnamon-roll.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  photo3:file(relativePath: {eq: "sun.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`


export default AboutPage
