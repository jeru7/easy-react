import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo-text">EasyReact</div>
      </Link>
      <div
        className={`navbar-list ${isOpen ? "active" : ""}`}
        style={{ display: isOpen ? "flex" : "" }}
      >
        <ul>
          <Link to="/" className={`home ${isOpen ? "active" : ""}`}>
            <li>Home</li>
          </Link>
          <Link to="/todo" className={`todo ${isOpen ? "active" : ""}`}>
            <li>ToDoList</li>
          </Link>
          <Link to="/quote" className={`quote ${isOpen ? "active" : ""}`}>
            <li>QuoteGen</li>
          </Link>
          <Link to="/weather" className={`weather ${isOpen ? "active" : ""}`}>
            <li>CheckWeather</li>
          </Link>
          <Link to="/books" className={`book ${isOpen ? "active" : ""}`}>
            <li>BookShelf</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-menu" onClick={handleMenu}>
        <FontAwesomeIcon
          className="menu-icon"
          icon={isOpen ? faMinus : faBars}
        />
      </div>
    </nav>
  );
};

export default Header;
