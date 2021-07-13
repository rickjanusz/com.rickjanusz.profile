import React from 'react'
import SEO from '../components/SEO'
import PageWrapper from '../styles/PageWrapperStyles'
import StyledForm from '../styles/FormStyles'

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Me" />
      <h1>
        <span>Contact Me</span>
      </h1>
      <PageWrapper>
        <section>
          <StyledForm method="POST" data-netlify="true" name="contact">
            <fieldset>
              <input type="hidden" name="form-name" value="contact" />
              <legend>
                <span class="number">1</span> Contact Info
              </legend>
              <input
                type="text"
                aria-label="Name"
                name="name"
                placeholder="Your Name *"
              />
              <input
                type="email"
                aria-label="Email"
                name="email"
                placeholder="Your Email *"
              />
              <label for="job">
                Reason for Contact:
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
              </label>
            </fieldset>
            <fieldset>
              <legend>
                <span class="number">2</span> Additional Info
              </legend>
              <textarea
                aria-label="Additional info"
                name="Info"
                placeholder="Additional Information"
              ></textarea>
            </fieldset>
            <div data-netlify-recaptcha="true"></div>
            <input type="submit" value="Submit" aria-label="Submit" />
            <input type="reset" value="Reset" aria-label="Reset" />
          </StyledForm>
        </section>
      </PageWrapper>
    </>
  )
}
