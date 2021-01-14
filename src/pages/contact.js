import React from 'react'
import SEO from '../components/SEO'
import callMe from '../assets/qr/call.png'
import addMe from '../assets/qr/vcard.png'
import emailMe from '../assets/qr/email.png'
import PageWrapper from '../styles/PageWrapperStyles'
import styled from 'styled-components'

// console.clear()

const Wrapper3Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  transition: all 1s;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Me" />
      <h1>
        <span>Contact Me</span>
      </h1>
      <PageWrapper>
        <section>
          <p>Form?</p>
        </section>
        <Wrapper3Col>
          <div>
            <p>
              Call Send to mobile <br />
              (phone icon)
            </p>
            <img src={callMe} height="200" alt="call me" />
          </div>
          <div>
            <p>
              Email Send to mobile <br />
              (phone icon)
            </p>
            <img src={emailMe} height="200" alt="email me" />
          </div>
          <div>
            <p>
              VCard Send to mobile <br />
              (phone icon)
            </p>
            <img src={addMe} height="200" alt="download my info" />
          </div>
        </Wrapper3Col>
      </PageWrapper>
    </>
  )
}
