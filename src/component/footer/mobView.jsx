import React from 'react'
import logo from "../../Img/FedLogo.png";
import spotify from "../../Img/spotify.png";
import linkedin from "../../Img/linkedin.png";
import youtube from "../../Img/youtube.png";
import insta from "../../Img/instagram.png";
export default function mobView() {
  return (
    <>
    <section id="footerMobo">
        <footer className="MoboFooter">
          <div className="MoboFooterLogoDiv">
            <div className="logo">
              <img src={logo} alt="" className="imglogo" />
              <p className="LogoFED" id="FED">
                FED
              </p>
            </div>
            <div className="iconsDiv">
              <a
                href="https://www.instagram.com/fedkiit"
                className="linkClass Hidea650"
                target="_blank"
              >
                <img src={insta} alt="instagram" className="IconsTag" />
              </a>
              <a
                href="https://www.linkedin.com/company/fedkiit/"
                className="linkClass Hidea650"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" className="IconsTag" />
              </a>
              <a
                href="https://open.spotify.com/show/3s0jcteh4gcNcJeECstoMj?si=G7NjOL73Qxq4K6r3fy_-VA&utm_source=whatsapp"
                className="linkClass Hidea650"
                target="_blank"
              >
                <img src={spotify} alt="spotify" className="IconsTag" />
              </a>
              <a
                href="https://youtube.com/channel/UC7LjeEyGyr656BU2VpCbCJA"
                className="linkClass Hidea650"
                target="_blank"
              >
                <img src={youtube} alt="youtube" className="IconsTag" />
              </a>
            </div>
          </div>
          <div className="FooterRightDiv">
            {/* <p class="newsletter">Newsletter</p>
    <div class="newsletterPositionDiv" id="news1">
        <input type="text" name="" id="newsLettrinp" placeholder="Enter Your Email" />
        <button class="GetStarted">Get Started</button>
    </div> */}
          </div>
          <div className="FooterFlexDiv">
            <div className="FooterDes">
              <div className="row1">
                <h4>Community</h4>
                <a href="./#ContactUs">Contact</a>
                <a href="./Team.html">Member</a>
              </div>
              <div className="row2">
                <h4>About Us</h4>
                <a href="./#KnowUs">Manifesto</a>
                <a href="./#work">Partner</a>
              </div>
            </div>
          </div>
          <div className="footerBottomDiv">
            <div className="footerBottomDivLeftDiv">
              <p>
                Made with ❤️ <br />
                from Federation of Entrepreneurship Development
              </p>
            </div>
            <div className="footerBottomDivRightDiv">
              <p>
                To boost the confidence of aspiring entrepreneurs worldwide.
                <br />
                Together we can change the world.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
