import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Header />
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
