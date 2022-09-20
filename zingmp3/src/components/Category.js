import React, { useContext } from "react";
import { Songs } from "../Context";
import "../App.css";
export default function Category() {
  const { song } = useContext(Songs);
  return (
    <div className="content-wrapper">
      <div className="content ">
        <div className="img-header p-10">
        <img src="./images/img-header-category.jpg" />
        </div>
      </div>
    </div>
  );
}
