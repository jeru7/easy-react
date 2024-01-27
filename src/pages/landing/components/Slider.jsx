import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="slider">
      <ul className="landing-projects">
        <Link to="/todo">
          <li className="project">
            <p>ToDoList</p>
          </li>
        </Link>
        <Link to="/quote">
          <li className="project">
            <p>QuoteGen</p>
          </li>
        </Link>
        <Link to="weather">
          <li className="project">
            <p>CheckWeather</p>
          </li>
        </Link>
        <Link to="book">
          <li className="project">
            <p>BookShelf</p>
          </li>
        </Link>
        <Link to="/todo">
          <li className="project">
            <p>ToDoList</p>
          </li>
        </Link>
        <Link to="/quote">
          <li className="project">
            <p>QuoteGen</p>
          </li>
        </Link>
        <Link to="weather">
          <li className="project">
            <p>CheckWeather</p>
          </li>
        </Link>
        <Link to="book">
          <li className="project">
            <p>BookShelf</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Slider;
