import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import StyledBrand from './StyledBrand'
import PageName from './PageName'
import { slide as Menu } from 'react-burger-menu'
import ImageFigure from './ImageFigure'

const HollowMenu = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`

const MainNavBarMobile = ({ pageName }) => {
  const [menuOpenOrNot, OpenMenu] = useState(false)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <StyledBrand>
            THE
            <br />
            ART
            <br />
            MUSEUM
          </StyledBrand>
        </Navbar.Brand>
        <PageName>{pageName}</PageName>

        <Navbar.Toggle onClick={() => OpenMenu(!menuOpenOrNot)} />

        <Menu isOpen={menuOpenOrNot} right width={'300px'}>
          <Nav className="mr-auto">
            <Row>
              <Col xs={3} >
                <ImageFigure imgUrl="/imgs/iconCollection.svg" />
              </Col>
              {/* <Col className="text-center"> */}
              <Col>
              <Nav.Link href="#link">Collections</Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col xs={3} >
                <ImageFigure imgUrl="/imgs/iconPlanYourVisit.svg" />
              </Col>
              <Col>
                <Nav.Link href="#home">Plan Your Visit</Nav.Link>
              </Col>
            </Row>
            
          </Nav>
        </Menu>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <HollowMenu>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#vis">Plan Your Visit</Nav.Link>
            <Nav.Link href="#col">Collections</Nav.Link>
          </Nav>
        </HollowMenu>
        {/* </Navbar.Collapse>  */}
      </Navbar>
    </>
  )
}

export default MainNavBarMobile
