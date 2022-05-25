import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav className="blue darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Food Showcase
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/Tsekhmister/react_food"
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
