import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  transition: padding 1s;
  /* margin-top: -40px; */
  &.sub {
    margin-top: 0px;
    padding: 0;
  }
  @media (max-width: 1000px) {
    /* margin-top: -60px; */
    padding: 0 5vw;
  }
  @media (max-width: 700px) {
    /* margin-top: -120px; */
    padding: 3vw;
  }
`

export default PageWrapper
