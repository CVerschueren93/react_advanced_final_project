import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const EventsPage = () => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/events");
      const events = await response.json();
      setEventsList(events);
    }
    fetchData();
  }, []);

  return (
    <div className="events-list">
      <h1>List of events</h1>
      <ul>
        {eventsList.map((event) => (
          <div key={event.id}>
            <img src={event.image} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Start time: {event.startTime}</p>
            <p>End time: {event.endTime}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
