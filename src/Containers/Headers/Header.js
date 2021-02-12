import React from "react";
import { Link } from "react-router-dom";
import Marvel_Logo from "../../Assets/Marvel_Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="Logo">
        <img alt="Marvel Logo" src={Marvel_Logo} />
      </div>
      <div className="Characters_picture"></div>
      <div className="NavWrapper">
        <nav>
          <Link to="/">
            <p>CHARACTERS</p>
          </Link>
          <Link to="/Comics">
            <p>COMICS</p>
          </Link>
          <Link to="/Favorites">
            <p>FAVORITES</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
