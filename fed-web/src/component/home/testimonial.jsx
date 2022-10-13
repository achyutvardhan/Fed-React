import React from "react";

export default function testimonial() {
  return (
    <>
      <section id="testimonial">
        <p className="BelievePTag">
          What do <span>they say</span> about us?
        </p>
        <div className="testDivMain">
          <div className="testDivChild">
            <div className="testDiv">
              <p className="testpTag">
                “Amazing tournament... please inform any further tournaments you
                conduct.”
              </p>
              <div className="userDiv">
                {/* <img src="./Img/user.png" alt="user" class="UserIcon" /> */}
                <div className="userDisDiv">
                  <p className="userName">Ayan</p>
                  <p className="userPost">FED H2 Invitational</p>
                </div>
              </div>
            </div>
            <div className="testDiv">
              <p className="testpTag">
                “It was very informative indeed. i got to know much about
                digital art and how to make it. loved it.”
              </p>
              <div className="userDiv">
                {/* <img src="./Img/user.png" alt="user" class="UserIcon" /> */}
                <div className="userDisDiv">
                  <p className="userName">Avignya Kashyap</p>
                  <p className="userPost">NFT workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="SeeallDiv">
          <p className="Seeall">
            <a href="./Testimonial.html" className="linkClass">
              <span id="Seeall">See all</span> <span>&gt;</span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
