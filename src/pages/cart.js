import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductRow from "../components/ProductRow"
import PrimaryButton from "../components/PrimaryButton"

const Cart = () => {
  return (
    <Layout>
      <Seo title="Cart" />
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Quantity</Text>
          <Text>Remove</Text>
        </HeaderWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Cart

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
