import { useState } from "react";
import React from "react";

export const CatSearchBar = ({ setResultsCat }) => {
  const fetchData = (value) => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((json) => {
        const resultsCat = json.filter((event) => {
          return (
            value &&
            event &&
            event.categoryIds &&
            (event.categoryIds[0] ||
              event.categoryIds[1] ||
              event.categoryIds[2]) &&
            (event.categoryIds[0].number() === value.number() ||
              event.categoryIds[1].number() === value.number() ||
              event.categoryIds[2].number() === value.number())
          );
        });
        setResultsCat(resultsCat);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const [input, setInput] = useState("");
  return (
    <div className="input-wrapper">
      <h2>Search for event based on category:</h2>
      <p>Type 1 for sports</p>
      <p>Type 2 for games</p>
      <p>Type 3 for relaxation</p>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
