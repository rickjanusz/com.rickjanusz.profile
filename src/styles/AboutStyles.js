import styled from 'styled-components'

const v = 150

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  border: 10px solid ${(props) => props.theme.separatorTop};
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: var(--transition);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h4 {
    margin: 0;
    padding: 20px 0;
    text-align: center;
    /* border-radius: 5px; */
    font-size: 1.5em;
    border-right: 1px solid ${(props) => props.theme.separatorTop};
    border-bottom: 1px solid ${(props) => props.theme.separatorTop};
    /* background-color: rgba(0, 0, 0, 0.7); */
    color: rgba(${v}, ${v}, ${v}, 0.5);
    color: ${(props) => props.theme.headers};
    background-color: #000;
    mix-blend-mode: multiply;
    text-shadow: 1px 1px 1px #fff;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    transition: var(--transition);
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin: 0;
      padding: 15px 0 15px 20px;
      border-top: 1px solid ${(props) => props.theme.separatorTop};
      border-right: 1px solid ${(props) => props.theme.separatorTop};
      border-bottom: 1px solid ${(props) => props.theme.separatorTop};
      &:last-child {
        border-bottom: none;
      }
    }
  }
  section:last-child h4 {
    border-right: none;
  }
  section:last-child li {
    border-right: none;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    section:nth-child(2) li {
      border-right: none;
    }
    section:nth-child(2) h4 {
      border-right: none;
    }
    section:nth-child(3) h4,
    section:nth-child(4) h4 {
      border-top: 1px solid ${(props) => props.theme.separatorTop};
    }
    max-width: 700px;
  }
  @media (max-width: 700px) {
    border-radius: 0;
    /* grid-template-columns: 1fr; */
    ul,
    li {
      font-size: 2rem;
    }
  }
`
export const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1000px;
  align-items: top;
  gap: 20px;
  .em {
    font-weight: 900;
  }
  .city {
    font-size: 1.2em;
    font-weight: bold;
    color: ${(props) => props.theme.dark};
    transition: var(--transition);
  }
  .card {
    margin-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .featured-image-container .card {
    padding: 10px;
    height: 0;
    padding-bottom: calc(100%);
    overflow: hidden;
    margin-right: 10px;
  }

  img {
    transition: var(--transition);
    width: 100%;
  }
  @media (max-width: 1000px) {
    padding: 0;
    p {
      font-size: 1.2em;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    align-content: center;
    .featured-image-container .card {
      margin-right: 0;
    }
  }
`
