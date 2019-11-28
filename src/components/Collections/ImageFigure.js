import styled from 'styled-components'

const ImageFigure = styled.figure`
width: 100%;
min-width: 165px;
min-height: 124px;
    // background-image: url('/imgs/menu-hamb.svg');
    background-image: ${props => 'url(' + props.imgUrl + ')'};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

export default ImageFigure