import React from "react";
import { Form } from "react-router-dom";
import { useState } from "react";

export const CreateEventForm = ({ createEvent }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventCategories, setEventCategories] = useState(false);
  const [eventLocation, setEventLocation] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventUser, setEventUser] = useState(false);

  // title: "",
  //  description: "",
  // url: "",
  // categories: {
  //  sports: true,
  //  games: true,
  //  relaxation: true,
  // },
  // location: "",
  //startTime: "",
  // endTime: "",
  // user: "Ignacio Doe",
  // });

  // function handleChange(event) {
  // const value =
  //  event.target.type === "checkbox"
  //   ? event.target.checked
  //  : event.target.value;
  // setState({
  ////  ...state,
  //  [event.target.name]: value,
  //  });
  // }
  // const [eventTitle, setEventTitle] = useState();
  // const [eventDescription, setEventDescription] = useState();
  // const [eventImage, setEventImage] = useState();
  //const [eventCategories, setEventCategories] = useState();
  // const [eventLocation, setEventLocation] = useState();
  //const [eventStartTime, setEventStartTime] = useState();
  // const [eventEndTime, setEventEndTime] = useState();
  //const [eventUser, setEventUser] = useState();

  //const handleTitleChange = (event) => {
  //   setEventTitle(event.target.value);
  //};

  //const handleDescriptionChange = (event) => {
  //  setEventDescription(event.target.value);
  //};

  //const handleImageChange = (event) => {
  //  setEventImage(event.target.value);
  //};

  // const handleCategoriesChange = (event) => {
  //  setEventCategories(event.target.value);
  //};

  //const handleLocationChange = (event) => {
  // setEventLocation(event.target.value);
  // };

  //const handleStartTimeChange = (event) => {
  //  setEventStartTime(event.target.value);
  //};

  //const handleEndTimeChange = (event) => {
  //  setEventEndTime(event.target.value);
  //};

  //const handleUserChange = (event) => {
  // setEventUser(event.target.value);
  //};
  const handleSubmit = (event) => {
    event.preventDefault();
    createEvent({
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
    });
    setEventTitle("");
    setEventDescription("");
    setEventImage("");
    setEventCategories(false);
    setEventLocation("");
    setEventStartTime("");
    setEventEndTime("");
    setEventUser(false);
  };

  //const handleSubmit = (event) => {
  // event.preventDefault();
  // const newEvent = {
  //  title,
  //  description,
  //  url,
  /// categories,
  // location,
  // startTime,
  // endTime,
  // user,
  // };

  //const handleSubmit = (event) => {
  // event.preventDefault();
  // const newEvent = {
  //  eventTitle,
  //  eventDescription,
  //  eventImage,
  //  eventCategories,
  //  eventLocation,
  //   eventStartTime,
  //  eventEndTime,
  //  eventUser,
  //};

  //fetch("http://localhost:3000/events", {
  //  method: "POST",
  // headers: { "Content-Type": "application/json" },
  //  body: JSON.stringify(newEvent),
  // });

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
            //onChange={handleTitleChange}
            //value={state.title}
            // onChange={handleChange}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </label>
        <label>
          <h2>Description</h2>
          <textarea
            name="description"
            placeholder="Desription"
            value={eventDescription}
            // onChange={handleDescriptionChange}
            // value={state.description}
            //onChange={handleChange}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </label>
        <label>
          <h2>Image</h2>
          <input
            type="text"
            name="url"
            placeholder="ImageURL"
            value={eventImage}
            // onChange={handleImageChange}
            //value={state.url}
            // onChange={handleChange}
            onChange={(e) => setEventImage(e.target.value)}
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
          onChange={(e) => setEventCategories(e.target.value)}
        />
        <label htmlFor="sports">Sports</label>
        <input
          type="checkbox"
          id="games"
          name="games"
          value={eventCategories.games}
          //checked={state.categories.games}
          // onChange={handleChange}
          onChange={(e) => setEventCategories(e.target.value)}
        />
        <label htmlFor="games">Games</label>
        <input
          type="checkbox"
          id="relaxation"
          name="relaxation"
          value={eventCategories.relaxation}
          //checked={state.categories.relaxation}
          // onChange={handleChange}
          onChange={(e) => setEventCategories(e.target.value)}
        />
        <label htmlFor="relaxation">Relaxation</label>
        <label>
          <h2>Location</h2>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={eventLocation}
            // onChange={handleLocationChange}
            //value={state.location}
            // onChange={handleChange}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </label>
        <label>
          <h2>Start Time</h2>
          <input
            type="text"
            name="startTime"
            placeholder="Start Time"
            value={eventStartTime}
            //onChange={handleStartTimeChange}
            //value={state.startTime}
            //onChange={handleChange}
            onChange={(e) => setEventStartTime(e.target.value)}
          />
        </label>
        <label>
          <h2>End Time</h2>
          <input
            type="text"
            name="endTime"
            placeholder="End Time"
            value={eventEndTime}
            //onChange={handleEndTimeChange}
            //value={state.endTime}
            //onChange={handleChange}
            onChange={(e) => setEventEndTime(e.target.value)}
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
            // onChange={handleChange}
            onChange={(e) => setEventUser(e.target.value)}
          />{" "}
          Ignacio Doe
          <input
            type="radio"
            name="JaneBennett"
            value={eventUser.JaneBennett}
            // onChange={handleUserChange}
            //checked={state.user === "Jane Bennett"}
            //onChange={handleChange}
            onChange={(e) => setEventUser(e.target.value)}
          />{" "}
          Jane Bennett
        </label>
        <button type="submit">Add event</button>
      </Form>
    </div>
  );
};
