import React from 'react'

export default function content() {
  return (
    <>
    <div className="con" />
          <div id="NavListMobo">
            <div className="NavListMoboChild">
              <div className="NewMoboList">
                <a href="/" className="linkClass">
                  <p className="active" id="HomeActiveMobo">
                    Home
                  </p>
                </a>
                {/* <div class="NavNewMobo">
                      <div class="NavMoboArrow"></div>
                      <p class="NavNew">New</p>
                  </div> */}
              </div>
              <div className="NewMoboList">
                {/* <a href="#KnowUs" class="linkClass" onClick={ToggleHam}" id="KnowUsMobo">
                      <p>About Us</p>
                  </a> */}
                <a href="./Omega.html" className="linkClass">
                  <p>Omega</p>
                </a>
                <div className="NavNewMobo" id="newEvent">
                  <div className="NavMoboArrow" />
                  <p className="NavNew">New</p>
                </div>
              </div>
              <div className="NewMoboList">
                <a href="/event.html" className="linkClass">
                  {" "}
                  Events{" "}
                </a>
                <div className="NavNewMobo">
                  <div className="NavMoboArrow" />
                  <p className="NavNew">New</p>
                </div>
              </div>
              <div className="NewMoboList">
                <a href="/Podcasts.html" className="linkClass">
                  <p>Podcasts</p>
                </a>
                {/* <div class="NavNewMobo">
          <div class="NavMoboArrow"></div>
          <p class="NavNew">New</p>
      </div> */}
              </div>
              <div className="NewMoboList">
                <a href="./Team.html" className="linkClass">
                  <p>Our Team</p>
                </a>
                {/* <div class="NavNewMobo">
          <div class="NavMoboArrow"></div>
          <p class="NavNew">New</p>
      </div> */}
              </div>
              <div className="NewMoboList">
                <a
                  href="#ContactUs"
                  className="linkClass"
                  onclick="ToggleHam(event)"
                  id="ContactUsATagMobo"
                >
                  <p>Contact Us</p>
                </a>
                {/* <div class="NavNewMobo">
          <div class="NavMoboArrow"></div>
          <p class="NavNew">New</p>
      </div> */}
              </div>
            </div>
          </div>
    </>
  )
}
