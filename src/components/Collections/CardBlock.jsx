import React from 'react'
import A from './A'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'

const CardBlockText = styled(A)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    border-left: 1px solid #000 !important;
  }
  display: block;
  padding-left: 10px;
  margin-top: -2px;
  margin-left: -25px;
  margin-right: -2px;
`

const CardBlock = ({ imgUrl, text, href }) => {
  return (
    <>
      <CardBlockText href={href}>
        <Image src={imgUrl} fluid />
        <br />
        <br />
        {text}
      </CardBlockText>
    </>
  )
}

export default CardBlock
