import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Popup } from "../components/Popup";
import { useState } from "react";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return { events: await events.json(), categories: await categories.json() };
};

export const EventsPage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { events, categories } = useLoaderData();

  return (
    <div className="events-list">
      <h1>List of events</h1>
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
                {categories.filter((category) =>
                  event.categoryIds.includes(category.id) ? category.name : ""
                )}
              </p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
