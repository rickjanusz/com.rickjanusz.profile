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
const FormStyles = styled.form`
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 0 auto 10px;
  padding: 20px;
  background: ${(props) => props.theme.light};
  border: 10px solid white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  fieldset {
    border: none;
  }
  legend {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }
  input[type='text'],
  input[type='date'],
  input[type='datetime'],
  input[type='email'],
  input[type='number'],
  input[type='search'],
  input[type='time'],
  input[type='url'],
  textarea,
  select {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    font-size: 1.5rem;
    margin: 0;
    outline: 0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #e8eeef;
    color: ${(props) => props.theme.bodyText};
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
  }
  input[type='text']:focus,
  input[type='date']:focus,
  input[type='datetime']:focus,
  input[type='email']:focus,
  input[type='number']:focus,
  input[type='search']:focus,
  input[type='time']:focus,
  input[type='url']:focus,
  textarea:focus,
  select:focus {
    background: #d2d9dd;
  }
  textarea {
    height: 15vh;
  }
  select {
    -webkit-appearance: menu-list-button;
    height: 55px;
  }
  .number {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.light};
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
    border-radius: 8px 0px 8px 0px;
  }

  input[type='submit'],
  input[type='reset'],
  input[type='button'] {
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #fff;
    margin: 0 auto;
    background: ${(props) => props.theme.primary};
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 100%;
    border: 1px solid ${(props) => props.theme.dark};
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
  }
  input[type='submit']:hover,
  input[type='reset']:hover,
  input[type='button']:hover {
    background: ${(props) => props.theme.primary};
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
          <FormStyles method="POST" data-netlify="true" name="contact">
            <fieldset>
              <input type="hidden" name="form-name" value="contact" />
              <legend>
                <span class="number">1</span> Contact Info
              </legend>
              <input type="text" name="name" placeholder="Your Name *" />
              <input type="email" name="email" placeholder="Your Email *" />
              <label for="job">Reason for Contact:</label>
              <select id="job" name="field4">
                <optgroup label="Reason for Contact">
                  <option value="" selected>
                    {' '}
                    - Select -{' '}
                  </option>
                  <option value="employment">Employment</option>
                  <option value="networking">Networking</option>
                  <option value="speaking">Speaking/Training</option>
                  <option value="other">Other</option>
                </optgroup>
              </select>
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">2</span> Additional Info
              </legend>
              <textarea
                name="Info"
                placeholder="Additional Information"
              ></textarea>
            </fieldset>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </FormStyles>
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
