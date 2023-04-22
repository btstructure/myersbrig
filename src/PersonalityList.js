import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function PersonalityList() {
  const [personalityList, setPersonalityList] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/personality")
      .then((res) => res.json())
      .then((data) => setPersonalityList(data));
  }, []);

  function Search(query, personalityList) {
    if (!query) return personalityList;
    const lowerCaseQuery = query.toLowerCase();
    return personalityList.filter((list) => {
      const lowerCaseFourLetter = list.fourLetter.toLowerCase();
      return lowerCaseFourLetter.includes(lowerCaseQuery);
    });
  }

  const filteredList = Search(query, personalityList);

  const list = filteredList.map((list) => {
    return (
      <div
        key={list.id}
        onClick={() => {
          setSelectedPersonality(list);
          setModalOpen(true);
        }}
      >
        <p>{list.fourLetter}</p>
        <p>{list.title}</p>
        <img alt="personality-sprite" src={list.image}  />
      </div>
    );
  });

  return (
    <div className="personality-list">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search ..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <div className="personality-container">
          {list}
        </div>
        {selectedPersonality && (
          <Modal
            personality={selectedPersonality}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
    </div>
  );
}

export default PersonalityList;