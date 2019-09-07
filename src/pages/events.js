import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import SectionEvents from "../components/Events/SectionEvents"

const Events = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="Eventos" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <SectionEvents />
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


export default Events
