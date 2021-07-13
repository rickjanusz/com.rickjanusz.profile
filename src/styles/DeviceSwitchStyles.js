import styled from 'styled-components'

const StyledDevice = styled.div`
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  @media (max-width: 1000px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  @media (max-width: 700px) {
  }
`

export default StyledDevice
