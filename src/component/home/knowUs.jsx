import React from "react";
import Content from "./knowUs/content";
import Believer from "./knowUs/believer";
import women from "../../Img/image 7.png";
import why from "../../Img/why.png";
import how from "../../Img/how.png";
import what from "../../Img/what.png";

export default function knowUs() {
  const knowus = [
    {
      class: "whyDiv",
      img: `${why}`,
      for: "Why?",
      content1: "We aim to nurture entrepreneurship through",
      content2: "creative, authentic, and efficient techniques.",
      content3: "",
    },
    {
      class: "HowDiv",
      img: `${how}`,
      for: "How?",
      content1:
        "Strong co-operation between members that our organization instills is how we can accomplish all of this.",
      content2:
        " There is no I, only we. We exist as a team, function as a team,",
      content3: "and execute as a team.",
    },
    {
      class: "WhatDiv",
      img: `${what}`,
      for: "What?",
      content1: "Through our social media handles, we",
      content2:
        " arrange informative podcasts, high-quality events, and inspiring and thought-provoking material.",
      content3: "",
    },
  ];

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
          <Content knowus={knowus[0]} />
          <Content knowus={knowus[1]} />
          <Content knowus={knowus[2]} />
        </div>
        {/* Believe */}
        <Believer />
      </section>
    </>
  );
}
