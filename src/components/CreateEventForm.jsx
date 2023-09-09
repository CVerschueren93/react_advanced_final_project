import React from "react";
import { Form } from "react-router-dom";

export const CreateEventForm = () => {
  return (
    <div className="new-event">
      <Form method="post">
        <label>
          <h2>Title</h2>
          <input type="text" name="title" placeholder="Title" />
        </label>
        <label>
          <h2>Description</h2>
          <textarea name="description" placeholder="Desription" />
        </label>
        <label>
          <h2>Image</h2>
          <input type="text" name="URL" placeholder="ImageURL" />
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
          <input type="text" name="location" placeholder="Location" />
        </label>
        <label>
          <h2>Start Time</h2>
          <input type="text" name="start-time" placeholder="Start Time" />
        </label>
        <label>
          <h2>End Time</h2>
          <input type="text" name="end-time" placeholder="End Time" />
        </label>
        <label>
          <h2>User</h2>
          <input type="radio" value="Ignacio Doe" name="name" /> Ignacio Doe
          <input type="radio" value="Jane Bennett" name="name" /> Jane Bennett
        </label>
        <button type="submit">Add event</button>
      </Form>
    </div>
  );
};
