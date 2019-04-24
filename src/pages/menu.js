import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import Menu from "../components/Menu/Menu"
import Cta from "../components/Globals/Cta"

const MenuPage = ({ data }) => (
  <Layout title="Home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header
      styleClass="header--about"
      title="Menu"
      logo={data.logo.childImageSharp.fluid}
    />
    <main>
    <Menu items={data.menu} />
      <Cta />
    </main>
  </Layout>
)

export const query = graphql`
  {
    logo: file(relativePath: { eq: "Logo-Cinnapan-horizontal-branco.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
    menu:allContentfulCinnapan{
      edges {
        node {
          id
          title
          category
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

export default MenuPage
