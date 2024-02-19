import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Search from "./components/Search";
import Schedule from "./components/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Search />} />
        <Route
          path={process.env.PUBLIC_URL + "/Schedule"}
          element={<Schedule />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
