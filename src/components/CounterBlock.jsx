import React from 'react'
import styled from 'styled-components'

const Increment = styled.button`
  width: 18px;
  height: 18px;
  line-height: 10px;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #d4d4d4;
  background-color: #fff;
  color: #ccc;
`
const Decrement = styled(Increment)``

const Numbers = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 12px;
`

const CounterBlockCover = styled.div`
margin-top: 10px;
margin-bottom: 38.85px;
`
const CounterBlock = ({ count }) => {
  return (
    <CounterBlockCover>
      <Increment>-</Increment>
      <Numbers>{count}</Numbers>
      <Decrement>+</Decrement>
    </CounterBlockCover>
  )
}
export default CounterBlock
