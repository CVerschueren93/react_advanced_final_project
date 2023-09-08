import React from "react";

import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");

  return { events: await events.json(), categories: await categories.json() };
};

export const EventsPage = () => {
  const { events, categories } = useLoaderData();
  return (
    <div className="events-list">
      <h1>List of events</h1>
      <ul>
        {events.map((event) => (
          <div key={event.id}>
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
          </div>
        ))}
      </ul>
    </div>
  );
};
