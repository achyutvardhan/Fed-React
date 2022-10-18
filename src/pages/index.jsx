import React from "react";
import Carousel from "../component/home/Carousel";
import KnowUs from "../component/home/knowUs";
import Testimonial from "../component/home/testimonial";
import Work from "../component/home/work";
import ContactUs from "../component/home/contactUs";
import "../css/home.css";
import "../css/carousel.css";
import "../css/flicker.css";

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
