import React from "react";
import Carousel from "../component/home/Carousel";
import KnowUs from "../component/home/KnowUs";
import Testimonial from "../component/home/Testimonial";
import Work from "../component/home/Work";
import ContactUs from "../component/home/ContactUs";
import "./index-css/home.css";
import "./index-css/carousel.css";
// import "./index-css/flicker.css";

export default function index() {
  return (
    <>
      <Carousel/>
      {/* Know Us */}
      <KnowUs />
      {/* testimonial */}
      <Testimonial />
      {/* we work with */}
      <Work />
      {/* ContactUs */}
      <ContactUs />
      <div className="popUPSucessDiv" id="add">
        <div className="popUpChildDivHome">
          We appreciate you reaching out! We will surely respond soon!
        </div>
      </div>
    </>
  );
}
