import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EasyReact</div>
      <div className="navbar-list">
        <ul>
          <li>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/todo" className="todo">
              ToDoList
            </Link>
          </li>
          <li>
            <Link to="/quote" className="quote">
              QuoteGen
            </Link>
          </li>
          <li>
            <Link to="/weather" className="weather">
              CheckWeather
            </Link>
          </li>
          <li>
            <Link to="/books" className="book">
              BookShelf
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
