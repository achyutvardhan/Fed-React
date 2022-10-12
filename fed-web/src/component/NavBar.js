import React from "react";
import img from "./Img/FedLogo.png";
import { ToggleHam } from "./js/nav";
export default function NavBar(props) {
  return (
    <>
      <div className="page">
        <div className="pageExt">
          {/* destop nav */}
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
          {/* mobo nav */}
          <nav id="NavMObo">
            <div id="navMOboCon">
              <div id="navtoggleDiv" onClick={ToggleHam}>
                <div className="hamburger" id="ham">
                  <div id="bur1" />
                  <div id="bur2" />
                  <div id="bur3" />
                </div>
              </div>
              <a href="/" className="linkClass">
                <div className="LogoDiv">
                  <img src={img} alt="FEDLogoImg" />
                  <p className="LogoFED">FED</p>
                </div>
              </a>
              <div id="Navdarkright">dark</div>
            </div>
          </nav>
          {/* content on Nav */}
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
        </div>
      </div>
    </>
  );
}
