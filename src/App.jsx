import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import About from "./components/About";

import Noinput from "./components/SchedulePage/Noinput_paige/Noinput";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Search />} />
        <Route
          path={process.env.PUBLIC_URL + "/schedule"}
          element={<Schedule />}
        />
        <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />

        <Route path={process.env.PUBLIC_URL + "/no"} element={<Noinput />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
