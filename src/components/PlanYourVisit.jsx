import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import MainNavBarMobile from './MainNavBarMobile'
import H1 from './H1'
import TomatoText from './TomatoText'

const TodayTomorrowText = styled.span`
  height: 23.72px;
  left: calc(50% - 62px / 2 + 0.5px);
  top: calc(50% - 0px / 2 - 20.14px);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  // left: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: ${props => (props.selected ? 'absolute' : '')};
  text-decoration-line: ${props => (props.selected ? 'underline' : 'none')};
  border-bottom: ${props => (props.selected ? '3px solid #ff473a' : 'none')};
  padding-bottom: ${props => (props.selected ? '30px' : '0px')};
  margin-top: ${props => (props.selected ? '15px' : '0px')};
  color: ${props => (props.blocked ? '#D4D4D4' : '#050505')};
  &:hover {
    ${props => (props.selected = true)};
  }
`
const DateCellData = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: #000000;
  position: absolute;
  border-top: 3px solid #ccc;
  margin-top: 28px;
  left: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: ${props => (props.selected ? 'block' : 'none')};
`

const DateCell = ({ textProp, dayProp, selected, blocked }) => {
  return (
    <>
      <TodayTomorrowText selected={selected} blocked={blocked}>
        {' '}
        {dayProp}{' '}
      </TodayTomorrowText>

      <DateCellData selected={selected}>{textProp}</DateCellData>
    </>
  )
}

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
          <Col xs={5} md={4} className="text-center">
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
          <Col xs={1}>
            <DateCell selected /> 
          </Col>
          {/* <Col xs={4} className="text-right" xs={{ span: 2, offset: 11 }}> */}
          <Col xs={{ span: 3, offset: 9 }} md={{ span: 4, offset: 8 }}>
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
        </Row>
      </Container>
    </>
  )
}

export default PlanYourVisit
