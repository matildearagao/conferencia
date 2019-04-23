import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderHome from "../components/Homepage/HeaderHome"
import SectionIntro from "../components/Homepage/SectionIntro"
import SectionDisplayMenu from "../components/Homepage/SectionDisplayMenu"
import SectionTestemonials from "../components/Homepage/SectionTestemonials"
import Separator from "../components/Globals/Separator"
import Cta from "../components/Globals/Cta"


const IndexPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeaderHome styleClass="header" img={data.img.childImageSharp.fluid} logo={data.logo.childImageSharp.fluid}  />
    <main>
      <SectionIntro chocolateBar={data.chocolateBar.childImageSharp.fluid} cinnamonRoll={data.cinnamonRoll.childImageSharp.fluid} sun={data.sun.childImageSharp.fluid}/>
      <Separator styleClass="separator--home" />
      <SectionDisplayMenu cinnapanMenu={data.cinnapanMenu.childImageSharp.fluid} />
      <SectionTestemonials />
      <Cta />
    </main>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "EnrolateSabor.png"}) {
    childImageSharp {
      fluid(maxWidth: 3000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  logo:file(relativePath: {eq: "Logo-Cinnapan-horizontal-branco.png"}) {
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
  },
  cinnapanMenu:file(relativePath: {eq: "cinnapan-2_c.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`


export default IndexPage
