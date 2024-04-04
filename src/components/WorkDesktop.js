import React from 'react'
import ExpWrapper from '../styles/WorkStyles'

import anthem from '../assets/company_anthem.jpg'
import dimg from '../assets/company_dimg.jpg'
import epsilon from '../assets/company_epsilon.jpg'
import e79 from '../assets/company_e79.jpg'
import manifest from '../assets/company_manifest.jpg'
import bb from '../assets/company_bb.jpg'
import redtail from '../assets/company_redtail.jpg'

export default function WorkDesktop() {
  return (
    <>
      <ExpWrapper>
        <div className="cInnerContent">


          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2022-current</div>
                <h3>Owner</h3>
              </div>
              <div className="gs_reveal sm em">Redtail Market</div>
              <div className="gs_reveal">Technical Creative Director</div>
              <p className="gs_reveal"></p>
            </div>
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromBottomFirst">
              <div className="card">
                <img width="600" src={redtail} alt="" />
              </div>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone" >
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromTop">
              <div className="card">
                <img width="600" src={bb} alt="" />
              </div>
            </div>
            <div className="two ipsGrid_span6 ipsType_left">
              <div className="heading_large gs_reveal">
                <div className="sm">2021-current</div>
                <h3>Maker, Owner</h3>
              </div>
              <div className="gs_reveal sm em">Bumblin Bee Candle</div>
              <div className="gs_reveal">Technical Creative Director</div>
            </div>
          </div>


          <div className=" feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone" id="trigger1">
            <div className="two ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2019-2021</div>
                <h3>Creative Director</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon, Publicis Groupe
              </div>
              <div className="gs_reveal">
                Creative Innovation &amp; Capabilities
              </div>
            </div>

            <div
              id="pinnedContent"
              className="one featured-image-container ipsGrid_span6 gs_reveal_fromTop"
            >
              <div className="card">
                <img width="600" src={epsilon} alt="" />
              </div>
            </div>
          </div>

          <div className="empty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ml ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2017-2019</div>
                <h3>Assoc. Director</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon, Publicis Groupe
              </div>
              <div className="gs_reveal">Creative Technology</div>
            </div>
          </div>

          <div className="empty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ml ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2016-2017</div>
                <h3>Sr. Manager</h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon, Publicis Groupe
              </div>
              <div className="gs_reveal">Creative Technology</div>
            </div>
          </div>

          <div className="lastEmpty feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ml ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2014-2016</div>
                <h3>
                  Sr. Creative Tech, <br /> Team Lead
                </h3>
              </div>
              <div className="gs_reveal sm em">
                Epsilon, Publicis Groupe
              </div>
              <div className="gs_reveal">Creative Technology</div>
            </div>
          </div>

          <div id="releaseTrigger1"></div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromTop">
              <div className="card">
                <img width="600" src={manifest} alt="" />
              </div>
            </div>
            <div className="two ipsGrid_span6 ipsType_left">
              <div className="heading_large gs_reveal">
                <div className="sm">2012-2014</div>
                <h3>Sr. Tech Architect</h3>
              </div>
              <div className="gs_reveal sm em">Manifest Digital</div>
              <div className="gs_reveal">Tech Team</div>
              <p className="gs_reveal"></p>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2012-2012</div>
                <h3>Developer</h3>
              </div>
              <div className="gs_reveal sm em">Anthem! Digital Worldwide</div>
              <div className="gs_reveal">Tech Team</div>
              <p className="gs_reveal"></p>
            </div>
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromTop">
              <div className="card">
                <img width="600" src={anthem} alt="" />
              </div>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromTop">
              <div className="card">
                <img width="600" src={e79} alt="" />
              </div>
            </div>
            <div className="two ipsGrid_span6 ipsType_left">
              <div className="heading_large gs_reveal">
                <div className="sm">2009-2012</div>
                <h3>Front-end Developer</h3>
              </div>
              <div className="gs_reveal sm em">Element79 of DDB</div>
              <div className="gs_reveal">Tech Team</div>
              <p className="gs_reveal"></p>
            </div>
          </div>

          <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="two ipsGrid_span6 ipsType_right">
              <div className="heading_large gs_reveal">
                <div className="sm">2008-2009</div>
                <h3>Lead Production Designer</h3>
              </div>
              <div className="gs_reveal sm em">
                Disney Interactive Media Group
              </div>
              <div className="gs_reveal">Interactive Media Group</div>
              <p className="gs_reveal"></p>
            </div>
            <div className="one featured-image-container ipsGrid_span6 gs_reveal gs_reveal_fromTop">
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
