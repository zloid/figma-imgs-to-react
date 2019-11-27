import styled from 'styled-components'

export const TodayTomorrowText = styled.div`
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
