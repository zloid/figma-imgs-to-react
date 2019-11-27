import React from 'react'
// import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainNavBarMobile from './MainNavBarMobile'
import H1 from './H1'
import TomatoText from './TomatoText'
import DateCell from './DateCell'
import AdultsBlock from './AdultsBlock'
import { HollowDiv } from "./HollowDiv";

const PlanYourVisit = () => {
  return (
    <>
      <Container>
        <MainNavBarMobile pageName="Plan Your Visit" />
        <Row>
          <Col>
            <H1>
              Skip the Line.
              <br />
              Purchase Tickets.
            </H1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TomatoText>
              All exhibitions, audio tours, and films included in the price of
              admission.
            </TomatoText>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <DateCell
              lefted
              // selected
              blocked
              dayProp="Today"
              textProp={
                <>
                  March 21, 2016 <br /> Open 10:30am-5:30pm
                </>
              }
            />
          </Col>
          <Col className="text-center">
            <DateCell
              selected
              // blocked
              dayProp="Tomorrow"
              textProp={
                <>
                  March 22, 2016 <br /> Open 10:30am-5:30pm
                </>
              }
            />
          </Col>

          <Col className="text-center">
            <DateCell
              righted
              //selected
              blocked
              dayProp="Other"
              textProp={
                <>
                  March 22, 2019 <br /> Open 10:30am-5:30pm
                </>
              }
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <AdultsBlock />
          </Col>
          <Col>
          <HollowDiv/>
          testttt
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PlanYourVisit
