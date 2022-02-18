import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import ProductCard from "../components/ProductCard"
import Seo from "../components/seo"

const Pants = () => {
  return (
    <Layout>
      <Seo title="Pants" />
      <h1 className="text-black font-light main-title mt-5 mb-2 text-center">
        Pants
      </h1>
      <Wrapper></Wrapper>
    </Layout>
  )
}

export default Pants

const Wrapper = styled.div`
  display: grid;
  margin: 40px;
  grid-template-columns: repeat(4, auto);
  justify-content: left;
  gap: 40px;
  max-width: 1234px;
`
