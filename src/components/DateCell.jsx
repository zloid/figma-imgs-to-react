import React from 'react'
import styled from 'styled-components'

const TodayTomorrowText = styled.div`
  height: 23.72px;
  left: calc(50% - 62px / 2 + 0.5px);
  top: calc(50% - 0px / 2 - 20.14px);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  //   left: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // position: absolute;
  text-decoration-line: ${props => (props.selected ? 'underline' : 'none')};
  border-bottom: ${props => (props.selected ? '3px solid #ff473a' : 'none')};
  padding-bottom: ${props => (props.selected ? '30px' : '0px')};
  margin-top: ${props => (props.blocked ? '9.2px' : '0px')};
  color: ${props => (props.blocked ? '#D4D4D4' : '#050505')};
  display: inline-block;
  vertical-align: top;
  margin-left: ${props => (props.righted ? '20%' : '10%')};
  margin-right: ${props => props.lefted && '30%'};
`
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
  margin-left: ${props => (props.righted ? '5%' : '5%')};
  margin-left: ${props => props.lefted && '-10%'};
`

const SolidLine = styled.div`
  //   position: absolute;
  //   margin-top: 10px;
  border-top: 3px solid #cccccc80;
  width: 100%;
  @media (min-width: 768px) {
    // width: 1100px;
  }
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
