import React from "react";
import DeskView from "./navBar/deskView";
import MobView from "./navBar/mobView";
import Content from "./navBar/content";
import "./navBar/nav.css"
export default function NavBar(props) {
  return (
    <>
      <div className="page">
        <div className="pageExt">
          {/* destop nav */}
          <DeskView/>
          {/* mobo nav */}
          <MobView/>
          {/* content on Nav */}
          <Content/>
        </div>
      </div>
    </>
  );
}
