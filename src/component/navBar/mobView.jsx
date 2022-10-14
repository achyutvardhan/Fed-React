import React from 'react'
import { ToggleHam } from "../js/nav";
import img from "../../Img/FedLogo.png";
export default function mobView() {
  return (
    <>
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
    </>
  )
}
