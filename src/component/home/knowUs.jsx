import React from "react";
import women from "../../Img/image 7.png";
import why from "../../Img/why.png";
import how from "../../Img/how.png";
import what from "../../Img/what.png";

export default function knowUs() {
  return (
    <>
      <section id="KnowUs">
        <div className="KnowUsmDiv">
          <p id="KnowUspTag">
            <span className="KnowUspTag">Know us </span>
            better...
          </p>
          <img src={women} alt="" className="womenWithALaptop" />
          <p id="womenBelowText">
            Federation of Entrepreneurship Development (FED) is a group of KIIT
            TBI students that want to encourage individuals with entrepreneurial
            aspirations by bringing all prospective startup ideas together on
            one platform. By planning events to promote entrepreneurship
            awareness, FED connects you with the best resources, contacts, and
            mentors.
          </p>
        </div>
        {/* Why_What_How */}
        <div className="WhyHowWhatDiv">
          <div className="whyDiv">
            <img src={why} alt="" className="why" />
            <p className="questionpTag">
              <span>Why?</span>
            </p>
            <p className="CardDesPTag">
              We aim to nurture entrepreneurship through
              <span>creative, authentic, and efficient techniques.</span>
            </p>
          </div>
          <div className="HowDiv">
            <img src={how} alt="" className="how" />
            <p className="questionpTag">
              <span>How?</span>
            </p>
            <p className="CardDesPTag">
              Strong co-operation between members that our organization instills
              is how we can accomplish all of this.
              <span>
                {" "}
                There is no I, only we. We exist as a team, function as a team,
              </span>
              and execute as a team.
              <br />
              {/* We are able to do all of this because of
                      strong collaboration and hospitality among members of
                      society</span>, which our organization instills in the participants. */}
            </p>
          </div>
          <div className="WhatDiv">
            <img src={what} alt="" className="what" />
            <p className="questionpTag">
              <span>What?</span>
            </p>
            <p className="CardDesPTag">
              Through our social media handles, we
              <span>
                arrange informative podcasts, high-quality events, and inspiring
                and thought-provoking material.
              </span>
            </p>
          </div>
        </div>
        {/* Believe */}
        <p className="BelievePTag">
          What we <span>believe</span> in...
          <span id="appleIcon">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/48/thinking-face_1f914.png"
              alt=""
            />
          </span>
        </p>
        <div className="believeCenterDiv">
          <div className="believeCenterCol">
            <p>
              Being a <span>forum for young entrepreneurs</span> and assisting
              them in launching their businesses via providing useful
              information that indicates an organization's ability to{" "}
              <span> function as a cohesive one.</span>
            </p>
          </div>
          {/* <div class="believeCenterCol">
                  <p>
                      Providing useful information that indicates an organization's ability to <span>function as a
                          cohesive one.</span>
                  </p>
              </div> */}
          <div className="believeCenterCol">
            <p>
              Organizing entrepreneurial activities to
              <span> boost the confidence</span> of aspiring entrepreneurs.
            </p>
          </div>
          <div className="believeCenterCol">
            <p>
              Implementing an <span>industry-focused mindset</span> with a
              distinct perspective on things.
            </p>
          </div>
          <div className="believeCenterCol">
            <p>
              Aiming in
              <span>
                {" "}
                providing a hospitable and welcoming environment
              </span>{" "}
              among team members, collaborators, and participants.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
