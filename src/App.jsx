import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Footer/>} />
        {/* <Route
        path={process.env.PUBLIC_URL + "/schedule"}
        element={<Schedule />}
      /> */}
      </Routes>
    </Router>
  );
}

export default App;
