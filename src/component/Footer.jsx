import React from "react";
import "./footer/footer.css"
import DeskView from "./footer/deskView";
import MobView from "./footer/mobView";

export default function Footer() {
  return (
    <>
      <DeskView/>
      {/* footer Mobo*/}
      <MobView/>
    </>
  );
}
