import React from "react";
import DeskView from "./navBar/DeskView";
import MobView from "./navBar/MobView";
import Content from "./navBar/Content";
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
