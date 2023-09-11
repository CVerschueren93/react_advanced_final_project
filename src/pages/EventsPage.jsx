import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { Popup } from "../components/Popup";
import { useState } from "react";
import { CreateEventForm } from "../components/CreateEventForm";
import { useEffect } from "react";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return { events: await events.json(), categories: await categories.json() };
};

export const EventsPage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { events, categories } = useLoaderData();
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:3000/events");
      const listOfEvents = await response.json();
      setAllEvents(listOfEvents);
    };
    fetchEvents();
  }, []);

  const createEvent = async (event) => {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    });
    event.id = (await response.json()).id;
    setAllEvents(allEvents.concat(event));
  };

  return (
    <div className="events-list">
      <h1>List of events</h1>
      <button onClick={() => setButtonPopup(true)}>Add Event</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Create Event</h3>
        <CreateEventForm createEvent={createEvent} />
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
                {
                  categories.find((category) =>
                    event.categoryIds.includes(category.id)
                  ).name
                }
              </p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
