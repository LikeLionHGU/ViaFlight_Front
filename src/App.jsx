import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Search from "./components/Search";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Search />} />

        {/* <Route
        path={process.env.PUBLIC_URL + "/schedule"}
        element={<Schedule />}
      /> */}
      </Routes>
    </Router>
  );
}

export default App;
