import styled from 'styled-components'

const ContentWrapperStyles = styled.div`
  background: ${(props) => props.theme.contentBgColor};
  border-top: 1px solid ${(props) => props.theme.separatorBtm}; // SEPARATOR
  border-bottom: 1px solid ${(props) => props.theme.separatorTop}; // SEPARATOR
  color: ${(props) => props.theme.textColor};
  transition: color 1s;
  font-size: 2rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  section {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .fullWidth section {
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    font-size: 1.5rem;
    section {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
    p,
    ul {
      font-size: 1.5rem;
    }
  }
`
export default ContentWrapperStyles
