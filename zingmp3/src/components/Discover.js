import React, { useContext } from "react";
import { Songs } from "../Context";
import { Carousel } from "antd";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "../App.css";
export default function DetailSong() {
  const { song } = useContext(Songs);
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const Slide = () => (
    <Carousel autoplay>
      <div style={{width : '50%'}}>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div style={{width : '50%'}}>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div style={{width : '50%'}}>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div style={{width : '50%'}}>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
  return (
    <div class="content-wrapper">
      <div class="content ">
        <Slide />
      </div>
    </div>
  );
}
