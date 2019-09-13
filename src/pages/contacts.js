import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Globals/Header"
import Contacts from "../components/Contacts/Contacts"


const ContactPage = ({data}) => (
  <Layout title="Home" >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header styleClass="header--about" title="Contacts" logo={data.logo.childImageSharp.fluid}/>
    <main>
      <Contacts />
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
  
}
`


export default ContactPage
