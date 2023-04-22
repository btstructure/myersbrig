import React from "react";
import PersonalityList from "./PersonalityList";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Myers-Briggs Personality Type Indicator</h1>
      <div className="container">
        <h2 className="container-title">What is the MBTI Test?</h2>
        <div>
          <p className="container-paragraph">
            The Myers-Briggs Personality Type Indicator is a self-report
            inventory designed to identify a person's personality type,
            strengths, and preferences. The questionnaire was developed by
            Isabel Myers and her mother Katherine Briggs based on their work
            with Carl Jung's theory of personality types.
          </p>
        </div>
      </div>
      <div>
        <PersonalityList />
      </div>
    </div>
  );
}

export default Home;