import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import SectionIntro from "../components/Homepage/SectionIntro"


const IndexPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header" img={data.img.childImageSharp.fluid} logo={data.logo.childImageSharp.fluid}  />
    <main>
      <SectionIntro />
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
  }
}
`


export default IndexPage
