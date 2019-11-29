import React, { useState } from 'react'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import StyledBrand from './StyledBrand'
import PageName from './PageName'
import ImageFigure from './ImageFigure'
import InputField from './InputField'
import HidingMenu from './HidingMenu'

import Helmet from 'react-helmet'

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
      <Helmet>
        <title>{pageName}</title>
      </Helmet>
      <Navbar expand="lg">
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
                <Nav.Link href="/plan-your-visit">Plan Your Visit</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Menu>
        <HidingMenu>
          <Nav className="mr-auto">
            <Nav.Link href="/plan-your-visit">Plan Your Visit</Nav.Link>
            <Nav.Link href="/collections">Collections</Nav.Link>
          </Nav>
        </HidingMenu>
      </Navbar>
    </>
  )
}

export default MainNavBarMobile
