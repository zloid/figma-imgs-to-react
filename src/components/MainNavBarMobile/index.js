import React, { useState } from 'react'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StyledBrand from './StyledBrand'
import PageName from './PageName'
import ImageFigure from './ImageFigure'
import InputField from './InputField'

const HidingMenu = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`

const MainNavBarMobile = ({ pageName }) => {
  const [menuOpenOrNot, OpenMenu] = useState(false)
  const [shadowForBurgMenu, setShadowForBurgMenu] = useState('')

  const isMenuOpen = function(state) {
    if (state.isOpen) {
      return setShadowForBurgMenu('4px 0px 4px rgba(0, 0, 0, 0.25)')
    }
    return setShadowForBurgMenu('')
  }

  const shadowForBurgerMenu = {
    bmMenu: {
      boxShadow: shadowForBurgMenu,
    },
  }

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

        <Navbar.Toggle
          onClick={() => {
            OpenMenu(!menuOpenOrNot)
          }}
        />
        {/* BURGER MENU */}
        <Menu
          onStateChange={isMenuOpen}
          styles={shadowForBurgerMenu}
          disableOverlayClick={() => {
            OpenMenu(!menuOpenOrNot)
          }}
          isOpen={menuOpenOrNot}
          width={'300px'}
        >
          <Nav className="mr-auto">
            <Row>
              <Col xs={3}>
                <ImageFigure imgUrl="/imgs/iconSearchWhite.svg" />
              </Col>
              <Col>
                <InputField placeholder="Search" />
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <ImageFigure imgUrl="/imgs/iconCollection.svg" />
              </Col>
              <Col>
                <Nav.Link href="/collections">Collections</Nav.Link>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <ImageFigure imgUrl="/imgs/iconPlanYourVisit.svg" />
              </Col>
              <Col>
                <Nav.Link href="/plan-yours-visit">Plan Your Visit</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Menu>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <HidingMenu>
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link>
              <Link to="/plan-yours-visit">Plan Your Visit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/collections">Collections</Link>
            </Nav.Link>
          </Nav>
        </HidingMenu>
        {/* </Navbar.Collapse>  */}
      </Navbar>
    </>
  )
}

export default MainNavBarMobile
