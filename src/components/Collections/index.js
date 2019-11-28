import React from 'react'
import MainNavBarMobile from '../MainNavBarMobile'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import SearchInput from './SearchInput'


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
