import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import TodoList from "../pages/todo/TodoList";
import Quote from "../pages/quote/Quote";
import WeatherApp from "../pages/weather/WeatherApp";
import BookShelf from "../pages/bookshelf/BookShelf";

const Main = () => {
  return (
    <main className="main">
      <div className="main-landing">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/books" element={<BookShelf />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
