import React from 'react'
import MainNavBarMobile from '../MainNavBarMobile'
import { Container, Row, Col } from 'react-bootstrap'
// import TomatoText from '../TomatoText'

import styled from 'styled-components'

const A = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #ff473a;
  &:hover {
    color: tomato;
    text-decoration-line: none;
  }
  margin-left: -8px;
`

const UrlInput = styled.input`
  // width: 357px;
  width: 100%;
  height: 48px;
  outline: none;
  border: 2px solid #ff473a;
  color: #ff473a;
  ::placeholder {
    color: #ff473a;
  }
  font-size: 18px;
  line-height: 22px;
  padding-left: 10px;
  margin-left: -8px;
`

const SearchInput = () => {
  return (
    <>
      <UrlInput placeholder="Explore the Collection" />
      {/* <input value="Explore the Collection" /> */}
      <br />

      <A href="#"> Advanced Search </A>
    </>
  )
}

const Collections = () => {
  return (
    <>
      <Container>
        <MainNavBarMobile pageName="Collections" />
        <Row>
          <Col>
            <SearchInput />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Collections
