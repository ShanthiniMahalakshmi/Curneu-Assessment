import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
//commit
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
    } else {
    }
  };
  //volla
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FAMILY TREE
            <i class="fab fa-typo3 " />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Details"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Create Family Tree
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SearchRelation"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i class="fa fa-search" aria-hidden="true"></i>
                Search Relation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
