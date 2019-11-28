import styled from 'styled-components'

const InputField = styled.input`
  // width: 357px;
  width: 100%;
  height: 48px;
  outline: none;
  border: 2px solid #ff473a;
  color: #ff473a;
  ::placeholder {
    color: #ff473a;        
  }
  font-size: 18px;
  line-height: 22px;
  padding-left: 10px;
  margin-left: -8px;
  background: url(/imgs/Ellipse.svg);
  background-repeat: no-repeat;
  background-size: auto;
  // background-size: 300px 100px;
  // background-position: right;
  background-position: 98% 50%;
   &:hover {
    background: none;
   }
`

export default InputField