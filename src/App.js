import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      {/* Each Route elemenet specifies a path in a specific page of the website  */}
    </Routes>
  );
}

export default App;
