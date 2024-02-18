import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Search from "./components/Search";
import InAirport from "./components/SchedulePage/InAirport";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<InAirport />} />
        {/* <Route
        path={process.env.PUBLIC_URL + "/schedule"}
        element={<Schedule />}
      /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
