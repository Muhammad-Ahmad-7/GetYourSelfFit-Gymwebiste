import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import SearchExercise from "./components/SearchExercise";
import { Route, Routes } from "react-router-dom";
import "./css/style.css";
import Footer from "./components/Footer";
import Bmi from "./components/Bmi";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <HeroBanner />
      </div>
      <Routes>
        <Route exact path="/bmi" element={<Bmi />} />
        <Route exact path="/" element={<SearchExercise />} />
        {/* <Route exact path="/" element={<Bmi />} /> */}
      </Routes>
      {/* <SearchExercise /> */}
      <Footer />
    </>
  );
}

export default App;
