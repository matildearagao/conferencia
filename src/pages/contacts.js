import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import Contacts from "../components/Contacts/Contacts"
import Map from '../components/Globals/Map'
import Links from '../components/Contacts/Links'

const ContactPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="Contacts" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <Contacts address={data.address.childImageSharp.fluid}/>
      <Links />
      <Map />
    </main>
  </Layout>
)

export const query = graphql`
{
  logo:file(relativePath: {eq: "ESCLH-logo-branco.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  address:file(relativePath: {eq: "address.svg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  },
  
}
`


export default ContactPage
