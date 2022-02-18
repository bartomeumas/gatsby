import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Liked = () => {
  return (
    <Layout>
      <Seo title="Favoritos" />
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Remove</Text>
        </HeaderWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Liked

const Wrapper = styled.div`
  margin: 40px;
`

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`
