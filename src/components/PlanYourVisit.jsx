import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainNavBarMobile from './MainNavBarMobile'
import H1 from './H1'
import TomatoText from './TomatoText'
import DateCell from './DateCell'
import AdultsBlock from './AdultsBlock'
import { HollowDiv } from './HollowDiv'
import CounterBlock from './CounterBlock'
import { SolidLine } from './SolidLine'
import { TodayTomorrowText } from './TodayTomorrowText'

const SolidLineRed = styled(SolidLine)`
  border-top: 3px solid #ff473a;
  margin-top: 20px;
`
const TotalBlock = styled.span`
  // margin-left: 0%;
  // width: 73%;
  // display: inline-block;
  margin-right: 25px;
`
const ContinueToPayButton = styled.button`
  width: 248px;
  height: 42px;
  // line-height: 50px;
  margin: 0 auto;
  margin-top: 12px;
  padding: 0;
  border: 1px solid #d4d4d4;
  color: #fff;
  background: #ff473a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`

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
          <Col className="text-right">
            <HollowDiv />
            <CounterBlock count={2} />
            <CounterBlock count={0} />
            <CounterBlock count={0} />
          </Col>
        </Row>
        <Row>
          <Col>
            <SolidLineRed />
            <SolidLine />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodayTomorrowText>Total</TodayTomorrowText>
          </Col>
          <Col className="text-right">
            <TotalBlock>
              <TodayTomorrowText>$16</TodayTomorrowText>
            </TotalBlock>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ContinueToPayButton>Continue to Payment</ContinueToPayButton>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PlanYourVisit
