import React from "react";
import { Heading } from "@chakra-ui/react";
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
      <Heading>List of events</Heading>
      <ul>
        {eventsList.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};
