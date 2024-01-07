import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
