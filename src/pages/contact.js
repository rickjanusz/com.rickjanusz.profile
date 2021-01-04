import React from 'react'
import SEO from '../components/SEO'
import Heading1 from '../components/Heading1'
import callMe from '../assets/qr/call.png'
import addMe from '../assets/qr/vcard.png'
import emailMe from '../assets/qr/email.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Me" />
      <Heading1>
        <h1>Contact Me</h1>
      </Heading1>
      <section>
        <p>Form?</p>
      </section>
      <Wrapper>
        <div>
          <p>Call Send to mobile (phone icon)</p>
          <img src={callMe} height="200" />
        </div>
        <div>
          <p>Email Send to mobile (phone icon)</p>
          <img src={emailMe} height="200" />
        </div>
        <div>
          <p>VCard Send to mobile (phone icon)</p>
          <img src={addMe} height="200" />
        </div>
      </Wrapper>
    </>
  )
}
