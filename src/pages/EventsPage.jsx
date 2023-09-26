import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Popup } from "../components/Popup";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { CatSearchBar } from "../components/CatSearchBar";
import { CatSearchResultsList } from "../components/CatSearchResultsList";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return { events: await events.json(), categories: await categories.json() };
};

export const EventsPage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { events, categories } = useLoaderData();

  const [results, setResults] = useState([]);
  const [resultsCat, setResultsCat] = useState([]);

  return (
    <div className="events-list">
      <h1>List of events</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
      <div className="cat-search-bar-container">
        <CatSearchBar setResultsCat={setResultsCat} />
        <CatSearchResultsList results={resultsCat} />
      </div>
      <button onClick={() => setButtonPopup(true)}>Add Event</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Create Event</h3>
      </Popup>
      <ul>
        {events.map((event) => (
          <div key={event.id} className="event">
            <Link to={`event/${event.id}`}>
              <img src={event.image} />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Start time: {event.startTime}</p>
              <p>End time: {event.endTime}</p>
              <p>
                Categories:
                {categories
                  .filter((category) =>
                    event.categoryIds?.includes(category.id)
                      ? category.name
                      : ""
                  )
                  .map((category) => " " + category.name + " ")}
              </p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
