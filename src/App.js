import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
export const SavedListContext = createContext();
export const RecommendationsContext = createContext();
export const UserContext = createContext();
function App() {
  const [savedList, setSavedList] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Get items from local storage
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      console.log(userStorage);
      setUser(userStorage);
    } else {
      setUser([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    }
    const recommendedStorage = JSON.parse(localStorage.getItem("books"));
    if (recommendedStorage) {
      console.log(recommendedStorage);
      setRecommended(recommendedStorage);
    } else {
      fetch("https://bookmatch.pythonanywhere.com/random")
        .then((res) => res.json())
        .then((data) => {
          setRecommended(data);
        });
    }
    const savedListStorage = JSON.parse(localStorage.getItem("savedList"));
    if (savedListStorage) {
      console.log(savedListStorage);
      setSavedList(savedListStorage);
    }
  }, []);

  return (
    <SavedListContext.Provider value={[savedList, setSavedList]}>
      <UserContext.Provider value={[user, setUser]}>
        <RecommendationsContext.Provider value={[recommended, setRecommended]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            {/* Each Route elemenet specifies a path in a specific page of the website  */}
          </Routes>
        </RecommendationsContext.Provider>
      </UserContext.Provider>
    </SavedListContext.Provider>
  );
}

export default App;
