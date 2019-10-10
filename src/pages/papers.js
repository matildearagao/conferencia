import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import PapersRules from "../components/Papers/PapersRules"



const MenuPage = ({ data }) => (
  <Layout title="Home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      styleClass="header--about"
      title="Papers"
      logo={data.logo.childImageSharp.fluid}
    />
    <main>
    {/* <Menu items={data.menu} /> */}
    <PapersRules />
   
    </main>
  </Layout>
)

export const query = graphql`
  {
    logo: file(relativePath: { eq: "ESCLH-logo-branco.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
   
  }
`

export default MenuPage
