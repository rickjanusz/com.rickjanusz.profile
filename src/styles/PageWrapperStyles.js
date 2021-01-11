import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  transition: padding 1s;
  margin-top: -40px;
  @media (max-width: 1000px) {
    margin-top: -60px;
    padding: 0 10vw;
  }
  @media (max-width: 700px) {
    margin-top: -120px;
    padding: 8vw;
  }
`

export default PageWrapper
