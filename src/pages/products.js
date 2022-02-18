import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/ProductCard"

const query = graphql`
  query {
    allStrapiProduct {
      nodes {
        data {
          id
          attributes {
            name
            description
            price
            meta_description
            meta_title
            slug
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <Layout>
      <Seo title="Products" />
      <h1 className="text-black font-light main-title mt-5 mb-2 text-center">
        Products
      </h1>
      <Wrapper>
        {/*This doesnt work :c
        <StaticQuery
          query={query}
          render={data => {
            data.allStrapiProduct.nodes[0].data.map(product => (
              <ProductCard key={product.id} product={product.attributes} />
            ))
          }}
        />
        */}

        {
          //This works
          <StaticQuery
            query={query}
            render={data => (
              <ul>
                {data.allStrapiProduct.nodes[0].data.map(product => (
                  <li key={product.id}>{product.attributes.name}</li>
                ))}
              </ul>
            )}
          />
        }
      </Wrapper>
    </Layout>
  )
}

export default Products

const Wrapper = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(4, auto);
  justify-content: left;
  gap: 40px;
  max-width: 1234px;
`
