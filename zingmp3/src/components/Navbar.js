import React from "react";
// import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="vertical-menu-wrapper">
      <div className="vertical-menu-logo">
        <div className="w-[70%]">
          <img src="./images/logo-dark.svg" />
        </div>
        <span className="open-menu-btn"></span>
      </div>
      <ul className="vertical-menu">
        <li>          
          <Link to="/">
            <i className="fa-solid fa-user pr-2"></i>Cá Nhân
          </Link>
        </li>
        <li>
          <Link to="/khampha">
            <i className="fa-regular fa-circle-dot pr-2"></i>
            Khám Phá
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-solid fa-chart-simple pr-2"></i>ZingChart
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-solid fa-radio pr-2"></i>Radio
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-solid fa-table-list pr-2"></i>Theo Dõi
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/nhacmoi">
            <i className="fa-solid fa-music pr-2"></i> Nhạc Mới
          </Link>
        </li>
        <li>
          <Link to="/category">
            <i className="fa-solid fa-icons pr-2"></i> Thể Loại
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-regular fa-star pr-2"></i> Top 100
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-solid fa-video pr-2"></i> MV
          </Link>
        </li>
        <li id="user-info">
          MJ<span>online</span>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
