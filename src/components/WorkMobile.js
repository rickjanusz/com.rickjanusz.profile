import React from 'react'
import ExpWrapper from '../styles/WorkStyles'

import anthem from '../assets/company_anthem.jpg'
import dimg from '../assets/company_dimg.jpg'
import epsilon from '../assets/company_epsilon.jpg'
import e79 from '../assets/company_e79.jpg'
import manifest from '../assets/company_manifest.jpg'

export default function WorkMobile() {
  return (
    <>
      <ExpWrapper>
        <div className="cInnerContent">
          <div className="feature ipsGrid">
            <div className="two">
              <div className="heading_large">
                <div className="sm">2019-current</div>
                <h3>Creative Director</h3>
              </div>
              <div className="sm em">Epsilon (formerly Conversant)</div>
              <div>Creative Innovation &amp; Capabilities</div>
            </div>

            <div className="one featured-image-container current">
              <div className="card">
                <img width="600" src={epsilon} alt="" />
              </div>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="two ipsGrid_span6">
              <div className="heading_large">
                <div className="sm">2017-2019</div>
                <h3>Assoc. Director</h3>
              </div>
              <div className="sm em">Epsilon (formerly Conversant)</div>
              <div>Creative Technology</div>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="two ipsGrid_span6">
              <div className="heading_large">
                <div className="sm">2016-2017</div>
                <h3>Sr. Manager</h3>
              </div>
              <div className="sm em">Epsilon (formerly Conversant)</div>
              <div>Creative Technology</div>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="two ipsGrid_span6">
              <div className="heading_large">
                <div className="sm">2014-2016</div>
                <h3>
                  Sr. Creative Tech, <br /> Team Lead
                </h3>
              </div>
              <div className="sm em">Epsilon (formerly Conversant)</div>
              <div>Creative Technology</div>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="one featured-image-container ipsGrid_span6 ">
              <div className="card">
                <img width="600" src={manifest} alt="" />
              </div>
            </div>
            <div className="two ipsGrid_span6 ipsType_left">
              <div className="heading_large">
                <div className="sm">2012-2014</div>
                <h3>Sr. Tech Architect</h3>
              </div>
              <div className="sm em">Manifest Digital</div>
              <div>Tech Team</div>
              <p></p>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="two ipsGrid_span6">
              <div className="heading_large">
                <div className="sm">2012-2012</div>
                <h3>Developer</h3>
              </div>
              <div className="sm em">Anthem! Digital Worldwide</div>
              <div>Tech Team</div>
              <p></p>
            </div>
            <div className="one featured-image-container ipsGrid_span6 ">
              <div className="card">
                <img width="600" src={anthem} alt="" />
              </div>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="one featured-image-container ipsGrid_span6 ">
              <div className="card">
                <img width="600" src={e79} alt="" />
              </div>
            </div>
            <div className="two ipsGrid_span6 ipsType_left">
              <div className="heading_large">
                <div className="sm">2009-2012</div>
                <h3>Front-end Developer</h3>
              </div>
              <div className="sm em">Element79 of DDB</div>
              <div>Tech Team</div>
              <p></p>
            </div>
          </div>

          <div className="feature ipsGrid">
            <div className="two ipsGrid_span6">
              <div className="heading_large">
                <div className="sm">2008-2009</div>
                <h3>Lead Production Designer</h3>
              </div>
              <div className="sm em">Disney Interactive Media Group</div>
              <div>Interactive Media Group</div>
              <p></p>
            </div>
            <div className="one featured-image-container ipsGrid_span6 ">
              <div className="card">
                <img width="600" src={dimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </ExpWrapper>
    </>
  )
}
