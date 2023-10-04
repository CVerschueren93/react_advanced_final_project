import React from "react";
import "./Popup3.css";
import { useNavigate, useParams } from "react-router-dom";

export function Popup3(props) {
  const navigate = useNavigate();

  const { eventId } = useParams();

  const DeleteEvent = async () => {
    const response = await fetch(`http://localhost:3000/events/${eventId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      navigate(`/`);
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
