import React from 'react'
import MainNavBarMobile from '../MainNavBarMobile'
import { Container, Row, Col } from 'react-bootstrap'
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
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/de-stijl.jpg"
              text={<p>DE STIJL</p>}
            />
          </Col>
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/cubism.jpg"
              text={<p>CUBISM</p>}
            />
          </Col>
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/americ-photog.jpg"
              text={
                <p>
                  AMERICAN <br /> PHOTOGRAPHY
                </p>
              }
            />
          </Col>
          <Col xs={6}>
            <CardBlock
              href="#"
              imgUrl="/imgs/greek-antiq.jpg"
              text={<p>GREEK ANTIQUITIES</p>}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Collections
