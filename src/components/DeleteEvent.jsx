import React from "react";

import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);

  return {
    event: await event.json(),
  };
};
export const DeleteEvent = () => {
  const { event } = useLoaderData();
  fetch(`http://localhost:3000/events/${event.id}`, {
    method: "DELETE",
  });
};
