import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="logo">
        <h1 className="logo-heading">APP</h1>
      </div>
      <div className={'nav-list $[isMenuOpen ? "active" : ""}'}>
        <Link className="nav-list" to={"/"}>
          Home
        </Link>
        <Link className="nav-list" to={"/todo"}>
          TodoApp
        </Link>
        <Link className="nav-list" to={"/weather"}>
          WeatherApp
        </Link>
        <Link className="nav-list" to={"/about"}>
          About
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <RxCross2 /> : <FiMenu />}
      </div>
    </nav>
  );
}
