import React from 'react'
import { TodayTomorrowText } from './DateCell'
import styled from 'styled-components'
import { HollowDiv } from './HollowDiv'

const SeniorsBlock = styled.div`
  border-left: 1px solid #000000;
  margin-left: 50px;
  margin-top: -8px;
  padding-top: 18px;
  padding-left: 18px;
`

const AdultsBlockId = styled.div`
  //   height: 23.72px;
  //   left: calc(50% - 62px / 2 + 0.5px);
  //   top: calc(50% - 0px / 2 - 20.14px);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  //   line-height: 22px;
  text-align: bottom;
  padding-left: 12px;
  margin-bottom: 15px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ccc;
  
`

const AdultsBlock = () => {
  return (
    <>
      <HollowDiv />
      <TodayTomorrowText>Adults</TodayTomorrowText>

      <SeniorsBlock>
        <TodayTomorrowText>Seniors</TodayTomorrowText>
        <br />
        <AdultsBlockId>65+ with ID</AdultsBlockId>
      </SeniorsBlock>
    </>
  )
}

export default AdultsBlock
