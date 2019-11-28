import styled from 'styled-components'

const ImageFigure = styled.figure`
  // width: 100%;
  width: 25px;
  height: 15px;
  // background-image: url('/imgs/menu-hamb.svg');
  background-image: ${props => 'url(' + props.imgUrl + ')'};
  // background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  // background-position: 80% 80%;
  margin-top: 15px;
  text-align: center;
  background-position: center center;
`

export default ImageFigure
