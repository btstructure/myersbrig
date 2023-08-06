import React, { useState, useEffect } from "react";
import PersonalityQuiz from "./PersonalityQuiz";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import "./App.css"

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("https://mbti-backend.onrender.com/questions")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="mbti-test"
          element={<PersonalityQuiz questionList={questionList} />}
        />
      </Routes>
    </>
  );
}

export default App;