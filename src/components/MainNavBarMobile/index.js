import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import StyledBrand from './StyledBrand'
import PageName from './PageName'
import { slide as Menu } from 'react-burger-menu'

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
        <Navbar.Brand href="#home2">
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
          {/* <a className="menu-item" href="#">
            Home
          </a>
          <a className="menu-item" href="#">
            About
          </a>
          <a className="menu-item" href="#">
            Contact
          </a> */}
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Menu>
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <HollowMenu>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </HollowMenu>
        {/* </Navbar.Collapse>  */}
      </Navbar>
    </>
  )
}

export default MainNavBarMobile
