import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Popup } from "../components/Popups/Popup";
import { useState } from "react";
import { SearchBar } from "../components/SearchBars/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { CatSearchBar } from "../components/SearchBars/CatSearchBar";
import { CatSearchResultsList } from "../components/CatSearchResultsList";
import "./EventsPage.css";

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
      <h1>Upcoming Events</h1>

      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
      <div className="cat-search-bar-container">
        <CatSearchBar setResultsCat={setResultsCat} />
        <CatSearchResultsList results={resultsCat} />
      </div>
      <button className="add-event" onClick={() => setButtonPopup(true)}>
        Add Event
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Create Event</h3>
      </Popup>
      <ul>
        {events.map((event) => (
          <div key={event.id} className="event">
            <Link to={`event/${event.id}`}>
              <img className="image" src={event.image} />
            </Link>
            <div className="information">
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
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
