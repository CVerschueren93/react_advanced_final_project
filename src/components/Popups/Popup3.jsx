import React from "react";
import "./Popup3.css";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export function Popup3(props) {
  const navigate = useNavigate();
  const loader = async ({ params }) => {
    const event = await fetch(`http://localhost:3000/events/${params.eventId}`);

    return {
      event: await event.json(),
    };
  };
  const DeleteEvent = async () => {
    const { event } = useLoaderData();
    const response = await fetch(`http://localhost:3000/events/${event.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      navigate(`/events`);
    }
  };

  return props.trigger ? (
    <div className="popup3">
      <div className="popup3-inner">
        <button
          className="close-button3"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
        <p>Are you sure you want to delete this event?</p>
        <button onClick={() => DeleteEvent()}>Confirm</button>
      </div>
    </div>
  ) : (
    ""
  );
}
