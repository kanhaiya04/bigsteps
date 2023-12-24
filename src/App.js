import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import { NavbarComponent } from "./components/NavbarComponent";
import Search from "./screens/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:text" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
