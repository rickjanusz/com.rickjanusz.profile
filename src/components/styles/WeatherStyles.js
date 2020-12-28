import styled from 'styled-components'

const WeatherStyles = styled.div`
  margin: 0 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  font-size: 2.3rem;

  @media (max-width: 1300px) {
    margin: 0;
    border-top: 1px solid var(--grey);
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 700px) {
  }
`

export default WeatherStyles
