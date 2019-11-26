import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainNavBarMobile from './MainNavBarMobile'
import H1 from './H1'
import TomatoText from './TomatoText'

const TodayTomorrowText = styled.span`
  // width: 125px;
  height: 23.72px;
  left: calc(50% - 125px / 2 + 0.5px);
  top: calc(50% - 23.72px / 2 - 20.14px);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding-bottom: 15px;
  text-decoration-line: ${props => (props.selected ? 'underline' : 'none')} 
  border-bottom: ${props => (props.selected ? '3px solid #ff473a' : 'none')} 
  color: ${props => (props.blocked ? '#D4D4D4' : '#050505')} 
  // display: flex;
`

const PlanYourVisit = () => {
  return (
    <>
      <Container>
        <MainNavBarMobile pageName="Plan Your Visit" />
        <Row>
          <H1>
            Skip the Line.
            <br />
            Purchase Tickets.
          </H1>
        </Row>
        <Row>
          <TomatoText>
            All exhibitions, audio tours, and films included in the price of
            admission.
          </TomatoText>
        </Row>
        <Row>
          <Col xs={3}>
            <TodayTomorrowText blocked>Today</TodayTomorrowText>
          </Col>
          <Col xs={6} md={4} className="text-center">
            <TodayTomorrowText selected>Tomorrow</TodayTomorrowText>
          </Col>
          <Col className="text-center">
            <TodayTomorrowText blocked>Other</TodayTomorrowText>
          </Col>
        </Row>
        <Row>{/* <Col></Col> */}</Row>
      </Container>
    </>
  )
}

export default PlanYourVisit
