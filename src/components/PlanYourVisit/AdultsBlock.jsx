import React from 'react'
import { TodayTomorrowText } from './TodayTomorrowText'
import styled from 'styled-components'
import { HollowDiv } from './HollowDiv'

const SeniorsBlock = styled.div`
  border-left: 1px solid #000000;
  margin-left: 48px;
  @media (min-width: 768px) {
    margin-left: 65px;
  }
  @media (min-width: 1200px) {
    margin-left: 88px;
  }
  margin-top: -8px;
  padding-top: 18px;
  padding-left: 18px;
`

const AdultsBlockId = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: bottom;
  padding-left: ${props => props.paddingLeft + '%'};
  margin-top: -5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ccc;
`

const StudentsBlock = styled.div`
  margin-top: 58px;
`

const AdultsBlock = () => {
  return (
    <>
      <HollowDiv />
      <TodayTomorrowText>Adults</TodayTomorrowText>
      <SeniorsBlock>
        <TodayTomorrowText>Seniors</TodayTomorrowText>
        <br />
        <AdultsBlockId paddingLeft={10}>65+ with ID</AdultsBlockId>
      </SeniorsBlock>
      <StudentsBlock>
        <TodayTomorrowText>Students</TodayTomorrowText>
        <br />
        <AdultsBlockId paddingLeft={10}>with ID</AdultsBlockId>
      </StudentsBlock>
    </>
  )
}

export default AdultsBlock
