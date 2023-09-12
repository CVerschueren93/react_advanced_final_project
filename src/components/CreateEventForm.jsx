import React from "react";
import { useState } from "react";
import { Form } from "react";

export const CreateEventForm = () => {
  const handleChange = (key, event) =>  
  setEventObject({...eventObject, key:event.target.value});
};
  const [eventObject, setEventObject] = useState({
    title: '',
    description: '',
    image: '',
    categoryIds: {
      sports: 1,
      games: 2,
      relaxation: 3,
    },
    location: '',
    startTime: '',
    endTime:'',
    createdBy: {
      IgnacioDoe: 1,
      JaneBennett: 2,
    }

  });

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      title,
      description,
      image,
      categoryIds,//// {
       // sports: ,
      //  games: ,
       // relaxation: ,
     // },
      location,
      startTime,
      endTime,
      createdBy,// {
       // IgnacioDoe: 1,
       // JaneBennett: 2,
      //},
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
              value={newEvent.title}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>Description</h2>
            <textarea
              name="description"
              placeholder="Desription"
              value={newEvent.description}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>Image</h2>
            <input
              type="text"
              name="url"
              placeholder="ImageURL"
              value={newEvent.image}
              onChange={handleChange}
            />
          </label>
          <h2>Categories</h2>
          <input
            type="checkbox"
            id="sports"
            name="sports"
            value={1}
            onChange={(e) => handleChange([...categoryIds, e.target.value])}
            
          />
          <label htmlFor="sports">Sports</label>
          <input
            type="checkbox"
            id="games"
            name="games"
            value={2}
            onChange={(e) =>
            handleChange([...categoryIds, e.target.value])
            }
           
          />
          <label htmlFor="games">Games</label>
          <input
            type="checkbox"
            id="relaxation"
            name="relaxation"
            value={3}
            onChange={(e)=> handleChange([...categoryIds, e.target.value])}
            
          />
          <label htmlFor="relaxation">Relaxation</label>
          <label>
            <h2>Location</h2>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newEvent.location}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>Start Time</h2>
            <input
              type="text"
              name="startTime"
              placeholder="Start Time"
              value={newEvent.startTime}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>End Time</h2>
            <input
              type="text"
              name="endTime"
              placeholder="End Time"
              value={newEvent.endTime}
              onChange={handleChange}
            />
          </label>
          <label>
            <h2>User</h2>
            <input
              type="radio"
              name="Ignacio Doe"
              value={1}
              onChange={(e)=> handleChange([...createdBy, e.target.value])}

            />{" "}
            Ignacio Doe
            <input
              type="radio"
              name="Jane Bennett"
              value={2}
              onChange={(e)=> handleChange([...createdBy, e.target.value])}
            />{" "}
            Jane Bennett
          </label>
          <button type="submit">Add event</button>
        </Form>
      </div>
    );
  };
};
