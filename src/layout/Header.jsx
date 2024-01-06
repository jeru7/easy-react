import "./layout.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EasyReact</div>
      <div className="navbar-list">
        <ul>
          <li className="home">Home</li>
          <li className="todo">ToDoList</li>
          <li className="quote">QuoteGen</li>
          <li className="weather">CheckWeather</li>
          <li className="books">Books</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
