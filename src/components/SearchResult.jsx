import React from "react";

export const SearchResult = ({ result }) => {
  return (
    <div>
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </div>
  );
};
