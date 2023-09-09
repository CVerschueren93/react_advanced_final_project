import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";

export const CreateEventForm = () => {
  const [eventTitle, setEventTitle] = useState();
  const [eventDescription, setEventDescription] = useState();
  const [eventImage, setEventImage] = useState();
  const [eventCategories, setEventCategories] = useState();
  const [eventLocation, setEventLocation] = useState();
  const [eventStartTime, setEventStartTime] = useState();
  const [eventEndTime, setEventEndTime] = useState();
  const [eventUser, setEventUser] = useState();

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
      eventCategories,
      eventLocation,
      eventStartTime,
      eventEndTime,
      eventUser,
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
  };

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
            name="URL"
            placeholder="ImageURL"
            value={eventImage}
            onChange={handleImageChange}
          />
        </label>
        <h2>Categories</h2>
        <input type="checkbox" id="sports" name="sports" value="Sports" />
        <label htmlFor="sports">Sports</label>
        <input type="checkbox" id="games" name="games" value="Games" />
        <label htmlFor="games">Games</label>
        <input
          type="checkbox"
          id="relaxation"
          name="relaxation"
          value="Relaxation"
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
            name="start-time"
            placeholder="Start Time"
            value={eventStartTime}
            onChange={handleStartTimeChange}
          />
        </label>
        <label>
          <h2>End Time</h2>
          <input
            type="text"
            name="end-time"
            placeholder="End Time"
            value={eventEndTime}
            onChange={handleEndTimeChange}
          />
        </label>
        <label>
          <h2>User</h2>
          <input
            type="radio"
            value="Ignacio Doe"
            name="name"
            value={eventUser}
            onChange={handleUserChange}
          />{" "}
          Ignacio Doe
          <input
            type="radio"
            value="Jane Bennett"
            name="name"
            value={eventUser}
            onChange={handleUserChange}
          />{" "}
          Jane Bennett
        </label>
        <button type="submit">Add event</button>
      </Form>
    </div>
  );
};
