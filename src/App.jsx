import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import About from "./components/About";

//import Schedule_Modal_parent from "./components/SchedulePage/NoChanging/Schedule_Modal/Schedule_Modal_parent";

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

        {/*
        # modal componet 사용 예시입니다!
        
          <Route
          path={process.env.PUBLIC_URL + "/props"}
          element={<Schedule_Modal_parent />}
        />
        
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
