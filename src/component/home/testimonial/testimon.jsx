import React from "react";

export default function testimon(props) {
    console.log(props)
  return (
    <>
      <div className="testDiv">
        <p className="testpTag">
          {props.testi.testpTag}
        </p>
        <div className="userDiv">
          {/* <img src="./Img/user.png" alt="user" class="UserIcon" /> */}
          <div className="userDisDiv">
            <p className="userName">{props.testi.userName}</p>
            <p className="userPost">{props.testi.userPost}</p>
          </div>
        </div>
      </div>
    </>
  );
}
