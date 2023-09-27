import React from "react";
import { Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { Popup2 } from "../components/Popup2";
import { useState } from "react";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  const categories = await fetch("http://localhost:3000/categories");
  const users = await fetch("http://localhost:3000/users");

  return {
    event: await event.json(),
    categories: await categories.json(),
    users: await users.json(),
  };
};

export const EventPage = () => {
  const { event, categories, users } = useLoaderData();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="event-details">
      <Heading>Event</Heading>
      <button onClick={() => setButtonPopup(true)}>Edit Event</button>
      <Popup2 trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Edit Event</h3>
      </Popup2>
      <ul>
        <div key={event.id} className="event">
          <img src={event.image} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Start time: {event.startTime}</p>
          <p>End time: {event.endTime}</p>
          <p>
            Categories:
            {categories
              .filter((category) =>
                event.categoryIds?.includes(category.id) ? category.name : ""
              )
              .map((category) => " " + category.name + " ")}
          </p>
          <p>
            Created by:
            {users.find((user) => event.createdBy === user.id)?.name}
            <img
              src={users.find((user) => event.createdBy === user.id)?.image}
            />
          </p>
        </div>
      </ul>
    </div>
  );
};
