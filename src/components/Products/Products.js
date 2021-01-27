import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
          console.log({ products })
        }
        return (
          <ContainerStyles>
            {Object.keys(products).map((product) => (
              <ProductCard
                key={products[product].id}
                product={products[product]}
              />
            ))}
          </ContainerStyles>
        )
      }}
    />
  )
}

export default Products
