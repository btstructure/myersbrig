import React, { useState, useEffect } from "react";
import PersonalityQuiz from "./PersonalityQuiz";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("https://mbti-backend.onrender.com/personality")
      .then((res) => res.json())
      .then((data) => setQuestionList(data));
  }, []);

  
  return (
    <div>
      <div>
        <PersonalityQuiz questionList={questionList} />
      </div>
    </div>
  );
}

export default App;