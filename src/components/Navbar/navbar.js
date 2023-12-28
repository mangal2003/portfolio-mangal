import React from "react";
import "./navbar.css";
import logo from "../../components/Navbar/logo.jpg";
// import menu from "./burgerMenu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="desktopMenuListItems"
        >
          home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItems"
        >
          about
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItems"
        >
          portfolio
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItems"
        >
          certificates
        </Link>
      </div>
      <div className="desktopBtn">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <button>💬 contact me</button>
        </Link>
      </div>
      {/* <div id="mobMenu" className="mobileMenu"> */}
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="mobMenuListItems"
      >
        🏠
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="mobMenuListItems"
      >
        👩🏻‍💻
      </Link>
      <Link
        activeClass="active"
        to="works"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="mobMenuListItems"
      >
        🛄
      </Link>
      <Link
        activeClass="active"
        to="contactPage"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="mobMenuListItems"
      >
        💳
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="mobMenuListItems"
      >
        ✉
      </Link>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
