import "./App.css";
// import NavigationBar from "./NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
