import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Search from "./components/Search";
import Slider from "./components/SearchPage/Slider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Slider />} />
        {/* <Route
        path={process.env.PUBLIC_URL + "/schedule"}
        element={<Schedule />}
      /> */}
      </Routes>
    </Router>
  );
}

export default App;
