import React from "react";

export default function Img(props,i) {
  console.log(props);
  i=0;
  return (
    <>
      <div className="slide">
        <img src={props.img[0].src} height={100} width={250} alt="" />
      </div>
    </>
  );
  
}
