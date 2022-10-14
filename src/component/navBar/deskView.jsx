import React from 'react'
import img from "../../Img/FedLogo.png";
export default function deskView() {
  return (
    <>
    <nav id="desNav">
            <div className="navmDiv">
              <a href="/" className="linkClass">
                <div className="LogoDiv">
                  <img src={img} alt="" />
                  <p className="LogoFED">FED</p>
                </div>
              </a>
              <div className="listDiv">
                <ul id="NavUl">
                  <a href="/" className="linkClass">
                    <li id="newLiTag">
                      <p className="active" id="HomeActive">
                        Home
                      </p>
                    </li>
                  </a>
                  {/* <a href="#KnowUs" class="linkClass" id="KnowUsATag">
                          <li>About Us</li>
                      </a> */}
                  <a href="./Omega.html" className="linkClass">
                    <li>Omega</li>
                    {/* <div id="NewDiv">
                              <div class="ArrowDiv">
                                  <div class="NavArrow"></div>
                              </div>
                              <p id="NavNewPtag">New!</p>
                          </div> */}
                  </a>
                  <a href="/event.html" className="linkClass">
                    <li>
                      Events
                      {/* <div class="ArrowDiv">
                                  <div class="NavArrow"></div>
                              </div>
                              <p id="NavNewPtag">New!</p> */}
                    </li>
                  </a>
                  <a href="/Podcasts.html" className="linkClass">
                    <li>Podcasts</li>
                  </a>
                  <a href="./Team.html" className="linkClass">
                    <li>Our Team</li>
                  </a>
                  <a href="#ContactUs" className="linkClass" id="ContactUsATag">
                    <li>Contact Us</li>
                  </a>
                </ul>
              </div>
            </div>
          </nav>
    </>
  )
}
