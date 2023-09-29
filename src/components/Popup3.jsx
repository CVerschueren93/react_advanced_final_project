import React from "react";
import "./Popup3.css";

export function Popup3(props) {
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
        <button>Confirm</button>
      </div>
    </div>
  ) : (
    ""
  );
}
