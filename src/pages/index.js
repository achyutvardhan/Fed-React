import React from "react";
import '../component/css/home.css'
import '../component/css/carousel.css'
import '../component/css/flicker.css'
import women from '../component/Img/image 7.png'
import why from '../component/Img/why.png'
import how from '../component/Img/how.png'
import what from '../component/Img/what.png'
export default function index() {
  return (
    <>
      <section id="carousel">
        <div className="carousel">
          <div className="slideshow-container">
            {/* <a href="./Omega.html"> */}
            <div className="mySlides fade">
              <div className="carouselImg" />
              {/* <img src="./Img/header/Maskgroup.png" class="carouselImg" /> */}
              <div className="carouselInnerDiv">
                <div className="text">
                  {/* <p class="textFed">
                                      <span>Omega</span>
                                      <br />
                                  </p> */}
                  {/* <p class="textFedDescription">
                                      The Federation of Entrepreneurship Development is the student body of KIIT
                                      TBI
                                      which aims to bring all ideas, potential startups under one umbrella ☂️
                                  </p> */}
                  {/* <div class="regmDiv">
                                      <div class="regbtn">Register Now</div>
                                  </div> */}
                </div>
              </div>
            </div>
            <div className="mySlides fade">
              <div className="carouselImg2" />
              {/* <img src="./Img/background.png" class="carouselImg" /> */}
              <div className="carouselInnerDiv">
                <div className="text">
                  <p className="textFed">
                    Federation of
                    <span>Entrepreneurship</span>
                    <br /> Development
                  </p>
                  <p className="textFedDescription">
                    The Federation of Entrepreneurship Development is the
                    student body of KIIT TBI which aims to bring all ideas,
                    potential startups under one umbrella ☂️
                  </p>
                </div>
              </div>
            </div>
            <div className="mySlides fade">
              <div className="carouselImg4" />
              {/* <img src="./Img/header/pexels-anastasia-shuraeva-7278606.jpg" class="carouselImg" /> */}
              <div className="carouselInnerDiv">
                <div className="text">
                  <p className="textFed">
                    It's all about
                    <span>Entrepreneurial</span>
                    <br /> Knowledge and Growth!
                  </p>
                  <p className="textFedDescription">
                    Knowledge is power? No. Knowledge on its own is nothing, but
                    the application of useful knowledge, now that is powerful.”―
                    Rob Liano
                  </p>
                </div>
              </div>
            </div>
            <div className="mySlides fade">
              <div className="carouselImg3" />
              {/* <img src="./Img/header/pexels-fauxels-3182774.jpg" class="carouselImg" /> */}
              <div className="carouselInnerDiv">
                <div className="text">
                  <p className="textFed">
                    Making
                    <span> 'start-ups' easier</span>
                    <br /> for you to understand and begin with!
                  </p>
                  <p className="textFedDescription">
                    Peace is a journey of a thousand miles and it must be taken
                    one step at a time.”― Lyndon B. Johnson
                  </p>
                </div>
              </div>
            </div>
            <a className="prev" onclick="plusSlides(-1)">
              ❮
            </a>
            <a className="next" onclick="plusSlides(1)">
              ❯
            </a>
          </div>
          <br />
          <div id="dotsDiv">
            <span className="dot" onclick="currentSlide(1)" />
            <span className="dot" onclick="currentSlide(2)" />
            <span className="dot" onclick="currentSlide(3)" />
            <span className="dot" onclick="currentSlide(4)" />
            {/* <span class="dot" onclick="currentSlide(4)"></span> */}
            {/* <span class="dot" onclick="currentSlide(5)"></span> */}
            {/* <span class="dot" onclick="currentSlide(6)"></span> */}
          </div>
        </div>
      </section>
      {/* Know Us */}
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
              <span>boost the confidence</span> of aspiring entrepreneurs.
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
              <span>providing a hospitable and welcoming environment</span>{" "}
              among team members, collaborators, and participants.
            </p>
          </div>
        </div>
      </section>
      {/* testimonial */}
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
      {/* we work with */}
      <section id="work">
        <div className="WeWorkWith">
          <p className="WeWorkWithPTag">
            We <span>work</span> with...
          </p>
          {/* Slider */}
          <div className="slideParentDiv">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1258076387224637441/TV3prLsx_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.anuvaa.com/wp-content/uploads/2021/07/UI-UX-training-lab-e1630916963657.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1190524386262102017/IM2yFfjO_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEUAAAD/////3ln/5Fv/4loiHgz/4Fn/5lz/3Vj8/PzKysr29vbu7u75+fnj4+P/6V3X19eRkZGbm5uCgoImJia2trYgICCtra2ioqLKsEZVVVXz1FXPz8+goKDh4eE2NjYuLi67o0GNezFeXl6Dci2UgTMsJg98bCuqlDtPRRtHR0dubm4SEhK9vb19fX0jIyPewk1oWyRdUSDZvUtGPRgVEwfRtkmfizdLS0usljw4MRM9PT0YGBgoIw1qXSVycnKvQXOYAAAH+ElEQVR4nO2aaVfiShCGIR2TsAoCsqqgo7gAouA+c/3//+p2VXUnnYiamXO5nDPnfT44nU4nqUqtHaZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/CtL9c3e9aiC2yHoZBEIQ/di3H1rgKA48I/1or3u+zgl4QPexalG2x9Ek/5fn9XUuyLfaWYRD273Uo/rNrUbbGj6FOM/dhMNy1IFvmXKnTXcuwZVbqbzfiRRBOdy3DlnnaX+5ahG1zuc65cNColn9uVZT/jvXV2lb6q/urzRr+urq6SE1cFzWNDSub9dHZbzx80Go2W4PfuCDNz3a7fTj7blWowmB5RaO9faVUtKk97eszw3NnokMalj4uvKH5m3zijbvlUlFotL5cedgdlXvv4+z0kb28VO3R8cT3PiXwA4KHKh4656Xp0SjRc0Q3rn6UpUvzx7kUfCu6VD7qeFOud2RUlzXV7ol7/t29/kjnyf3QoOSvUvxXdNEHehjxkFboY27lPFnEa3ya9l+TZ27w0vInmm+gV0wzSp+eNeJHzJJF5XGyYu5eTc982NtE4THwIs9/peFKD4OhWTd7IhXVWg8fpiryIvVEZ8zda3TX+UexP9N8A+WMhsW6e/akJpPk8WN3VWLr46yGnzAk60x46HhhgTZVdIaHlz6Z072K79qNDxfl+TiZ7+TSsJ7V0L3usGaNVjBpLSZ+asmd7X36nFfyQP/CqhREyakgPlzqoXpyrjrhuzbtYce+xLf0/JewDsdn4/FZt2LETMIsVr+mD87SL+JAlohlRwe9bmde/uKR0zA24bm2lO/oofUKllZXL3KvGvDdFwX3WXQkwZ+rXNy6BmnVXNlNwhLaJkEXe7Fby/1ldkPePh9GgbeKy97Ej4wJC31SxFlJGvKOkYybMmFGkxYfURj1rFDfc5YytyQTm2yeHYsN7P1PCrOOTEnMHWTMblgPdTHwkp3gKXmmmLAwDKw1k+MXfikqrbqu63z3N3M0j2XhIlLJo6C5hTHBTIxmU5SbQ27s0rE+MZDYe0+emr3tna/VowoReNzHTDmbSHK5IEu5uyddOxSXf23czM5RbHVojkwY6aRQdeX8GrHHLQ1vrP8ZnzWFrmmd/4gH3COe2SeZUK1n7nqndfOXr/9oP2Wvm/I3KCX7ianSFSHZ5D/oBBqF3OvodBusNohnDuLS3f6dVNqQtfOyk1ONU8hMt83/tExUlpzL2Etstq01krh/pXq3EmXo3x9S48M7PjvR2opGmouXgCs+j1XiyYay640tK2BX0nq+VFotfsAkGrFTJUnYHedpB/bdukXy2t50GXtnRBF3GQbDNWm4tmc9JTnnqu/71OxIKtXvwwRk2gDWQ+Leoia65mukP1XQtALNQtvO8gOqroaH6RJii+GPOCWeKh1X/dAfSirlRuUhsDabLkNfeeePNvFQQ+u7bXemdUmsIQH5ba9PnGT1a1hDHMrb0hsHHhylW8GytWHLuda+m1UQRazNndKyD5VaFl4p00iavKMh5ZPpvs62l9ThRBKhS+3LKr33Z6XKMm5nRM3XlWaquNONNa3QM2sf9phjR33yHqdklmzKG9p6d6nbzCBQfYpEz6ZJ7syWBfFlozEXSjZu5nu425YuMqKWc2koV1WTzivekEgKepslrWHSg0s54pwrqaDXnY/mcU0kDdkWD7ooeiFF1sSqRRbWw0c9oHq5khLBZ+5D7sBd8Wbxcwo2ryZOc1DIg1jqWfvitYSWzcw/E9Pw346JCe4GTFkhlTb1+FqdyKjzNPRPrdLSt1D1k7i7pMQyfNJn/Etey0mVY/XsqMlVaeyqwuW5kkRjvi1+LxbVpioTvqldn2hoY2JRjac272440lK/MO2peGOx5iGrtCLXJePuc+14jDtwcv0S1SypgCZyjGs2rUi5Ek2qxlWccXrXJ0qwYqOe7c+rH15yDNUDz3ciivZ9ptk+JQ1NSzMJacvvmyO9NZRYPTG6pBvvZ/uokvP8nBpyjXsWy3zMzLGGlfQM9wUiQuvt7P19sVjY/pvtFPhJWnzhTS5blVzYs19L15NhtLz8JWOyPDu33JQygtvWN61rdmKJ8iDB17lpjozc7zJ/mFGQ3mhKw5JUlVZ6VdV893vi4qD69rsZG1Wa8OGGjMmckp0lVtlKVF0lVqSyi1f9jCtcvo7GvK4Ea0J5eZ3mkd721YyG7la3YSpD9huIbRX7rGJof0XjfR93ar/4hPkIk2ISxLE6qBgTcRyaNopzGrvmyNH7e9Jb/IqNXumyJQNJ/LntT/XdXp4N1zirsoqh2evJT6OKvJH6nSgINvxEysa1G+NbM9mqFBumCllXskU8p4LpTxN1W7OlHtScl9BIbNhwtruNjIZJcLyEfvhoxg/9UPmKP8VcPIa+76c3gcKpp3x//9PfpOJEUxAj5nTSgniEwfnI4u6/js2YY7bRTG2sm2kFq87Ju4kTbK/nk4kRfq2Hm/+vwvRl8nKx8UzBZm1TA29aH7bcX9EkFUrHB059mblBFXdrg4PWOHvx4rja6By0bgbP19fPf/7VPAedYt5d/Sbah+lj+XpjHGFkNdwxi/L8tyz3NRx7zzJuZTz476B97HwRbdXrR7sUZkuMb79fAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/H/8C3YnfcdgolCGAAAAAElFTkSuQmCC"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.thewriteorder.com/_nuxt/img/b4b8065.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/jpeg;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://static.businessworld.in/article/article_extra_large_image/1615280040_etlgX6_Elearnmarkets.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2021/01/Axure_Logo.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="./Img/sponsor/Rectangle 876.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://blog.stockedge.com/wp-content/uploads/2020/08/SE-new-logo.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1258076387224637441/TV3prLsx_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.anuvaa.com/wp-content/uploads/2021/07/UI-UX-training-lab-e1630916963657.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1190524386262102017/IM2yFfjO_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/png;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.thewriteorder.com/_nuxt/img/b4b8065.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/jpeg;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://static.businessworld.in/article/article_extra_large_image/1615280040_etlgX6_Elearnmarkets.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2021/01/Axure_Logo.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="./Img/sponsor/Rectangle 876.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://blog.stockedge.com/wp-content/uploads/2020/08/SE-new-logo.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1258076387224637441/TV3prLsx_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.anuvaa.com/wp-content/uploads/2021/07/UI-UX-training-lab-e1630916963657.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1190524386262102017/IM2yFfjO_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/png;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.thewriteorder.com/_nuxt/img/b4b8065.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/jpeg;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://static.businessworld.in/article/article_extra_large_image/1615280040_etlgX6_Elearnmarkets.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2021/01/Axure_Logo.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="./Img/sponsor/Rectangle 876.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://blog.stockedge.com/wp-content/uploads/2020/08/SE-new-logo.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1258076387224637441/TV3prLsx_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.anuvaa.com/wp-content/uploads/2021/07/UI-UX-training-lab-e1630916963657.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://pbs.twimg.com/profile_images/1190524386262102017/IM2yFfjO_400x400.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/png;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://www.thewriteorder.com/_nuxt/img/b4b8065.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/jpeg;base64,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"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://static.businessworld.in/article/article_extra_large_image/1615280040_etlgX6_Elearnmarkets.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2021/01/Axure_Logo.png"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="./Img/sponsor/Rectangle 876.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://blog.stockedge.com/wp-content/uploads/2020/08/SE-new-logo.jpg"
                    height={100}
                    width={250}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pTagDivWork">
            <p className="workptagDes">
              We wish to express our deepest gratitude to our sponsors for their
              steadfast support and generosity, and for their dedication to
              making a difference in the entrepreneurial community by supporting
              grassroots initiatives.
            </p>
          </div>
        </div>
      </section>
      {/* ContactUs */}
      <section id="ContactUs">
        {/* business */}
        <div className="businessMDiv">
          <div className="businessMDivleft">
            <p className="LetsTalkBusiness">
              Let’s Talk <span>Business</span>
            </p>
            <p className="LetsTalkBusinessSubtitle">
              We'd love to hear from you! Whether you are curious about how our
              society works, how you can participate in our webinars and events,
              any recent updates or anything that interest you - we're ready to
              answer any and all of your questions!
            </p>
          </div>
          <div className="businessMDivright">
            <form method="POST" name="google-sheet">
              <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="" required="" />
              </div>
              <div>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" id="" required="" />
              </div>
              <div>
                <label htmlFor="Message" id="message">
                  Message:
                </label>
                <textarea
                  name="Message"
                  id=""
                  cols={30}
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" name="submit" id="send">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="popUPSucessDiv" id="add">
        <div className="popUpChildDivHome">
          We appreciate you reaching out! We will surely respond soon!
        </div>
      </div>
    </>
  );
}
