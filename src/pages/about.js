import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import Separator from "../components/Globals/Separator"
import Cta from "../components/Globals/Cta"
import SectionInfo from "../components/About/SectionInfo"
import SectionProcess from "../components/About/SectionProcess"

const AboutPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="Sobre nós" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <SectionInfo cinnapanPhoto={data.cinnapanBox.childImageSharp.fluid} styleClass="float-right"/>
      <Separator styleClass="separator--home" />
      <SectionInfo cinnapanPhoto={data.cinnapanCook.childImageSharp.fluid} />
      <SectionProcess chocolateBar={data.chocolateBar.childImageSharp.fluid} cinnamonRoll={data.cinnamonRoll.childImageSharp.fluid} sun={data.sun.childImageSharp.fluid}/>
      <Cta />
    </main>
  </Layout>
)

export const query = graphql`
{
  logo:file(relativePath: {eq: "Logo-Cinnapan-horizontal-branco.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  cinnapanBox:file(relativePath: {eq: "cinnapan-box.jpg"}) {
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
  chocolateBar:file(relativePath: {eq: "chocolate-bar.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  cinnamonRoll:file(relativePath: {eq: "cinnamon-roll.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  sun:file(relativePath: {eq: "sun.png"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`


export default AboutPage
