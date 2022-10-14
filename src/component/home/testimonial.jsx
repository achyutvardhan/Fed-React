import React from "react";
import Testimon from "./testimonial/testimon";
export default function testimonial() {
const testi = [ 
  {
    testpTag : '“Amazing tournament... please inform any further tournaments youconduct.”',
    userName : 'Ayan',
    userPost : 'FED H2 Invitational'
  },
  {
    testpTag : '“It was very informative indeed. i got to know much about digital art and how to make it. loved it.”',
    userName : 'Avignya Kashyap',
    userPost : 'NFT workshop'
  }
]

  return (
    <>
      <section id="testimonial">
        <p className="BelievePTag">
          What do <span>they say</span> about us?
        </p>
        <div className="testDivMain">
          <div className="testDivChild">
            <Testimon testi= {testi[0]}/>
            <Testimon testi = {testi[1]}/>
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
