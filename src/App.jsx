import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import About from "./components/About";

import TimeBox from "./components/SchedulePage/NoChanging/Schedule_Clock/Schedule_Timebox";

function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Search />} />
        <Route
          path={process.env.PUBLIC_URL + "/schedule"}
          element={<Schedule />}
        />
        <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
      </Routes>
      <Footer /> */}
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<TimeBox />} />
      </Routes>
    </Router>
  );
}

export default App;
