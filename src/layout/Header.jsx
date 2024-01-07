import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo-text">EasyReact</div>
      </Link>
      <div className="navbar-list">
        <ul>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/todo" className="todo">
            <li>ToDoList</li>
          </Link>
          <Link to="/quote" className="quote">
            <li>QuoteGen</li>
          </Link>
          <Link to="/weather" className="weather">
            <li>CheckWeather</li>
          </Link>
          <Link to="/books" className="book">
            <li>BookShelf</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
