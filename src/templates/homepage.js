import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Img from "../images/f-f-placeholder.gif"
import './homepage.scss'

// Run the Graphql query
export const pageQuery = graphql`
  query HomepageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        bgPos
      }
      fields {
        hero {
          childImageSharp {
            fluid(quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <>
      <Helmet title="Foxleigh & Foxleigh. Coming soon"/>
      <div class="homepage"><img src={Img} /></div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
