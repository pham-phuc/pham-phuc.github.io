import React, { useState } from "react";
import Content from "./component/Content";
const Header = () => {
  const [isClick, setClick] = useState("false");
  const handler = ()=>{
    setClick(!isClick);
  }
  return (
    <div className="togger">
      <Content contentState={isClick}/>
      <button onClick={handler}>Click Togger</button>
    </div>
  );
};
export default Header;
