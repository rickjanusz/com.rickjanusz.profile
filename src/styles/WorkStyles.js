import styled from 'styled-components'

const ExpWrapper = styled.div`
  margin-top: 0px;
  h3 {
    margin: 0;
    color: ${(props) => props.theme.primary};
  }
  .ipsType_right {
    text-align: right;
  }
  .ipsType_center {
    text-align: center;
  }
  .cInnerContent {
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
  }
  .ipsSpacer_bottom_double {
    margin-bottom: 230px;
  }
  .ipsGrid {
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
  }
  .ipsGrid::before,
  .ipsGrid::after {
    display: table;
    content: '';
    line-height: 0;
  }
  .ipsGrid > [class*='ipsGrid_span'] {
    display: block;
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
  }
  .ipsGrid > .ipsGrid_span5 {
    width: 40.42553191489362%;
  }
  .ipsGrid > .ipsGrid_span6 {
    width: 48.5%;
  }
  .ipsGrid > .ipsGrid_span7 {
    width: 57.44680851063829%;
  }
  .ipsGrid > [class*='ipsGrid_span'] {
    float: left;
    margin-left: 2%;
  }
  .ipsGrid > [class*='ipsGrid_span']:first-child {
    margin-left: 0;
  }
  .feature {
    display: flex;
    align-items: center;
    margin-bottom: 200px;
  }

  .heading_large {
    font-size: 1.8em;
  }
  .empty {
    height: 400px;
  }
  .lastEmpty {
    height: 450px;
  }
  img {
    max-width: 100%;
  }

  .header-section {
    margin: 200px auto;
  }

  .gs_reveal {
    opacity: 0;
    visibility: hidden;
    transition: transform 0s;
  }
  .sm {
    font-size: 2rem;
  }
  .em {
    font-weight: bold;
    font-style: italic;
  }
  @media (max-width: 1000px) {
    .gs_reveal {
      opacity: 1;
      visibility: visible;
    }
    .feature {
      margin-bottom: 0px;
    }
    .current {
      width: 100%;
    }
    .ipsType_right {
      margin-bottom: 50px;
    }
    .featured-image-container {
      margin: 0;
      img {
        width: 100%;
      }
    }
    .feature,
    .ipsGrid {
      margin-bottom: 20px;
      /* display: block; */
      flex-direction: row;
      .ipsGrid_span7,
      .ipsGrid_span6,
      .ipsGrid_span5 {
        width: 45%;
        margin: 0;
        text-align: left;
      }
      .one {
        order: 1;
        margin-right: 2%;
      }
      .two {
        order: 2;
        padding-bottom: 20px;
        margin-top: 10px;
        &.ml {
          margin-left: 47%;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .feature,
    .ipsGrid {
      margin-bottom: 20px;
      /* display: block; */
      flex-direction: row;
      .ipsGrid_span7,
      .ipsGrid_span6,
      .ipsGrid_span5 {
        width: 100%;
        margin: 0;
        text-align: left;
      }
      .one {
        order: 1;
      }
      .two {
        order: 2;
        padding-bottom: 20px;
        margin-top: 10px;
        &.ml {
          margin-left: 0;
        }
      }
    }
  }
`

export default ExpWrapper
