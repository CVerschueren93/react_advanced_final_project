import React from "react";
import { useState } from "react";
import { Form } from "react";

export const CreateEventForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");

  //checkboxes - how should I use state handler here?
  const [eventCategories, setEventCategories] = useState(false);

  //radiobuttons - how should I use state handler here?
  const [eventUser, setEventUser] = useState(false);

  const handleTitleChange = (event) => {
    setEventTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setEventImage(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setEventCategories(event.target.value);
  };

  const handleLocationChange = (event) => {
    setEventLocation(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setEventStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEventEndTime(event.target.value);
  };

  const handleUserChange = (event) => {
    setEventUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      eventTitle,
      eventDescription,
      eventImage,
      eventCategories: {
        sports: false,
        games: false,
        relaxation: false,
      },
      eventLocation,
      eventStartTime,
      eventEndTime,
      eventUser: {
        IgnacioDoe: false,
        JaneBennett: false,
      },
    };

    //is this fetch method ok?
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });

    return (
      <div className="new-event">
        <Form method="post" onSubmit={handleSubmit}>
          <label>
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={eventTitle}
              onChange={handleTitleChange}
            />
          </label>
          <label>
            <h2>Description</h2>
            <textarea
              name="description"
              placeholder="Desription"
              value={eventDescription}
              onChange={handleDescriptionChange}
            />
          </label>
          <label>
            <h2>Image</h2>
            <input
              type="text"
              name="url"
              placeholder="ImageURL"
              value={eventImage}
              onChange={handleImageChange}
            />
          </label>
          <h2>Categories</h2>
          <input
            type="checkbox"
            id="sports"
            name="sports"
            value={eventCategories.sports}
            // checked={state.categories.sports}
            // onChange={handleChange}
          />
          <label htmlFor="sports">Sports</label>
          <input
            type="checkbox"
            id="games"
            name="games"
            value={eventCategories.games}
            //checked={state.categories.games}
            // onChange={handleChange}
            //onChange={(e) => setEventCategories(e.target.value)}
          />
          <label htmlFor="games">Games</label>
          <input
            type="checkbox"
            id="relaxation"
            name="relaxation"
            value={eventCategories.relaxation}
            //checked={state.categories.relaxation}
            // onChange={handleChange}
            // onChange={(e) => setEventCategories(e.target.value)}
          />
          <label htmlFor="relaxation">Relaxation</label>
          <label>
            <h2>Location</h2>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={eventLocation}
              onChange={handleLocationChange}
            />
          </label>
          <label>
            <h2>Start Time</h2>
            <input
              type="text"
              name="startTime"
              placeholder="Start Time"
              value={eventStartTime}
              onChange={handleStartTimeChange}
            />
          </label>
          <label>
            <h2>End Time</h2>
            <input
              type="text"
              name="endTime"
              placeholder="End Time"
              value={eventEndTime}
              onChange={handleEndTimeChange}
            />
          </label>
          <label>
            <h2>User</h2>
            <input
              type="radio"
              name="IgnacioDoe"
              value={eventUser.IgnacioDoe}
              // onChange={handleUserChange}
              //checked={state.user === "Ignacio Doe"}

              //onChange={(e) => setEventUser(e.target.value)}
            />{" "}
            Ignacio Doe
            <input
              type="radio"
              name="JaneBennett"
              value={eventUser.JaneBennett}
              // onChange={handleUserChange}
              //checked={state.user === "Jane Bennett"}

              //onChange={(e) => setEventUser(e.target.value)}
            />{" "}
            Jane Bennett
          </label>
          <button type="submit">Add event</button>
        </Form>
      </div>
    );
  };
};
