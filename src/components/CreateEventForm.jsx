import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

export const CreateEventForm = () => {
  const handleChange = (key, event) =>
    setEventObject({ ...eventObject, [key]: event.target.value });

  const [eventObject, setEventObject] = useState({
    title: "",
    description: "",
    image: "",
    categoryIds: [],
    location: "",
    startTime: "",
    endTime: "",
    createdBy: {},
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventObject = {
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
      createdBy,
    };
  };

  //is this fetch method ok?
  fetch("http://localhost:3000/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventObject),
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
            value={eventObject.title}
            onChange={handleChange}
          />
        </label>
        <label>
          <h2>Description</h2>
          <textarea
            name="description"
            placeholder="Desription"
            value={eventObject.description}
            onChange={handleChange}
          />
        </label>
        <label>
          <h2>Image</h2>
          <input
            type="text"
            name="url"
            placeholder="ImageURL"
            value={eventObject.image}
            onChange={handleChange}
          />
        </label>
        <h2>Categories</h2>
        <input
          type="checkbox"
          id="sports"
          name="sports"
          value={1}
          onChange={(e) =>
            handleChange([...eventObject.categoryIds, e.target.value])
          }
        />
        <label htmlFor="sports">Sports</label>
        <input
          type="checkbox"
          id="games"
          name="games"
          value={2}
          onChange={(e) =>
            handleChange([...eventObject.categoryIds, e.target.value])
          }
        />
        <label htmlFor="games">Games</label>
        <input
          type="checkbox"
          id="relaxation"
          name="relaxation"
          value={3}
          onChange={(e) =>
            handleChange([...eventObject.categoryIds, e.target.value])
          }
        />
        <label htmlFor="relaxation">Relaxation</label>
        <label>
          <h2>Location</h2>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={eventObject.location}
            onChange={handleChange}
          />
        </label>
        <label>
          <h2>Start Time</h2>
          <input
            type="text"
            name="startTime"
            placeholder="Start Time"
            value={eventObject.startTime}
            onChange={handleChange}
          />
        </label>
        <label>
          <h2>End Time</h2>
          <input
            type="text"
            name="endTime"
            placeholder="End Time"
            value={eventObject.endTime}
            onChange={handleChange}
          />
        </label>
        <label>
          <h2>User</h2>
          <input
            type="radio"
            name="Ignacio Doe"
            value={1}
            onChange={(e) =>
              handleChange([...eventObject.createdBy, e.target.value])
            }
          />{" "}
          Ignacio Doe
          <input
            type="radio"
            name="Jane Bennett"
            value={2}
            onChange={(e) =>
              handleChange([...eventObject.createdBy, e.target.value])
            }
          />{" "}
          Jane Bennett
        </label>
        <button type="submit">Add event</button>
      </Form>
    </div>
  );
};
