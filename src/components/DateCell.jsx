import React from 'react'
import styled from 'styled-components'
import { SolidLine } from './SolidLine'
import { TodayTomorrowText } from './TodayTomorrowText'

const DateCellData = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: #000000;
  // position: absolute;
  // margin-top: 28px;
  left: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: ${props => (props.selected ? 'block' : 'none')};
//   margin-left: ${props => (props.righted ? '5%' : '5%')};
  margin-left: 5%;
  margin-left: ${props => props.lefted && '-10%'};
`

const DateCell = ({
  textProp,
  dayProp,
  selected,
  blocked,
  righted,
  lefted,
}) => {
  return (
    <>
      <TodayTomorrowText
        selected={selected}
        blocked={blocked}
        righted={righted}
        lefted={lefted}
      >
        {' '}
        {dayProp}{' '}
      </TodayTomorrowText>

      <SolidLine />

      <DateCellData selected={selected} righted={righted} lefted={lefted}>
        {textProp}
      </DateCellData>
    </>
  )
}

export default DateCell
