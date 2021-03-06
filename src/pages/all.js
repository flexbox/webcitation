import React from 'react'
import { Flex } from 'rebass/styled-components'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import PropTypes from 'prop-types'
import QuoteItem from '../components/quote/quoteItem'
import { QuoteLink } from '../components/quote/quoteLink'

export const query = graphql`
  query allQuery {
    allContentfulQuote {
      nodes {
        id
        author
        title {
          title
        }
        slug {
          slug
        }
      }
    }
  }
`

const AllPage = ({ data }) => (
  <Layout>
    <Flex flexDirection="column" alignItems="center">
      {data.allContentfulQuote.nodes.map(item => {
        return (
          <QuoteLink
            to={`/${item.slug.slug}`}
            key={item.id}
            style={{ marginBottom: 300 }}
          >
            <QuoteItem title={item.title.title} author={item.author} />
          </QuoteLink>
        )
      })}
    </Flex>
  </Layout>
)

AllPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AllPage
