import React from 'react'
import MainNavBarMobile from '../MainNavBarMobile'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import SearchInput from './SearchInput'
import CardBlock from './CardBlock'

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
        <Row>
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/decor-art-craft.jpg"
              text={
                <p>
                  DECORATIVE
                  <br />
                  ARTS & CRAFTS
                </p>
              }
            />
          </Col>
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/americ-impress.jpg"
              text={
                <p>
                  AMERICAN
                  <br />
                  IMPRESSIONISM
                </p>
              }
            />
          </Col>
          <Col xs={6}>img 2</Col>
          <Col xs={6}>img 3</Col>
        </Row>
      </Container>
    </>
  )
}

export default Collections
