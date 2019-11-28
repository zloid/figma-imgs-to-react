import React from 'react'
// import ImageFigure from './ImageFigure'

// import TomatoText from '../TomatoText'
import A from './A'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'

// const CardBlockText = styled(A)`
//   width: 100%;
// `

const CardBlockText = styled(A)`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        border-left: 1px solid #000 !important;
    }
    display: block;
`

const CardBlock = ({ imgUrl, text, href }) => {
  return (
    <>
      {/* <ImageFigure imgUrl={imgUrl} /> */}
      {/* <CardBlockText as="figcaption">{text}</CardBlockText> */}
      <CardBlockText href={href}>
      <Image src={imgUrl} fluid />
          
          
          {text}</CardBlockText>
    </>
  )
}

export default CardBlock
