import styled from 'styled-components'

const StyledWeather = styled.div`
  .handle {
    width: 100%;
    height: 20px;
    cursor: pointer;
    transition: var(--transition);
    background-color: ${(props) => props.theme.dark};
    color: ${(props) => props.theme.light};
    font-size: 2em;
    position: relative;
    &:hover {
      color: ${(props) => props.theme.dark};
      background-color: ${(props) => props.theme.light};
      svg {
        fill: ${(props) => props.theme.dark};
      }
    }
    svg {
      height: 100%;
      width: 40px;
      fill: ${(props) => props.theme.light};
    }
    .condition {
      position: absolute;
      top: 8px;
      width: 100%;
      text-align: center;
    }
  }
  .weatherWrapper {
    height: auto;
    width: 100vw;
    right: 0px;
    transition: var(--transition);
    z-index: 1000;
    pointer-events: none;
    /* position: fixed; */
    #weatherSelector {
      margin: 0;
      width: 100vw;
      max-height: 0;
      pointer-events: auto;
      z-index: 2;
      font-size: 2rem;
      overflow: hidden;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.dark};
      transition: max-height 0.6s ease-in-out;
      &.active {
        height: auto;
        max-height: 1500px;
      }
      img {
        width: 4vw;
      }
      form {
        input {
          padding: 10px;
          width: 100%;
          border: none;
          border-right: 1px solid ${(props) => props.theme.separatorTop};
          border-radius: 3px 0 0 3px;
          :focus,
          :active {
            outline: none;
            border: none;
          }
        }
        button {
          padding: 10px 20px;
          border: none;
          width: 100%;
          border-left: 1px solid ${(props) => props.theme.separatorBtm};
          background-color: ${(props) => props.theme.primary};
          color: ${(props) => props.theme.white};
          transition: var(--transition);
          :hover {
            background-color: ${(props) => props.theme.headings};
            cursor: pointer;
          }
        }
      }
      .cityDetails {
        /* display: flex; */
        /* flex-direction: row; */
        text-align: center;
        img {
          height: 75px;
          width: 75px;
        }
      }
      @media (max-width: 1000px) {
        margin: 0;
        width: 100vw;
        right: -100vw;
      }
      @media (max-width: 700px) {
      }
    }
  }
`

export default StyledWeather
