import styled from 'styled-components'

const SectionStyles = styled.div`
  position: relative;
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.separatorBtm};
  border-bottom: 1px solid ${(props) => props.theme.separatorTop};
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  & h1 {
    color: white;
    text-shadow: 1px 1px 3px black;
    z-index: 1;
    font-size: 7vw;
    font-weight: 600;
  }

  /* &.panel1 {
    background: bisque;
  }
  &.panel2 {
    background: palevioletred;
  }
  &.panel3 {
    background: rebeccapurple;
  }
  &.panel4 {
    background: gainsboro;
  } */
`
export default SectionStyles
