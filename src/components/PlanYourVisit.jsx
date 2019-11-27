import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainNavBarMobile from './MainNavBarMobile'
import H1 from './H1'
import TomatoText from './TomatoText'
import DateCell from './DateCell'

const SolidLine = styled.div`
  // position: absolute;
  border-top: 3px solid green;
  width: 100%;
  @media (min-width: 768px) {
    // width: 1100px;
  }
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
            <DateCell
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
          <Col xs={6} md={4} className="text-center">
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
          {/* <Col xs={1}> */}
          {/* <DateCell selected />  */}
          {/* </Col> */}
          {/* <Col xs={{ span: 2, offset: 9 }} md={{ span: 4, offset: 8 }}> */}
          <Col className="text-right">
            <DateCell
              // selected
              blocked
              dayProp="Other"
              textProp={
                <>
                  March 22, 2019 <br /> Open 10:30am-5:30pm
                </>
              }
            />
          </Col>
          <SolidLine />

        </Row>
        <Row>
          <Col>
            {' '}
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>test test 111111111</Col>
        </Row>
      </Container>
    </>
  )
}

export default PlanYourVisit
