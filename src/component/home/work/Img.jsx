import React from "react";

export default function Img(props) {
  console.log(props.key);
  let i=0;
  i++;
  return (
    <>
      <div className="slide">
        <img src={props.img[i].src} height={100} width={250} alt="" />
      </div>
    </>
  );
  
}
