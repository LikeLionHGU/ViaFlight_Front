import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Search from "./components/Search";
import About from "./components/About";

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

        {/* <Route
        path={process.env.PUBLIC_URL + "/schedule"}
        element={<Schedule />}
      /> */}
      </Routes>
    </Router>
  );
}

export default App;
