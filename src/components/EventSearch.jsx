import React from "react";
import { useState } from "react";
import { TextInput } from "./TextInput";

export const EventSearch = async () => {
  let [searchField, setSearchField] = useState("");

  const response = await fetch("http://localhost:3000/events");
  const events = await response.json();

  let eventArray = (searchResult) => {
    if (searchResult.length == 0) {
      return events;
    } else {
      let filteredList = events.filter((event) =>
        event.title.toLowerCase().includes(searchResult.toLowerCase())
      );
      return filteredList;
    }
  };

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <div className="searchBar">
        <h3>Event checker</h3>
      </div>
      <TextInput changeFn={handleChange} key={eventArray(searchField)} />
    </>
  );
};
